import React from 'react'
import Box from './Box'
import ResponsiveText from './ResponsiveText'

export default () => (
  <Box>
    <ResponsiveText fontSize={[1, 2, 3, 4]}>
      This is a profound statement!
    </ResponsiveText>
  </Box>
)
