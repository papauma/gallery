import AlbumsService from './albums.service'
import { albumRepository } from '../../infrastructure/repositories/album.repository'

jest.mock('../../infrastructure/repositories/album.repository')

const mockAlbums = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim'
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa'
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio'
  },
  {
    userId: 1,
    id: 4,
    title: 'non esse culpa molestiae omnis sed optio'
  }
]

describe('AlbumsService', () => {
  test('should initialize with an empty albums list', () => {
    const albumsService = new AlbumsService()
    expect(albumsService.allAlbums).toEqual([])
  })

  test('should get albums from albumRepository and update allAlbums', async () => {
    albumRepository.getAlbums = jest.fn()
    albumRepository.getAlbums.mockReturnValueOnce(Promise.resolve(mockAlbums))

    await AlbumsService.getAlbums()

    expect(albumRepository.getAlbums).toHaveBeenCalled()
    expect(AlbumsService.allAlbums).toEqual(mockAlbums)
  })

  test('should filter users by field', () => {
    albumRepository.getAlbums.mockReturnValueOnce(Promise.resolve(mockAlbums))

    const filteredUsers = AlbumsService.filterAlbumsByField('sed')
    expect(filteredUsers).toHaveLength(1)
    expect(filteredUsers[0].title).toBe('non esse culpa molestiae omnis sed optio')
  })

  test('should get user by id', async () => {
    albumRepository.getAlbums.mockReturnValueOnce(Promise.resolve(mockAlbums))

    const user = await AlbumsService.getAlbumsByUserId(1)
    expect(user).toEqual(mockAlbums.find(u => u.userId === 1))
  })

  test('should get user by id from API', async () => {
    const user = await AlbumsService.getAlbumsByUserId(1)
    expect(user).toEqual(mockAlbums.find(u => u.userId === 1))
  })
})
