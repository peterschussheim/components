import React from 'react'
import ResponsiveText from './ResponsiveText'
import { Div } from 'glamorous'

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
    <Div
      style={{
        flexDirection: direction === 'horizontal' ? 'row' : 'column'
      }}
    >
      {items.map((item, i) => {
        return Array.isArray(item) ? (
          <div style={{ [innerMarginKey]: 15 }} key={i}>
            <ResponsiveText style={{ fontSize: 12, marginBottom: 5 }}>
              {item[0]}
            </ResponsiveText>
            {item[1]}
          </div>
        ) : (
          <div style={{ [innerMarginKey]: 15 }} key={i}>
            {item}
          </div>
        )
      })}
    </Div>
  )
}
