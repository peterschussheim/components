import React from 'react'
import Text from './Text'

export default function Section({ children, direction = 'vertical' }) {
  const arr = React.Children.toArray(children)

  const items = []
  let i = 0
  while (i < arr.length) {
    if (arr[i].type === Section) {
      items.push(arr[i])
      i++
    } else {
      items.push([arr[i], arr[i + 1]])
      i += 2
    }
  }

  const innerMarginKey =
    direction === 'horizontal' ? 'marginHorizontal' : 'marginVertical'

  return (
    <div
      style={{
        flexDirection: direction === 'horizontal' ? 'row' : 'column'
      }}
    >
      {items.map((item, i) => {
        return Array.isArray(item) ? (
          <div style={{ [innerMarginKey]: 15 }} key={i}>
            <Text style={{ color: '#c0c0c0', fontSize: 10, marginBottom: 5 }}>
              {item[0]}
            </Text>
            {item[1]}
          </div>
        ) : (
          <div style={{ [innerMarginKey]: 15 }} key={i}>
            {item}
          </div>
        )
      })}
    </div>
  )
}
