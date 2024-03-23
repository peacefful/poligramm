import * as yup from 'yup'

export const authValidator = {
  login: yup.string().min(6),
  password: yup.string().min(12)
}

export const regValidator = Object.assign(authValidator, {
  surname: yup.string().min(2),
  name: yup.string().min(2),
  phone: yup.string().min(10)
})