import React from 'react'
import Div, { glamorous } from 'glamorous'
import Avatar from './Avatar'
import Box from './Box'

let imgSrc = `http://i.pravatar.cc/300`

export default () => {
  return (
    <div>
      <Avatar imgSrc={imgSrc} />
      <Avatar showIndicator imgSrc={imgSrc} />
    </div>
  )
}
