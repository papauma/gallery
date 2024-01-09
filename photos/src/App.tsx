import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Photos from "./features/photos/Photos";
console.log('photos');
const App = () => (
    <Routes>
      <Route path=":albumId" element={<Photos />} />
    </Routes>
);
export default App;
