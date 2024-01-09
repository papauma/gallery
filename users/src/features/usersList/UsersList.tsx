import React, { useEffect, useState } from 'react'
import { type iUser } from '../../model/interfaces'

import PageTitle from 'main/PageTitle'
import Search from 'main/Search'

import './usersList.scss'
import TableUsers from '../../components/tableUsers/TableUsers'

export default function UsersList (): JSX.Element {
  const [users, setUsers] = useState<iUser[]>([])
  const [filteredUsers, setFilteredUsers] = useState<iUser[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json() as iUser[]
      setUsers(data)
      setFilteredUsers(data)
    }
    fetchUsers()
  }, [])
  useEffect(() => {
    setFilteredUsers(users.filter((us) =>
      us.username.toLowerCase().includes(searchValue.toLowerCase()) ||
    us.email.toLowerCase().includes(searchValue.toLowerCase()) ||
    us.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    us.phone.toLowerCase().includes(searchValue.toLowerCase())
    ))
  }, [searchValue])

  return (
    <div className="users">
      <PageTitle text='List of users' />
      <div className="users_filter">
        <Search placeholder='Filter users by a field...' returnAction={(param: string) => { setSearchValue(param) }}/>
      </div>
      <TableUsers usersList={filteredUsers} />
    </div>
  )
}
