import { type Photo } from './../../domain/models/Photo'
import { type PhotoDTO } from '../http/dto/PhotoDTO'

import { http } from '../http/http'

import { ENDPOINT_PHOTOS_ALBUM } from '../../utils/contants/constants'

const formatPhoto = (photo: PhotoDTO): Photo => ({

  id: photo.id,
  title: photo.title,
  url: photo.url,
  albumId: photo.albumId,
  thumbnailUrl: photo.thumbnailUrl
})

export const photoRepository = {
  getPhotosFromAlbum: async (albumId: number) => {
    const photos = await http.get<PhotoDTO[]>(ENDPOINT_PHOTOS_ALBUM + '' + albumId)
    // we can extract this transform to a function inside this file to be reused by different methods
    return photos.map((photoDTO): Photo => formatPhoto(photoDTO))
  }
}
