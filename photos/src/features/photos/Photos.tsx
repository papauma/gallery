import React, { useEffect, useState } from 'react'
import ArrowButton from '../../components/arrowButton/ArrowButton'
import PhotoViewer from '../../components/photoViewer/PhotoViewer'
import ThumbnailButton from '../../components/thumbnailButton/ThumbnailButton'
import { useParams } from 'react-router-dom'

import PageTitle from 'main/PageTitle'

import './photos.scss'

export default function Photos (): JSX.Element {
  const [photos, setPhotos] = useState([]) as any
  const [selectedphoto, setSelectedPhoto] = useState<number>(0)
  const albumId = useParams().albumId

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      const data = await response.json()
      setPhotos(data)
    }
    fetchData()
  }, [albumId])

  return (
    photos?.length
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
      : <></>
  )
};
