import React from 'react'
import glamorous from 'glamorous'
import { margin } from 'styled-system'
import Text from './Text'
import Button from './Button'

const Heading = glamorous.h1(margin)

const Header = props => (
  <header>
    <Heading {...props} />
    <Text {...props} />
  </header>
)

export default Header
