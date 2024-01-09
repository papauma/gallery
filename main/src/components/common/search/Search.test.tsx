import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import Search from './Search'

const texto = 'Search...'

describe('Search component', () => {
  test('Search is rendered ', () => {
    render(<Search placeholder={texto} returnAction={() => {}} />)
    const linkElement = screen.getByPlaceholderText(texto)
    expect(linkElement).toBeInTheDocument()
  })

  test('Search change runs ', () => {
    const handleClick = jest.fn()
    render(<Search placeholder={texto} returnAction={handleClick} />)
    const linkElement = screen.getByPlaceholderText(texto)
    fireEvent.change(linkElement, { target: { value: 'new value' } })
    fireEvent.change(linkElement, { target: { value: 'other value' } })
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
