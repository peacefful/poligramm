import axios from 'axios'
import { storage } from '@/shared/lib/utils'

const token = storage.getData('token')

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: token
  }
})