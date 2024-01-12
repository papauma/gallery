import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Paginator from './Paginator'

const nextText = 'Next >>'
const prevText = '<< Prev'
const start = 0
const limit = 20

describe('Paginator component', () => {
  test('Paginator is rendered', () => {
    render(<Paginator init={start} limit={limit} onPrev={() => {}} onNext={() => {}} />)
    const prevElement = screen.getByText(prevText)
    expect(prevElement).toBeInTheDocument()
    const nextElement = screen.getByText(nextText)
    expect(nextElement).toBeInTheDocument()
  })
  test('Paginator prev is disabled at init', () => {
    render(<Paginator init={start} limit={limit} onPrev={() => {}} onNext={() => {}} />)
    const prevElement = screen.getByText(prevText)
    expect(prevElement).toHaveClass('paginator_item--disabled')
  })
  test('Paginator prev is not disabled at next', () => {
    render(<Paginator init={start + 1} limit={limit} onPrev={() => {}} onNext={() => {}} />)
    const prevElement = screen.getByText(prevText)
    expect(prevElement).not.toHaveClass('paginator_item--disabled')
  })

  test('Paginator prev is not disabled when next click', () => {
    const handleClickNext = jest.fn()
    render(<Paginator init={start} limit={limit} onPrev={() => {}} onNext={handleClickNext} />)
    userEvent.click(screen.getByText(nextText))
    const prevElement = screen.getByText(prevText)
    expect(prevElement).not.toHaveClass('paginator_item--disabled')
  })
})
