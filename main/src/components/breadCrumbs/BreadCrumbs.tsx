import React from "react";

import './breadCrumbs.scss';
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
    const location = useLocation().pathname

    const prepareBreadCumbs = () => {
        console.log(location)
        if (!location) return []
        if (location.includes('/users/')) return [{label: 'Home', path: '/'}, {label : 'Users', path: '/users'}]
        if (location.includes('/albums/')) return [{label: 'Home', path: '/'}, {label : 'Albums', path: '/albums'}]
        if (location.includes('/photos/')) return [{label: 'Home', path: '/'}, {label : 'Albums', path: '/albums'}]
        if (location.includes('/users') || location.includes('/albums')) return [{label: 'Home', path: '/'}]
        if (location.includes('/')) return []
    }

    const generateBreadCumbs = () => {
        const list = prepareBreadCumbs();
        return list?.map((li) => <div className='breadCrumbs_item' key={li.path} ><Link to={li.path}>{li.label}</Link></div>);
    }

    return (
        <div className="breadCrumbs">{generateBreadCumbs()}</div>);
}
