import React from 'react'
import glamorous from 'glamorous'
import { margin } from 'styled-system'
import ResponsiveText from './ResponsiveText'
import Button from './Button'

const Heading = glamorous.h1(margin)

const Header = ({ heading, text }) => (
  <header>
    <Heading heading={heading} />
    <ResponsiveText text={text} />
  </header>
)

export default Header
