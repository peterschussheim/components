import React from 'react'
import glamorous from 'glamorous'

export default props => (
  <glamorous.svg
    xmlns="http://www.w3.org/svg/2000"
    viewBox={props.viewBox}
    width={props.size}
    height={props.size}
    fill={props.fill}
  >
    <path d={props.pathData} />
  </glamorous.svg>
)
