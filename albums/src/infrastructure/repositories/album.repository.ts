import { type AlbumDTO } from '../http/dto/AlbumDTO'

import { http } from '../http/http'
import { type Album } from '../../domain/models/Album'

import { ENDPOINT_ALBUMS, ENDPOINT_ALBUMS_PARAMS } from '../../utils/constants/constants'

const fomatAlbum = (album: AlbumDTO): Album => ({
  id: album.id,
  title: album.title,
  userId: album.userId
})

export const albumRepository = {
  getAlbums: async () => {
    const albums = await http.get<AlbumDTO[]>(ENDPOINT_ALBUMS)
    // we can extract this transform to a function inside this file to be reused by different methods
    return albums.map((albumDTO): Album => fomatAlbum(albumDTO))
  },
  getAlbumsFromUser: async (userId: number) => {
    const users = await http.get<AlbumDTO[]>(ENDPOINT_ALBUMS_PARAMS + userId)
    // we can extract this transform to a function inside this file to be reused by different methods
    return users.map((albumDTO): Album => fomatAlbum(albumDTO))
  }
}
