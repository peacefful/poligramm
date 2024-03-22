import * as yup from 'yup';

export const validator = {
  login: yup.string().min(6),
  password: yup.string().min(12)
}