import React from 'react'
import Div, { glamorous } from 'glamorous'
import Svg from './Svg'

let presenceData = {
  status: 'online'
}

// const OnlineCircle = () => <circle />

export default () => (
  <svg style={{ fill: 'green' }}>
    <g>
      <circle cx="25" cy="75" r="20" />
    </g>
  </svg>
)
