import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { type iAlbum } from '../albumsList/model/interfaces'
import AlbumCover from '../../components/albumCover/AlbumCover'
const URL = 'https://jsonplaceholder.typicode.com/albums'
const URL_PARAMS = 'https://jsonplaceholder.typicode.com/albums?userId='

export default function AlbumInfo (): JSX.Element {
  const [albums, setAlbums] = useState<iAlbum[]>([])
  const params = useParams()
  const address = params?.userId ? URL_PARAMS + params?.userId : URL

  useEffect(() => {
    const fetchAlbums = async (): Promise<void> => {
      const response = await fetch(address)
      const data = await response.json() as iAlbum[]
      setAlbums(data)
    }
    fetchAlbums()
  }, [address])

  return (
    <div className="albumsList">
      {albums.map((album: iAlbum) => (<AlbumCover key={album.id} title={album.title} href={`/photos/${album.id}`} />))}
      </div>
  )
}
