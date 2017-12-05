import React from 'react'
import { Div, ThemeProvider } from 'glamorous'
import Header from './Header'
import Text from './Text'

const data = {
  heading: 'This is nice Header',
  text: 'Some nice text...Some nice text...Some nice text...'
}

export default () => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          faded: '#666',
          fadedExtra: '#888'
        }
      }}
    >
      <Div>
        <Text>Normal</Text>
        <Text subheading>subheading</Text>
        <Text faded superheading>
          faded superheading
        </Text>
        <Text fadedExtra substandard>
          fadedExtra substandard
        </Text>
      </Div>
    </ThemeProvider>
  )
}
