import React from 'react'
import Image from './Image'
import Box from './Box'

const src =
  'https://images.unsplash.com/photo-1500673922987-e212871fec22?dpr=2&auto=format&fit=crop&w=216&h=144&q=80&cs=tinysrgb'

export default () => (
  <div>
    <Image src={src} />
    <Image rounded src={src} />
    <Image rounded={20} src={src} />
    <Image rounded faded src={src} />
  </div>
)
