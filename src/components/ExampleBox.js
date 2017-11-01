import React from 'react'
import { Div } from 'glamorous'

function ExampleBox({ children, title }) {
  return (
    <Div
      padding="4vw"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="5vw"
      width="100%"
    >
      <Div display="flex" flexDirection="column">
        <Div alignSelf="center" color="#333" marginBottom={4}>
          {title}
        </Div>
        <Div
          backgroundColor="white"
          borderWidth={4}
          borderStyle="solid"
          borderRadius={6}
          flex={1}
          flexWrap="wrap"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          height="50vw"
          width="50vw"
          maxHeight="600px"
          maxWidth="600px"
          borderColor="#CC3A4B"
          padding={10}
        >
          {children}
        </Div>
      </Div>
    </Div>
  )
}

export default ExampleBox
