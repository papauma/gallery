import { userRepository } from '../../infrastructure/repositories/user.repository'
import { type User } from '../models/User'

class UsersService {
  userRepository: any
  allUsers: User[]
  static allUsers: User[]
  constructor () {
    this.userRepository = userRepository
    this.allUsers = []
  }

  static async getUsers (): Promise<User[]> {
    const users = await userRepository.getUsers()
    this.allUsers = users
    return users
  }

  static async getUsersById (userId: number): Promise<User[]> {
    const user = await userRepository.getUser(userId)
    return user
  }

  static filterUsersByField (param: string): User[] {
    const filteredUsers = this.allUsers.filter(user => user.name.includes(param) || user.username.includes(param) || user.email.includes(param) || user.phone.includes(param))
    return filteredUsers
  }

  static async getUserById (id: number): Promise<User | undefined> {
    if (this.allUsers === null || this.allUsers === undefined || this.allUsers.length === 0) {
      await this.getUsers()
    } else {
      const user = this.allUsers.find(user => user.id === id)
      return user
    }
  }
}

export default UsersService
