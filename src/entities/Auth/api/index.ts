import axios from 'axios'
import { storage } from '@/shared/lib'
import type { IUserAuthData } from '@/entities/Auth'
import type { IUser } from '@/shared/types'

export const authorization = async (authData: IUserAuthData): Promise<void> => {
  try {
    const isAuthUser = await axios.post(`/api/users/auth`, { ...authData })

    if (isAuthUser) {
      storage.setData('token', isAuthUser.data.token)
      storage.setData('id', isAuthUser.data.id)
      storage.setData('uuid', isAuthUser.data.uuid)
      storage.setData('username', `${isAuthUser.data.name} ${isAuthUser.data.surname}`)
    } else {
      new Error('Произошла ошибка')
    }
  } catch (error) {
    console.log(error)
  }
}

export const registration = async (user: IUser) => {
  try {
    await axios.post('/api/users', { ...user })
  } catch (error) {
    console.log(error)
  }
}
