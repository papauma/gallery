import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Photos from './features/photos/Photos'

const App = (): JSX.Element => (
    <Routes>
      <Route path=":albumId" element={<Photos />} />
    </Routes>
)
export default App
