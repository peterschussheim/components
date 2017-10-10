import React from 'react'
import glamorous from 'glamorous'

import Flex from './Flex'
import Box from './Box'
import Header from './Header'
import Text from './Text'
import Button from './Button'

class Banner extends React.Component {
  render() {
    return (
      <Flex p={3} style={{ height: '100%' }} align="left">
        <Box width={[1, '640px']}>
          <Header f={[6, 7, 8]}>Stylsssed System</Header>
          <Text f={4} bold>
            Design system utilities for styled-components, glamorous, and other
            css-in-js libraries
          </Text>
          <Flex align="left" py={2}>
            <Button
              type="primary"
              mr={2}
              href="https://github.com/peterschussheim/components"
            >
              GitHub
            </Button>
          </Flex>
        </Box>
      </Flex>
    )
  }
}

export default Banner
