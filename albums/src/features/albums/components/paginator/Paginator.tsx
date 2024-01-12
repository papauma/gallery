import React, { useState } from 'react'

import './paginator.scss'

interface IPaginator {
  init: number
  limit: number
  onPrev: () => void
  onNext: () => void
}

export default function Paginator ({ init, limit, onPrev, onNext }: IPaginator): JSX.Element {
  const [initP, setInitP] = useState<number>(init)
  const onClickPrev = (): void => {
    setInitP(initP - limit)
    onPrev()
  }
  const onClickNext = (): void => {
    setInitP(initP + limit)
    onNext()
  }

  return (
        <div className="paginator">
            <div className={`paginator_item paginator_item--prev ${initP === 0 ? 'paginator_item--disabled' : ''}`} onClick={initP !== 0 ? onClickPrev : () => {}}>{'<< Prev'}</div>
            <div className="paginator_item paginator_item--next" onClick={onClickNext}>{'Next >>'}</div>
        </div>
  )
}
