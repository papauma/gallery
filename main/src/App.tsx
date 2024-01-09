import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/contextual/loader/Loader";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/notFound";

import "./index.css";
import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";

const RemoteUsersApp = React.lazy(() => import("users/UsersApp"));
const RemoteAlbumsApp = React.lazy(() => import("albums/AlbumsApp"));
const RemotePhotosApp = React.lazy(() => import("photos/PhotosApp"));

const search = 'ccc';
const App = () => (
  <>
      <BrowserRouter>
        <NavBar />
        <BreadCrumbs />
        <main className="mainApp">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route  path="/users/*" element={<RemoteUsersApp />} />
              <Route  path="/albums/*" element={<RemoteAlbumsApp />} />
              <Route  path="/photos/*" element={<RemotePhotosApp />} />
              <Route  path="*" element={<NotFound />}/>
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
