import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Albums from './features/albums/Albums'
import AlbumInfo from './features/albumInfo/AlbumInfo'

import './index.css'

const App = (): JSX.Element => (
    <Routes>
      <Route path="/" element={<Albums />} />
      <Route path=":userId" element={<AlbumInfo />} />
    </Routes>
)
export default App
