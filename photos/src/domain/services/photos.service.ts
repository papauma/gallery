import { photoRepository } from '../../infrastructure/repositories/photo.repository'
import { type Photo } from '../models/Photo'

class PhotosService {
  photoRepository: any
  allPhotos: Photo[]
  static allPhotos: Photo[]
  constructor () {
    this.photoRepository = photoRepository
    this.allPhotos = []
  }

  static async getPhotosFromAlbum (albumId: number): Promise<Photo[]> {
    const photos = await photoRepository.getPhotosFromAlbum(albumId)
    this.allPhotos = photos
    return photos
  }
}

export default PhotosService
