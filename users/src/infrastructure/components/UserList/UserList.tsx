import * as React from 'react'
import { type User } from '../../../domain/models/User'
import UsersService from '../../../domain/services/Users.service'
import TableUsers from '../ui/tableUsers/TableUsers'

import PageTitle from 'main/PageTitle'
import Search from 'main/Search'
import Loader from 'main/Loader'

import './userList.scss'

export default function UserList (): JSX.Element {
  const [users, setUsers] = React.useState<User[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    UsersService.getUsers().then(setUsers).finally(() => { setLoading(false) })
  }, [])

  const onChange = (paramSearch: string): void => {
    setUsers(UsersService.filterUsersByField(paramSearch))
  }

  return (
    loading
      ? <Loader />
      : <div className="userList">
      <PageTitle text='List of users' />
      <div className="users_filter">
        <Search placeholder='Filter users by any field...' returnAction={(param: string) => { onChange(param) }}/>
      </div>
      <TableUsers usersList={users} />
    </div>

  )
}
