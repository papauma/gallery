import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AlbumList from '../AlbumList/AlbumList'
import AlbumInfo from '../AlbumInfo/AlbumInfo'

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<AlbumList />} />
        <Route path=":userId" element={<AlbumInfo />} />
    </Routes>
  )
}

export default App
