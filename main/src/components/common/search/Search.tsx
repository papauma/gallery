import React from 'react'
import './search.scss'

export default function Search ({ placeholder, returnAction }: { placeholder?: string, returnAction: (param: string) => void }): JSX.Element {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    returnAction(e.target.value)
  }

  return <div className="search">
        <input type="text" placeholder={placeholder} onChange={(e) => { changeValue(e) }}/>
        <svg className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
}
