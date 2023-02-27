
let promise = null

const id = 'google-maps'
const url = `https://maps.googleapis.com/maps/api/js?key=${process.env.google_key}&libraries=places&callback=initMap`

export default function () {
  if (!promise) {
    promise = new Promise((resolve, reject) => {
      if (document.getElementById(id)) {
        console.error(`Error loading ${url} async: ${id} is not unique`)
        return
      }
      const script = document.createElement('script')
      script.src = url
      script.async = true
      script.id = id
      script.onload = () => {
        resolve()
      }
      script.onerror = (err) => {
        reject(err)
      }
      document.body.appendChild(script)
    })
  }
  return promise
}
