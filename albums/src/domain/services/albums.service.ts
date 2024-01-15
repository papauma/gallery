import { albumRepository } from '../../infrastructure/repositories/album.repository'
import { type Album } from '../models/Album'

class AlbumsService {
  albumRepository: any
  allAlbums: Album[]
  static allAlbums: Album[]
  constructor () {
    this.albumRepository = albumRepository
    this.allAlbums = []
  }

  static async getAlbums (): Promise<any> {
    const Albums = await albumRepository.getAlbums()
    this.allAlbums = Albums
    return Albums
  }

  static async getAlbumsFromUser (userId: number): Promise<any> {
    const Albums = await albumRepository.getAlbumsFromUser(userId)
    this.allAlbums = Albums
    return Albums
  }

  static filterAlbumsByField (param: string): Album[] {
    const filteredAlbums = this.allAlbums.filter(Album => Album.title.includes(param))
    return filteredAlbums
  }

  static async getAlbumsByUserId (idUSer: number): Promise<Album[]> {
    if (this.allAlbums === null || this.allAlbums === undefined || this.allAlbums.length === 0) {
      const albums = await this.getAlbumsFromUser(idUSer)
      return albums
    } else {
      const Album = this.allAlbums.find(Album => Album.userId === idUSer)
      return Album as never
    }
  }
}

export default AlbumsService
