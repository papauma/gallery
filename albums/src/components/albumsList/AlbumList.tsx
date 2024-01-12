import React from 'react'

import './albumList.scss'
import { type iAlbum } from '../../features/albumsList/model/interfaces'
import AlbumCover from '../albumCover/AlbumCover'

interface iAlbumList {
  listOfAlbums: iAlbum[]
}
export default function AlbumList ({ listOfAlbums }: iAlbumList): JSX.Element {
  return (
    <div className="albumsList">
        {listOfAlbums.length === 0
          ? <div>No albums</div>
          : listOfAlbums.map((album: iAlbum) => (
          <AlbumCover key={album.id} title={album.title} href={`/photos/${album.id}`} />
          ))}
      </div>
  )
}
