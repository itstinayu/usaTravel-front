import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useUserStore } from '../stores/user'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// // for each client)
const api = axios.create({ baseURL: process.env.VITE_API })
const apiAuth = axios.create({ baseURL: process.env.VITE_API })
const apiAdvisor = axios.create({ baseURL: 'https://travel-advisor.p.rapidapi.com/' })
apiAdvisor.defaults.headers['x-rapidapi-host'] = 'travel-advisor.p.rapidapi.com'
apiAdvisor.defaults.headers['x-rapidapi-key'] = process.env.rapidapi_key
// console.log(process.env.VITE_API)

// export const api = axios.create({
//   baseURL: import.meta.env.VITE_API
// })

// export const apiAuth = axios.create({
//   baseURL: import.meta.env.VITE_API
// })

// 呼叫 axios ---> interceptors.request ---> 送出請求 ---> interceptors.response ---> 呼叫的地方
// 用來修改請求、回應內容，config是呼叫、請求設定
apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  // 設定自動補上user的token
  config.headers.authorization = 'Bearer ' + user.token
  return config
})

// 攔截
// apiAuth.interceptors.response.use(成功時的 function, 失敗時的 function)
apiAuth.interceptors.response.use(res => {
  return res
}, error => {
  // 如果失敗的請求有回應
  if (error.response) {
    // 如果失敗的請求回應是 401，可能是 JWT 驗證失敗
    if (error.response.status === 401) {
      // 確認請求的網址不是延長登入、登入、登出
      if (!['/users/extend', '/users/login', '/users/logout'].includes(error.config.url)) {
        const user = useUserStore()
        // 傳送延長登入請求，{ data }就是延長登入200ok請求回傳的新的 token
        return apiAuth.patch('/users/extend', {}).then(({ data }) => {
          // 更新 pinia 的 JWT
          user.token = data.result
          // 修改原請求的 JWT
          error.config.headers.authorization = 'Bearer ' + user.token
          // 重新傳送原請求
          return axios(error.config)
        }).catch(_ => {
          // 重新登入失敗，強制登出
          user.logout()
          // 回傳原本的錯誤到呼叫的地方
          return Promise.reject(error)
        })
      }
    }
  }
  // 如果失敗的請求沒回應，回傳原本的錯誤到呼叫的地方
  return Promise.reject(error)
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  app.config.globalProperties.$apiAuth = apiAuth
  app.config.globalProperties.$apiAdvisor = apiAdvisor
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})
export { api, apiAuth, apiAdvisor }
