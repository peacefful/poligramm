import axios from 'axios'
import Cookies from 'js-cookie'

const accessToken: string | undefined = Cookies.get('accessToken')

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})
