import React, { useState, useEffect } from 'react'
import { type Photo } from '../../../domain/models/Photo'
import PhotosService from '../../../domain/services/photos.service'
import { useParams } from 'react-router-dom'

import ArrowButton from '../ui/arrowButton/ArrowButton'
import PhotoViewer from '../ui/photoViewer/PhotoViewer'
import ThumbnailButton from '../ui/thumbnailButton/ThumbnailButton'

import PageTitle from 'main/PageTitle'
import Loader from 'main/Loader'

import './photos.scss'

export default function Photos (): JSX.Element {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedphoto, setSelectedPhoto] = useState<number>(0)

  const albumId = useParams().albumId
  useEffect(() => {
    if (albumId !== undefined) {
      PhotosService.getPhotosFromAlbum(parseInt(albumId)).then(setPhotos)
      setLoading(false)
    }
  }, [albumId])

  return (
    loading
      ? <Loader />
      : (photos?.length) !== 0
          ? <div className="photos">
            <PageTitle text='Photos viewer' />
            <div className="photos_viewer">
            <ArrowButton direction={'PREV'} onClick={() => { setSelectedPhoto(selectedphoto - 1) }} disabled={selectedphoto === 0}/>
            <PhotoViewer title={photos[selectedphoto].title} url={photos[selectedphoto].url} id={photos[selectedphoto].id} />
            <ArrowButton direction={'NEXT'} onClick={() => { setSelectedPhoto(selectedphoto + 1) }} disabled={selectedphoto === photos.length - 1} />
            </div>

            <div className="photos_footer">
                {photos.map((photo: any, index: number) => (
                <ThumbnailButton photo={photo} onClick={() => { setSelectedPhoto(index) }} key={photo.id}/>
                ))}
            </div>
        </div>
          : <div>No photos</div>
  )
};
