import React from 'react'
import { Link } from 'react-router-dom'

import './albumCover.scss'

export default function AlbumCover ({ title, href }: { title: string, href: string }): JSX.Element {
  return (
    <div className="albumCover">
         <Link to={href}><div className="albumCover_image" /></Link>
        <div className="albumCover_title">
            <Link to={href}>{title}</Link>
        </div>
    </div>
  )
}
