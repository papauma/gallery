import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from 'main/Loader'

const UserInfo = React.lazy(async () => await import('./features/userInfo/UserInfo'))
const UsersList = React.lazy(async () => await import('./features/usersList/UsersList'))

const App = (): JSX.Element => {
  return <div>
     <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path=":userId" element={<UserInfo />} />
      </Routes>
     </Suspense>
 </div>
}

export default App
