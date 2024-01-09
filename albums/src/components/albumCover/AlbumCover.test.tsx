import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import AlbumCover from './AlbumCover'

const texto = 'Lorem ipsum'
const path = '/'
const href = '/link-to-album'
describe('AlbumCover component', () => {
  test('AlbumCover is rendered', () => {
    render(<MemoryRouter initialEntries={[{ pathname: path }]}><AlbumCover title={texto} href={href}/></MemoryRouter>)
    const linkElement = screen.getByText(texto)
    expect(linkElement).toBeInTheDocument()
  })

  test('AlbumCover has correct href', () => {
    render(<MemoryRouter initialEntries={[{ pathname: path }]}><AlbumCover title={texto} href={href}/></MemoryRouter>)
    expect(screen.getByRole('link', { name: texto })).toHaveAttribute('href', href)
  })
})
