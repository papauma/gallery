import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/contextual/loader/Loader'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/notFound'
import BreadCrumbs from './components/breadCrumbs/BreadCrumbs'
import './index.css'

const RemoteUsersApp = React.lazy(async () => await import('users/UsersApp'))
const RemoteAlbumsApp = React.lazy(async () => await import('albums/AlbumsApp'))
const RemotePhotosApp = React.lazy(async () => await import('photos/PhotosApp'))

const App = (): JSX.Element => (
  <>
      <BrowserRouter>
        <NavBar />
        <BreadCrumbs />
        <main className="mainApp">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/*" element={<RemoteUsersApp />} />
              <Route path="/albums/*" element={<RemoteAlbumsApp />} />
              <Route path="/photos/*" element={<RemotePhotosApp />} />
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
  </>
)
ReactDOM.render(<App />, document.getElementById('app'))
