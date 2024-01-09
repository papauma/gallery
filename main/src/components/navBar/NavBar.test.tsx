import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import '@testing-library/jest-dom'

import NavBar from './NavBar'

const cssSelected = 'navBar_option--selected'

describe('NavBar component', () => {
  test('NavBar is rendered', () => {
    const logo = 'Gallery.'
    const path = '/'
    render(<MemoryRouter initialEntries={[{ pathname: path }]}><NavBar /></MemoryRouter>)
    const linkElement = screen.getByText(logo)
    expect(linkElement).toBeInTheDocument()
  })

  test('user item is selected', () => {
    const users = 'Users'
    const path = '/users'
    render(<MemoryRouter initialEntries={[{ pathname: path }]}><NavBar /></MemoryRouter>)
    const linkElement = screen.getByText(users)
    expect(linkElement.parentElement).toHaveClass(cssSelected)
  })

  test('user albums is selected', () => {
    const albums = 'Albums'
    const path = '/albums'
    render(<MemoryRouter initialEntries={[{ pathname: path }]}><NavBar /></MemoryRouter>)
    const linkElement = screen.getByText(albums)
    expect(linkElement.parentElement).toHaveClass(cssSelected)
  })
})
