import React, { useEffect, useState } from 'react'
import { type iAlbum } from '../../model/interfaces'
import { useParams } from 'react-router-dom'
import AlbumList from '../../components/albumsList/AlbumList'

import PageTitle from 'main/PageTitle'
import Search from 'main/Search'
import Loader from 'main/Loader'

import './albums.scss'

const URL = 'https://jsonplaceholder.typicode.com/albums?_start=0&_limit=20'
const URL_PARAMS = 'https://jsonplaceholder.typicode.com/albums?userId='

export default function Albums (): JSX.Element {
  const [albums, setAlbums] = useState<iAlbum[]>([])
  const [filteredAlbums, setFilteredAlbums] = useState<iAlbum[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const params = useParams()
  const address = ((params?.userId) != null) ? URL_PARAMS + params?.userId : URL

  useEffect(() => {
    const fetchAlbums = async (): Promise<void> => {
      const response = await fetch(address)
      const data = await response.json() as iAlbum[]
      setAlbums(data)
      setFilteredAlbums(data)
      setLoading(false)
    }
    fetchAlbums()
  }, [address])

  useEffect(() => {
    setLoading(true)
    setFilteredAlbums(albums.filter((al) => al.title.toLowerCase().includes(searchValue.toLowerCase())))
    setLoading(false)
  }, [searchValue])

  return (
    loading
      ? <Loader />
      : <div className="albums">
      <PageTitle text='List of albums' />
      <div className="albums_filter">
        <Search placeholder='Filter albums by a field...' returnAction={(param: string) => { setSearchValue(param) }} />
      </div>
      <AlbumList listOfAlbums={filteredAlbums} />
    </div>
  )
}