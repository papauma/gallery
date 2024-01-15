import React from 'react'
import { Link } from 'react-router-dom'

import './buttonAction.scss'

export default function ButtonAction ({ text, link, type = 'PRIMARY' }: { text: string, link: string, type?: 'PRIMARY' | 'SECONDARY' }): JSX.Element {
  return <span className={`buttonAction ${type === 'PRIMARY' ? 'buttonAction--primary' : 'buttonAction--secondary'}`}><Link to={link}>{text}</Link></span>
}
