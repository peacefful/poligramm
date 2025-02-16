import axios from 'axios'

const getAccessToken = () => {
  const accessToken = useCookie('accessToken')
  return accessToken.value
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

export const useCustomFetch = <T>(endpoint: string, options: any = {}) => {
  const token = useCookie('accessToken')

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token.value}`
  }

  return useFetch<T>(`${import.meta.env.VITE_BASE_URL}${endpoint}`, options)

  return useFetch<T>(endpoint, options)
}
