import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import '@testing-library/jest-dom'

import BreadCrumbs from './BreadCrumbs'

const cssDescription = 'breadCrumbs'

describe('BreadCrumbs component', () => {
  test('BreadCrumbs has true class CSS', () => {
    const { container } = render(
        <MemoryRouter initialEntries={[{ pathname: '/' }]}>
          <BreadCrumbs />
        </MemoryRouter>
    )
    const divElement = container.firstChild
    expect(divElement).toHaveClass(cssDescription)
  })
  test('BreadCrumbs in / is rendered', () => {
    const home = 'Home'
    const path = '/'
    render(<MemoryRouter initialEntries={[{ pathname: path }]}><BreadCrumbs /></MemoryRouter>)
    expect(() => screen.getByText(home)).toThrow('Unable to find an element')
  })

  test('BreadCrumbs in /users is rendered', () => {
    const home = 'Home'
    const path = '/users'
    render(<MemoryRouter initialEntries={[{ pathname: path }]}><BreadCrumbs /></MemoryRouter>)
    const linkElement = screen.getByText(home)
    expect(linkElement).toBeInTheDocument()
  })

  test('BreadCrumbs in /albums is rendered', () => {
    const home = 'Home'
    const path = '/albums'
    render(<MemoryRouter initialEntries={[{ pathname: path }]}><BreadCrumbs /></MemoryRouter>)
    const linkElement = screen.getByText(home)
    expect(linkElement).toBeInTheDocument()
  })

  test('BreadCrumbs in /albums/1 is rendered', () => {
    const home = 'Albums'
    const path = '/albums/1'
    render(<MemoryRouter initialEntries={[{ pathname: path }]}><BreadCrumbs /></MemoryRouter>)
    const linkElement = screen.getByText(home)
    expect(linkElement).toBeInTheDocument()
  })
})
