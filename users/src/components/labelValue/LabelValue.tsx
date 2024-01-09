import React from 'react'

import './labelValue.scss'

export default function LabelValue ({ label, value }: { label: string, value: string }): JSX.Element {
  return <div className="labelValue">
    <div className="labelValue_label">{label}:</div>
    <div className="labelValue_value">{value}:</div>
  </div>
}
