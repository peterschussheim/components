import React from 'react'
import Section from './Section'
import ResponsiveText from './ResponsiveText'

// Setup some mock data
const data = {
  categories: [
    { name: 'american shorthair', size: 'medium' }
    // { name: 'main coon', size: 'x-large' },
    // { name: 'persian', size: 'medium' },
    // { name: 'siamese', size: 'medium' }
  ]
}

// Each 'usage' file exports an anonymous component that does not
// take any props and returns vdom.
export default () => (
  <Section
    style={{
      border: 'solid 1px'
    }}
  >
    Cat Species Detail:
    {data.categories.map((category, index) => (
      <div>
        <ResponsiveText>Breed: {category.name}</ResponsiveText>
        <ResponsiveText>Size: {category.size}</ResponsiveText>
      </div>
    ))}
  </Section>
)
