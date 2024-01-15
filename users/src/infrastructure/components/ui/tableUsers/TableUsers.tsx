import React from 'react'

import { type iUser } from 'model/interfaces'
import ButtonAction from '../buttonAction/ButtonAction'

export default function TableUsers ({ usersList }: { usersList: iUser[] }): JSX.Element {
  return <>
  {(usersList.length > 0)
    ? <><table className='users_list'>
        <thead className='users_listHeader'>
          <tr>
            <th className="users_cell users_cell--username">Username</th>
            <th className="users_cell users_cell--mail">mail</th>
            <th className="users_cell users_cell--name">Name</th>
            <th className="users_cell users_cell--phone">Phone</th>
            <th className="users_cell users_cell--action"></th>
          </tr>
        </thead>
        <tbody>

        {usersList.map((user: iUser) => (
          <tr key={user.id} className='users_row'>
            <td className="users_cell users_cell--username">{user.username}</td>
            <td className="users_cell users_cell--mail">{user.email}</td>
            <td className="users_cell users_cell--name">{user.name}</td>
            <td className="users_cell users_cell--surnaphoneme">{user.phone}</td>
            <td className="users_cell users_cell--action">
              <ButtonAction text="See user" link={`/users/${user.id}`} />&nbsp;<ButtonAction text="See albums" link={`/albums/${user.id}`} type="SECONDARY"/>
            </td>
          </tr>
        )) }
        </tbody>
      </table>
      <div className="num_results">There are {usersList.length} results</div>
      </>
    : <div>There are no results.</div>}</>
}
