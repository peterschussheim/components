import React from 'react'
import Div, { glamorous } from 'glamorous'
import Card from './Card'
import Text from './Text'

export default () => {
  return (
    <Div>
      <Card>
        <Text>Living Style Guide</Text>
        <Text>This is some text inside a card.</Text>
      </Card>
    </Div>
  )
}
