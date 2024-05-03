import axios from 'axios'
import Cookies from 'js-cookie'

const getAccessToken = () => {
  return Cookies.get('accessToken')
}

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

http.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken()
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)