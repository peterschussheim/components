import React from 'react'
import Div, { glamorous } from 'glamorous'
import Avatar from './Avatar'
import Box from './Box'

let imgSrc = `http://i.pravatar.cc/300`
let presenceData = {
  status: 'online'
}

const GreenCircle = () => (
  <svg style={{ fill: 'green' }}>
    <g>
      <circle cx="25" cy="75" r="10" />
    </g>
  </svg>
)

export default () => {
  return (
    <div>
      <Avatar imgSrc={imgSrc} />
      <GreenCircle />
      {/* <Avatar presence={presenceData.status} imgSrc={imgSrc} /> */}
    </div>
  )
}
