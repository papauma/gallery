import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import AlbumsList from "./features/albumsList/AlbumsList";
import AlbumInfo from "./features/albumInfo/AlbumInfo";

import "./index.css";

const App = () => (
    <Routes>
      <Route path="/" element={<AlbumsList />} />
      <Route path=":userId" element={<AlbumInfo />} />
    </Routes>
);
export default App;
