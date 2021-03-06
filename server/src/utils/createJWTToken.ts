import jwt from 'jsonwebtoken'
import {reduce} from 'lodash'
import {IUser} from '../models/User'


interface ILoginData {
  email: string,
  password: string
}

export default (user: ILoginData) => jwt.sign(
  {
    data: reduce(user, (result: any, value, key) => {
      if (key !== 'password') {
        result[key] = value
      }
      return result
    }, {})
  },
  process.env.JWT_KEY || '',
  {
    expiresIn: process.env.JWT_MAX_AGE
  }
)
