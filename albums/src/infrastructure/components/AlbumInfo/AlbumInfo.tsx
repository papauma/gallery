import React, { useEffect, useState } from 'react'
import { type Album } from '../../../domain/models/Album'

import { useParams } from 'react-router-dom'
import AlbumCover from '../../components/ui/albumCover/AlbumCover'
import AlbumsService from '../../../domain/services/albums.service'

import Loader from 'main/Loader'

export default function AlbumInfo (): JSX.Element {
  const [albumData, setAlbumData] = useState<Album[]>()
  const [loading, setLoading] = useState<boolean>(true)

  const userId = useParams().userId

  useEffect(() => {
    if (userId !== undefined) {
      AlbumsService.getAlbumsByUserId(parseInt(userId)).then(albums => { setAlbumData(albums) })
      setLoading(false)
    }
  }, [userId])

  return (
    loading
      ? <Loader />
      : albumData !== null && albumData !== undefined
        ? <div className="albumsList">
        {albumData.map((album: Album) => (<AlbumCover key={album.id} title={album.title} href={`/photos/${album.id}`} />))}
        </div>
        : <div>No albums</div>
  )
}
