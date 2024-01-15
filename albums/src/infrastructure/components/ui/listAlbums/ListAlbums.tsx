import React from 'react'

import { type iAlbum } from '../../../../model/interfaces'
import AlbumCover from '../albumCover/AlbumCover'

import './listAlbums.scss'
import { type Album } from '../../../../domain/models/Album'
export default function ListAlbums ({ listOfAlbums }: { listOfAlbums: Album[] }): JSX.Element {
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
