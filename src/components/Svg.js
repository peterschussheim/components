import React from 'react'

export default ({ viewBox, size, fill, pathData }) => (
  <svg
    xmlns="http://www.w3.org/svg/2000"
    viewBox={viewBox}
    width={size}
    height={size}
    fill={fill}
  >
    <path d={pathData} />
  </svg>
)
