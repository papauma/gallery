import { type AlbumDTO } from '../http/dto/AlbumDTO'

import { http } from '../http/http'
import { type Album } from '../../domain/models/Album'

import { ENDPOINT_ALBUMS, ENDPOINT_ALBUMS_LIMIT, ENDPOINT_ALBUMS_PARAMS, ENDPOINT_ALBUMS_START } from '../../utils/constants/constants'

const fomatAlbum = (album: AlbumDTO): Album => ({
  id: album.id,
  title: album.title,
  userId: album.userId
})

export const albumRepository = {
  getAlbums: async (start: number, limit: number) => {
    const urlEndpointAlbums = ENDPOINT_ALBUMS + ((start !== undefined && limit !== undefined) ? '?' + ENDPOINT_ALBUMS_START + start + '&' + ENDPOINT_ALBUMS_LIMIT + limit : '')
    const albums = await http.get<AlbumDTO[]>(urlEndpointAlbums)
    // we can extract this transform to a function inside this file to be reused by different methods
    return albums.map((albumDTO): Album => fomatAlbum(albumDTO))
  },
  getAlbumsFromUser: async (userId: number, start: number, limit: number) => {
    const urlEndpointAlbums = ENDPOINT_ALBUMS_PARAMS + '' + userId + ((start !== undefined && limit !== undefined) ? '?' + ENDPOINT_ALBUMS_START + start + '&' + ENDPOINT_ALBUMS_LIMIT + limit : '')
    const users = await http.get<AlbumDTO[]>(urlEndpointAlbums)
    // we can extract this transform to a function inside this file to be reused by different methods
    return users.map((albumDTO): Album => fomatAlbum(albumDTO))
  }
}
