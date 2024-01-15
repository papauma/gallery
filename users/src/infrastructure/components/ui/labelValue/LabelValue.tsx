import React from 'react'

import './labelValue.scss'

interface iLabelValue {
  label?: string
  value?: string
}

export default function LabelValue ({ label, value }: iLabelValue): JSX.Element {
  return <div className="labelValue">
    <div className="labelValue_label">{label}:</div>
    <div className="labelValue_value">{value}:</div>
  </div>
}
