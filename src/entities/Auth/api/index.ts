import { http } from '@/shared/api'
import { storage } from '@/shared/lib/utils'
import { AuthModel } from '@/entities/Auth'
import type { IUser } from '@/shared/types'

export const authorization = async (authData: AuthModel.IAuthData): Promise<void> => {
  try {
    const isAuthUser = await http.post(`/api/users/auth`, { ...authData })

    if (isAuthUser) {
      storage.setData('token', isAuthUser.data.token)
      storage.setData('id', isAuthUser.data.id)
      storage.setData('uuid', isAuthUser.data.uuid)
      storage.setData('username', `${isAuthUser.data.name} ${isAuthUser.data.surname}`)

      console.log(isAuthUser.data);
      
    } else {
      new Error('Произошла ошибка')
    }
  } catch (error) {
    console.log(error)
  }
}

export const registration = async (user: IUser) => {
  try {
    await http.post('/api/users', { ...user })
  } catch (error) {
    console.log(error)
  }
}
