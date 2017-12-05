import React from 'react'
import Div, { glamorous } from 'glamorous'
import Section from './Section'
import Text from './Text'

export default (children, restProps) => {
  return <div {...restProps}>{children}</div>
}
