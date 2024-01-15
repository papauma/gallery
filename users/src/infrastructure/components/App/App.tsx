import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserList from '../UserList/UserList'
import UserInfo from '../UserInfo/UserInfo'

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<UserList />} />
        <Route path=":userId" element={<UserInfo />} />
    </Routes>
  )
}

export default App
