import React from 'react'

import './arrowButton.scss'
export default function ArrowButton ({ direction, onClick, disabled = false }: { direction: 'NEXT' | 'PREV', disabled?: boolean, onClick: undefined | (() => void) }): JSX.Element {
  return (
        <div className={`arrowButton ${disabled ? 'arrowButton--disabled' : ''}`} onClick={!disabled ? onClick : undefined}>{direction === 'NEXT' ? '>' : '<'}</div>
  )
}
