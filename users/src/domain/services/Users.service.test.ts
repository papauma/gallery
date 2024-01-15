// usersService.test.js
import UsersService from './Users.service'
import { userRepository } from '../../infrastructure/repositories/user.repository'

jest.mock('../../infrastructure/repositories/user.repository')

const mockUsers = [
  {
    id: 1,
    username: 'johndoe',
    email: 'johndoe@ex.com',
    name: 'John Doe',
    phone: '1234567890',
    website: 'johndoe.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 1',
      city: 'Anytown',
      zipcode: '12345',
      geo: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    company: {
      name: 'Company Name',
      catchPhrase: 'Catchphrase',
      bs: 'bs'
    }

  },
  {
    id: 2,
    username: 'janedoe 2',
    email: 'janedoe2@ex.com',
    name: 'Jane Doe 2',
    phone: '1234567892',
    website: 'johndoe.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 1',
      city: 'Anytown',
      zipcode: '12345',
      geo: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    company: {
      name: 'Company Name',
      catchPhrase: 'Catchphrase',
      bs: 'bs'
    }
  }
]

describe('UsersService', () => {
  test('should initialize with an empty user list', () => {
    const usersService = new UsersService()
    expect(usersService.allUsers).toEqual([])
  })

  test('should get users from userRepository and update allUsers', async () => {
    userRepository.getUsers = jest.fn()

    userRepository.getUsers.mockReturnValueOnce(Promise.resolve(mockUsers))

    await UsersService.getUsers()

    expect(userRepository.getUsers).toHaveBeenCalled()
    expect(UsersService.allUsers).toEqual(mockUsers)
  })

  test('should filter users by field', () => {
    userRepository.getUsers.mockReturnValueOnce(Promise.resolve(mockUsers))

    const filteredUsers = UsersService.filterUsersByField('John Doe')
    expect(filteredUsers).toHaveLength(1)
    expect(filteredUsers[0].name).toBe('John Doe')
  })

  test('should get user by id', async () => {
    userRepository.getUsers.mockReturnValueOnce(Promise.resolve(mockUsers))

    const user = await UsersService.getUserById(1)
    expect(user).toEqual(mockUsers.find(u => u.id === 1))
  })

  test('should get user by id from API', async () => {
    const user = await UsersService.getUserById(1)
    expect(user).toEqual(mockUsers.find(u => u.id === 1))
  })
})
