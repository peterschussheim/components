import React from 'react'
import Text from './Text'
import ExampleBox from './ExampleBox'

let data = { title: 'Neat Title' }

export default () => {
  const { title } = data
  return <ExampleBox title={title}>Text in a box</ExampleBox>
}
