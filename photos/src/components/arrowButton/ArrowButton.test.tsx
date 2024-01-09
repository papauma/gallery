import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ArrowButton from './ArrowButton'

describe('ArrowButton component', () => {
  test('ArrowButton (NEXT) is rendered ', () => {
    const texto = '>'
    render(<ArrowButton direction='NEXT' onClick={() => {}} />)
    const linkElement = screen.getByText(texto)
    expect(linkElement).toBeInTheDocument()
  })

  test('ArrowButton (PREV) is rendered ', () => {
    const texto = '<'
    render(<ArrowButton direction='PREV' onClick={() => {}} />)
    const linkElement = screen.getByText(texto)
    expect(linkElement).toBeInTheDocument()
  })

  test('ArrowButton (PREV) is clicked ', async () => {
    const handleClick = jest.fn()
    const texto = '<'
    render(<ArrowButton direction='PREV' onClick={handleClick} />)
    await userEvent.click(screen.getByText(texto))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('ArrowButton disabled click dont work', async () => {
    const handleClick = jest.fn()
    const texto = '<'
    render(<ArrowButton direction='PREV' disabled onClick={handleClick} />)
    await userEvent.click(screen.getByText(texto))
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
