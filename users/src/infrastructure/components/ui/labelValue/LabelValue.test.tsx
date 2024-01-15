import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import LabelValue from './LabelValue'

const label = 'etiqueta'
const value = 'valor'
describe('LabelValue component', () => {
  test('LabelValue is rendered', () => {
    render(<LabelValue label={label} value={value} />)
    const linkElement = screen.getByText(label + ':')
    expect(linkElement).toBeInTheDocument()
  })
})
