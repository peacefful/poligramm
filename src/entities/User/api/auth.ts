import axios from 'axios'
import type { IUserAuthData, IUser } from '../model'
import { storage } from '@/shared/lib'
import { isEmptyObj } from '../lib'

export const authorization = async (authData: IUserAuthData) => {
  try {
    if (isEmptyObj(authData)) {
      const isAuthUser = await axios.post(`/api/users/auth`, { ...authData })

      if (isAuthUser) {
        storage.setData('token', isAuthUser.data.token)
        storage.setData('id', isAuthUser.data.id)
        storage.setData('uuid', isAuthUser.data.uuid)
        storage.setData('username', `${isAuthUser.data.name} ${isAuthUser.data.surname}`)
      } else {
        new Error('Ошибка')
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const registration = async (user: IUser) => {
  try {
    if (isEmptyObj(user)) {
      await axios.post('/api/users', { ...user })
    }
  } catch (error) {
    console.log(error)
  }
}
