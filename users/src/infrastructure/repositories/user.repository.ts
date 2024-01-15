import { type UserDTO } from '../http/dto/UserDTO'

import { http } from '../http/http'
import { type User } from '../../domain/models/User'
import { ENDPOINT_USERS, ENDPOINT_USERS_PARAM } from '../../utils/constants/constants'

const fomatUser = (user: UserDTO): User => ({
  id: user.id,
  username: user.username,
  name: user.name,
  email: user.email,
  phone: user.phone,
  website: user.website,
  address: {
    street: user.address.street,
    suite: user.address.suite,
    city: user.address.city,
    zipcode: user.address.zipcode,
    geo: {
      lat: Number(user.address.geo.lat),
      lng: Number(user.address.geo.lng)
    }
  },
  company: {
    name: user.company.name,
    catchPhrase: user.company.catchPhrase,
    bs: user.company.bs
  }
})

export const userRepository = {
  getUsers: async () => {
    const users = await http.get<UserDTO[]>(ENDPOINT_USERS)
    // we can extract this transform to a function inside this file to be reused by different methods
    return users.map((UserDTO): User => fomatUser(UserDTO))
  },
  getUser: async (id: number) => {
    const users = await http.get<UserDTO[]>(ENDPOINT_USERS_PARAM + id)
    // we can extract this transform to a function inside this file to be reused by different methods
    return users.map((UserDTO): User => fomatUser(UserDTO))
  }
}
