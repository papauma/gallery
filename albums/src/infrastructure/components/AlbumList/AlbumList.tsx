import * as React from 'react'
import { type Album } from '../../../domain/models/Album'
import AlbumsService from '../../../domain/services/albums.service'
import ListAlbums from '../ui/listAlbums/ListAlbums'
import Paginator from '../ui/paginator/Paginator'
import { LIMIT_RESULTS_API } from '../../../utils/constants/constants'

import PageTitle from 'main/PageTitle'
import Search from 'main/Search'
import Loader from 'main/Loader'

import './albumList.scss'

export default function AlbumList (): JSX.Element {
  const [albums, setAlbums] = React.useState<Album[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [startApi, setStartApi] = React.useState<number>(0)

  React.useEffect(() => {
    AlbumsService.getAlbums(startApi, LIMIT_RESULTS_API).then(setAlbums).finally(() => { setLoading(false) })
  }, [startApi])

  const onChange = (paramSearch: string): void => {
    setAlbums(AlbumsService.filterAlbumsByField(paramSearch))
  }

  return (
    loading
      ? <Loader />
      : <div className="albumList">
            <PageTitle text='List of albums' />
            <div className="albumList_filter">
                <Search placeholder='Filter albums by a field...' returnAction={(param: string) => { onChange(param) }} />
            </div>
            <ListAlbums listOfAlbums={albums} />
           <Paginator init={0} limit={LIMIT_RESULTS_API} onPrev={() => { setStartApi(startApi - LIMIT_RESULTS_API) }} onNext={() => { setStartApi(startApi + LIMIT_RESULTS_API) }} disabledNext = {albums.length === 0}/>
        </div>
  )
}
