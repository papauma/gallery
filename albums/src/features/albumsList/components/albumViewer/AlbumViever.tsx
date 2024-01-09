import React, { useEffect, useState } from 'react'

export default function AlbumViever ({ albumId }: { albumId: number }): JSX.Element {
  const [photos, setPhotos] = useState([]) as any

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      const data = await response.json()
      setPhotos(data)
      console.log(data)
    }
    fetchData()
  }, [albumId])

  return (
        <div>
            {photos.map((photos: any) => (
                <div key={photos.id} style={{ display: 'flex', flexDirection: 'row' }}><img src={photos.thumbnailUrl} alt={photos.title}/></div>
            ))}
        </div>
  )
}
