import glamorous from 'glamorous'
import propStyles from 'prop-styles'

const heading = {
  display: 'block',
  fontFamily: 'inherit',
  fontWeight: '500',
  lineHeight: '1.1'
}

const largerHeading = {
  marginTop: '20px',
  marginBottom: '10px'
}

const smallerHeading = {
  marginTop: '10px',
  marginBottom: '10px'
}

const Text = glamorous.span(
  propStyles({
    faded: ({ theme }) => ({ color: theme.colors.faded }),
    fadedExtra: ({ theme }) => ({ color: theme.colors.fadedExtra }),
    superheading: [heading, largerHeading, { fontSize: 36 }],
    heading: [heading, largerHeading, { fontSize: 30 }],
    subheading: [heading, largerHeading, { fontSize: 24 }],
    superstandard: [heading, smallerHeading, { fontSize: 18 }],
    standard: [heading, smallerHeading, { fontSize: 14 }],
    substandard: [heading, smallerHeading, { fontSize: 12 }]
  })
)

export default Text
