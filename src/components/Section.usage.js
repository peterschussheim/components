import React from 'react'
import Section from './Section'
import Text from './Text'

// Setup some mock data
const data = {
  categories: [
    { name: 'american shorthair', size: 'medium' },
    { name: 'main coon', size: 'x-large' },
    { name: 'persian', size: 'medium' },
    { name: 'siamese', size: 'medium' }
  ]
}

// Each 'usage' file exports an anonymous component that does not
// take any props and returns vdom.
export default () => (
  <Section>
    Cat
    {data.categories.map((category, index) => (
      <div>
        <h2>Breed: {category.name}</h2>
        <Text>Size: {category.size}</Text>
      </div>
    ))}
  </Section>
)
