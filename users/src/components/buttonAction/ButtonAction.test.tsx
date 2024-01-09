import React from 'react'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ButtonAction from './ButtonAction'

const texto = 'button'
const cssPrimary = 'buttonAction--primary'
const cssSecondary = 'buttonAction--secondary'
describe('ButtonAction component', () => {
  test('ButtonAction is rendered', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><ButtonAction text={texto} link='/' type='PRIMARY'/></MemoryRouter>)
    const linkElement = screen.getByText(texto)
    expect(linkElement).toBeInTheDocument()
  })

  test('ButtonAction has correct link ', async () => {
    const href = '/linto-to-path'
    render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><ButtonAction text={texto} link={href} type='PRIMARY'/></MemoryRouter>)
    expect(screen.getByRole('link', { name: texto })).toHaveAttribute('href', href)
  })

  test('ButtonAction has correct CSS class (primary)', () => {
    const { container } = render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><ButtonAction text={texto} link='/' type='PRIMARY'/></MemoryRouter>)
    const divElement = container.firstChild
    expect(divElement).toHaveClass(cssPrimary)
  })
  test('ButtonAction has correct CSS class (seconday)', () => {
    const { container } = render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><ButtonAction text={texto} link='/' type='SECONDARY'/></MemoryRouter>)
    const divElement = container.firstChild
    expect(divElement).toHaveClass(cssSecondary)
  })
})
