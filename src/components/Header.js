import React from 'react'
import { margin } from 'styled-system'
import glamorous, { ThemeProvider } from 'glamorous'
import propStyles from 'prop-styles'
import Text from './Text'

const Heading = glamorous.h1(margin)

const Header = ({ heading, text }) => (
  <header>
    <Heading heading={heading} />
    <Text text={text} />
  </header>
)

export default Header
