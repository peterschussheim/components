import React from 'react'
import Div, { glamorous } from 'glamorous'
import Card from './Card'
import Section from './Section'
import Text from './Text'

export default () => {
  return (
    <Div>
      <Card>
        <Section>
          <Text>Living Style Guide</Text>
          <Text>This is some text inside a card.</Text>
        </Section>
      </Card>
    </Div>
  )
}
