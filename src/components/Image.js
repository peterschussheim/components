import React from 'react'
import { render } from 'react-dom'
import glamorous from 'glamorous'

const Image = glamorous.img(
  {
    border: '0',
    verticalAlign: 'middle',
    width: '20vw'
  },
  ({ rounded }) =>
    rounded
      ? {
          borderRadius: typeof rounded === 'number' ? rounded : 6
        }
      : null,
  ({ faded }) => (faded ? { opacity: 0.7 } : null)
)

export default Image
