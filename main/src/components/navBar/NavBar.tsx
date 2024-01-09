import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navBar.scss'

function NavBar (): JSX.Element {
  const path = useLocation().pathname

  return (
        <div className="navBar">
            <div className="navbar_logo">{path !== '/' ? <Link to='/'>Gallery.</Link> : <span>Gallery.</span>}</div>
            <nav className="navBar_list">
                <ul className="navBar_options">
                    <li className={`navBar_option ${(path === '/users') ? 'navBar_option--selected' : ''} `}>
                        {path !== '/users' ? <Link to='/users'>Users</Link> : <span>Users</span>}
                    </li>
                    <li className={`navBar_option ${(path === '/albums') ? 'navBar_option--selected' : ''} `}>
                        {path !== '/albums' ? <Link to='/albums'>Albums</Link> : <span>Albums</span>}
                    </li>
                </ul>
            </nav>
        </div>
  )
}
export default React.memo(NavBar);
