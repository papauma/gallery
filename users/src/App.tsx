import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserInfo from './features/userInfo/UserInfo'
import UsersList from './features/usersList/UsersList'

const App = (): JSX.Element => {
  return <div>
  <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path=":userId" element={<UserInfo />} />
    </Routes>
 </div>
}

export default App
