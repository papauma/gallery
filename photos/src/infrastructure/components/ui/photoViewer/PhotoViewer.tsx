import React from 'react'

import './photoViewer.scss'
export default function PhotoViewer ({ title, url, id }: { title: string, url: string, id: number }): JSX.Element {
  return (
        <div className='photoViewer'>
            <div className='photoViewer_title'>{title} {id}</div>
            <img className='photoViewer_photo' src={url} alt={title} />
        </div>
  )
}
