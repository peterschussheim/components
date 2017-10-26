import React from 'react'
import { Div, ThemeProvider } from 'glamorous'
import Button from './Button'

export default () => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          success: '#29A88E',
          danger: '#C65F4A',
          primary: '#6DCFD3',
          info: '#FFD035',
          gray: '#5A6E73',
          accent: '#8E83A3'
        }
      }}
    >
      <Div>
        <Div>
          <Button small success>
            Success
          </Button>
          <Button small danger>
            Danger
          </Button>
          <Button small primary>
            Primary
          </Button>
          <Button small info>
            Info
          </Button>
          <Button small gray>
            Gray
          </Button>
          <Button small accent>
            Accent
          </Button>
        </Div>
        <Div>
          <Button success>Success</Button>
          <Button danger>Danger</Button>
          <Button primary>Primary</Button>
          <Button info>Info</Button>
          <Button gray>Gray</Button>
          <Button accent>Accent</Button>
        </Div>
        <Div>
          <Button large success>
            Success
          </Button>
          <Button large danger>
            Danger
          </Button>
          <Button large primary>
            Primary
          </Button>
          <Button large info>
            Info
          </Button>
          <Button large gray>
            Gray
          </Button>
          <Button large accent>
            Accent
          </Button>
        </Div>
      </Div>
    </ThemeProvider>
  )
}
