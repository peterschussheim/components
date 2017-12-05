import React from 'react'
import glamorous, { Circle } from 'glamorous'
import Svg from './Svg'

let data = {
  viewBox: '0 0 10 10',
  size: '10px',
  fill: 'green'
}
function OnlineCircle() {
  return <circle fill="green" />
}

const CircleG = glamorous.svg({
  viewBox: '0 0 10 10',
  cx: '25px',
  cy: '75px',
  r: '20px',
  fill: 'green'
})

export default () => <CircleG />

// export default () => (
//   <svg style={{ fill: 'green' }}>
//     <g>
//       <circle cx="25" cy="75" r="20" />
//     </g>
//   </svg>
// )
