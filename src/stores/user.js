import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, apiAuth } from '../boot/axios'
import { useRouter } from 'vue-router'
import { Notify, Loading, QSpinnerIos } from 'quasar'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()

  const token = ref('')
  const account = ref('')
  const email = ref('')
  const cart = ref(0)
  const archive = ref([])
  const productArchive = ref([])
  const role = ref(0)
  const timer = ref(0)

  const showLoading = () => {
    Loading.show({
      message: 'Some important process  is in progress. Hang on...',
      spinner: QSpinnerIos,
      spinnerColor: 'primary'
      // other props
    })
    timer.value = setTimeout(() => {
      Loading.hide()
      timer.value = void 0
    }, 1000)
  }

  // 判斷是否登入，token長度有沒有<0
  const isLogin = computed(() => {
    return token.value.length > 0
  })
  // 判斷是不是管理員，role的狀態是否為1
  const isAdmin = computed(() => {
    return role.value === 1
  })
  const avatar = computed(() => {
    return `https://source.boringavatars.com/beam/56/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
  })
  const login = async (form) => {
    try {
      const { data } = await api.post('/users/login', form)
      token.value = data.result.token
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      role.value = data.result.role
      showLoading()
      // console.log(1)
      setTimeout(() => {
        Notify.create(
          {
            position: 'center',
            color: 'primary',
            message: '登入成功',
            icon: 'check_circle',
            timeout: 500,
            spinnerSize: 50
          }
        )
      }, 1000)
    } catch (error) {
      showLoading()
      // console.log(2)
      setTimeout(() => {
        Notify.create(
          {
            position: 'center',
            color: 'negative',
            message: error?.response?.data?.message || '發生錯誤',
            icon: 'report_problem',
            timeout: 1000,
            spinnerSize: 50
          }
        )
      }, 1000)
    }
  }
  const logout = async () => {
    try {
      await apiAuth.delete('/users/logout')
      token.value = ''
      account.value = ''
      role.value = 0
      cart.value = 0
      showLoading()
      setTimeout(() => {
        Notify.create(
          {
            position: 'center',
            color: 'primary',
            message: '登出成功',
            icon: 'check_circle',
            timeout: 500,
            spinnerSize: 50
          }
        )
      }, 1000)
    } catch (error) {
      showLoading()
      // console.log(2)
      setTimeout(() => {
        Notify.create(
          {
            position: 'center',
            color: 'negative',
            message: error?.response?.data?.message || '發生錯誤',
            icon: 'report_problem',
            timeout: 1000,
            spinnerSize: 50
          }
        )
      }, 1000)
    }
  }
  const getUser = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      role.value = data.result.role
      archive.value = data.result.archive
      productArchive.value = data.result.productArchive
    } catch (error) {
      logout()
    }
  }
  const editCart = async ({ _id, quantity }) => {
    if (token.value.length === 0) {
      Notify.create(
        {
          position: 'center',
          color: 'negative',
          message: '請先登入',
          icon: 'report_problem',
          timeout: 1000,
          spinnerSize: 50
        }
      )
      router.push('/login')
      return
    }
    try {
      const { data } = await apiAuth.post('/users/cart', { p_id: _id, quantity: parseInt(quantity) })
      cart.value = data.result
      Notify.create(
        {
          position: 'center',
          color: 'primary',
          message: '購物車編輯成功',
          icon: 'check_circle',
          timeout: 500,
          spinnerSize: 50
        }
      )
    } catch (error) {
      Notify.create(
        {
          position: 'center',
          color: 'negative',
          message: '加入購物車失敗',
          icon: 'report_problem',
          timeout: 1000,
          spinnerSize: 50
        }
      )
    }
  }
  const editArchive = async (_id) => {
    if (token.value.length === 0) {
      Notify.create(
        {
          position: 'center',
          color: 'negative',
          message: '請先登入',
          icon: 'report_problem',
          timeout: 1000,
          spinnerSize: 50
        }
      )
      router.push('/login')
      return false
    }
    try {
      // g_id: _id，g_id表示傳進去的key
      const { data } = await apiAuth.post('/users/archive', { g_id: _id })
      archive.value = data.result
      Notify.create(
        {
          position: 'center',
          color: 'primary',
          message: '成功',
          icon: 'check_circle',
          timeout: 500,
          spinnerSize: 50
        }
      )
      return true
    } catch (error) {
      Notify.create(
        {
          position: 'center',
          color: 'negative',
          message: '加入收藏失敗',
          icon: 'report_problem',
          timeout: 1000,
          spinnerSize: 50
        }
      )
      return false
    }
  }
  const editProductArchive = async (_id) => {
    if (token.value.length === 0) {
      Notify.create(
        {
          position: 'center',
          color: 'negative',
          message: '請先登入',
          icon: 'report_problem',
          timeout: 1000,
          spinnerSize: 50
        }
      )
      router.push('/login')
      return false
    }
    try {
      const { data } = await apiAuth.post('/users/productArchive', { p_id: _id })
      productArchive.value = data.result
      Notify.create(
        {
          position: 'center',
          color: 'primary',
          message: '收藏編輯成功',
          icon: 'check_circle',
          timeout: 500,
          spinnerSize: 50
        }
      )
      return true
    } catch (error) {
      Notify.create(
        {
          position: 'center',
          color: 'negative',
          message: '加入收藏失敗',
          icon: 'report_problem',
          timeout: 1000,
          spinnerSize: 50
        }
      )
      return false
    }
  }
  const checkout = async () => {
    try {
      await apiAuth.post('/orders')
      cart.value = 0
      Notify.create(
        {
          position: 'center',
          color: 'primary',
          message: '結帳成功',
          icon: 'report_problem',
          timeout: 1000,
          spinnerSize: 50
        }
      )
    } catch (error) {
      Notify.create(
        {
          position: 'center',
          color: 'negative',
          message: '結帳失敗',
          icon: 'report_problem',
          timeout: 1000,
          spinnerSize: 50
        }
      )
    }
  }
  return {
    token,
    account,
    email,
    cart,
    role,
    archive,
    productArchive,
    login,
    logout,
    isLogin,
    isAdmin,
    getUser,
    avatar,
    editCart,
    checkout,
    editArchive,
    editProductArchive
  }
}, {
  persist: {
    key: '20230201',
    paths: ['token']
  }
})
