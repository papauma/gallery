import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { IBreadCrumbsItem } from '../../model/interfaces'

import './breadCrumbs.scss'
export default function BreadCrumbs (): JSX.Element {
  const location = useLocation().pathname

  const prepareBreadCumbs = (): IBreadCrumbsItem[] => {
    if (location.length === 0) return []
    if (location.includes('/users/')) return [{ label: 'Home', path: '/' }, { label: 'Users', path: '/users' }]
    if (location.includes('/albums/')) return [{ label: 'Home', path: '/' }, { label: 'Albums', path: '/albums' }]
    if (location.includes('/photos/')) return [{ label: 'Home', path: '/' }, { label: 'Albums', path: '/albums' }]
    if (location.includes('/users') || location.includes('/albums')) return [{ label: 'Home', path: '/' }]
    if (location.includes('/')) return []
    return []
  }

  const generateBreadCumbs = (): JSX.Element[] => {
    const list = prepareBreadCumbs()
    return list?.map((li) => <div className='breadCrumbs_item' key={li.path} ><Link to={li.path}>{li.label}</Link></div>)
  }

  return (
    <div className="breadCrumbs">{generateBreadCumbs()}</div>)
}
