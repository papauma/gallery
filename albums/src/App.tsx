import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AlbumList from './infrastructure/components/AlbumList/AlbumList'

import './index.css'
import AlbumInfo from './infrastructure/components/AlbumInfo/AlbumInfo'

const App = (): JSX.Element => (
    <Routes>
      <Route path="/" element={<AlbumList />} />
      <Route path=":userId" element={<AlbumInfo />} />
    </Routes>
)
export default App
