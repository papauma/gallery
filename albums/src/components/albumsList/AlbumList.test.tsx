import React from 'react'

import '@testing-library/jest-dom'
import { prettyDOM, render, screen } from '@testing-library/react'

import AlbumList from './AlbumList'
import { type iAlbum } from '../../model/interfaces'
import { MemoryRouter } from 'react-router-dom'

const mockAlbumsList: iAlbum[] = [
  {
    id: 1,
    title: 'Album 1',
    userId: 1
  },
  {
    id: 2,
    title: 'Album 2',
    userId: 2
  },
  {
    id: 3,
    title: 'Album 3',
    userId: 3
  },
  {
    id: 4,
    title: 'Album 4',
    userId: 4
  },
  {
    id: 5,
    title: 'Album 5',
    userId: 5
  }
]
describe('AlbumList component', () => {
  test('AlbumList is rendered', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><AlbumList listOfAlbums={mockAlbumsList} /></MemoryRouter>)
    const linkElement = screen.getByText(mockAlbumsList[0].title)
    expect(linkElement).toBeInTheDocument()
  })

  test('TableUsers number rows is correct', () => {
    const { container } = render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><AlbumList listOfAlbums={mockAlbumsList} /></MemoryRouter>)
    const albumCovers = container.getElementsByClassName('albumCover')
    expect(albumCovers.length).toEqual(mockAlbumsList.length)
  })

  test('TableUsers void appers message no results', () => {
    const text = 'No albums'
    render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><AlbumList listOfAlbums={[]} /></MemoryRouter>)
    const linkElement = screen.getByText(text)
    expect(linkElement).toBeInTheDocument()
  })
})
