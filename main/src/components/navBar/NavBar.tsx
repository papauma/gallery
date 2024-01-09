import React from "react";
import { Link, useLocation } from "react-router-dom";
import './navBar.scss'

export default function NavBar() {
    const path = useLocation().pathname

    return (
        <div className="navBar">
            <div className="navbar_logo"><Link to='/'>Gallery.</Link></div>
            <nav className="navBar_list">
                <ul className="navBar_options">
                    <li className={`navBar_option ${(path === '/users') ? 'navBar_option--selected' : ''} `}>
                        <Link to='/users'>Users</Link>
                    </li>
                    <li className={`navBar_option ${(path === '/albums') ? 'navBar_option--selected' : ''} `}>
                        <Link to='/albums'>Albums</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
