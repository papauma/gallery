import React from 'react'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import TableUsers from './TableUsers'
import { type iUser } from 'model/interfaces'
import { MemoryRouter } from 'react-router-dom'

const mockUsersList: iUser[] = [
  {
    id: 1,
    username: 'johndoe',
    email: 'johndoe@ex.com',
    name: 'John Doe',
    phone: '1234567890',
    website: 'johndoe.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 1',
      city: 'Anytown',
      zipcode: '12345',
      geo: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    company: {
      name: 'Company Name',
      catchPhrase: 'Catchphrase',
      bs: 'bs'
    }

  },
  {
    id: 2,
    username: 'janedoe 2',
    email: 'janedoe2@ex.com',
    name: 'Jane Doe 2',
    phone: '1234567892',
    website: 'johndoe.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 1',
      city: 'Anytown',
      zipcode: '12345',
      geo: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    company: {
      name: 'Company Name',
      catchPhrase: 'Catchphrase',
      bs: 'bs'
    }
  },
  {
    id: 3,
    username: 'janedoe 3',
    email: 'janedoe3@ex.com',
    name: 'Jane Doe 3',
    phone: '1234567893',
    website: 'johndoe.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 1',
      city: 'Anytown',
      zipcode: '12345',
      geo: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    company: {
      name: 'Company Name',
      catchPhrase: 'Catchphrase',
      bs: 'bs'
    }
  },
  {
    id: 4,
    username: 'janedoe 4',
    email: 'janedoe4@ex.com',
    name: 'Jane Doe 4',
    phone: '1234567894',
    website: 'johndoe.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 1',
      city: 'Anytown',
      zipcode: '12345',
      geo: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    company: {
      name: 'Company Name',
      catchPhrase: 'Catchphrase',
      bs: 'bs'
    }
  }
]
describe('TableUsers component', () => {
  test('TableUsers is rendered', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><TableUsers usersList={mockUsersList} /></MemoryRouter>)
    const linkElement = screen.getByText(mockUsersList[0].name)
    expect(linkElement).toBeInTheDocument()
  })

  test('TableUsers number elements is correct', () => {
    const numberResults = 'There are ' + mockUsersList.length + ' results'
    render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><TableUsers usersList={mockUsersList} /></MemoryRouter>)
    const linkElement = screen.getByText(numberResults)
    expect(linkElement).toBeInTheDocument()
  })

  test('TableUsers number rows is correct', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><TableUsers usersList={mockUsersList} /></MemoryRouter>)
    const linkElement = screen.getAllByRole('row')
    const rows = linkElement.length
    expect(rows).toEqual(mockUsersList.length + 1)
  })

  test('TableUsers void appers message no results', () => {
    const text = 'There are no results.'
    render(<MemoryRouter initialEntries={[{ pathname: '/' }]}><TableUsers usersList={[]} /></MemoryRouter>)
    const linkElement = screen.getByText(text)
    expect(linkElement).toBeInTheDocument()
  })
})
