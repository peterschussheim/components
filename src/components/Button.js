import React from 'react'
import glamorous from 'glamorous'
import propStyles from 'prop-styles'

const button = {
  fontSize: 16,
  margin: 10,
  border: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  padding: '10px 20px',
  textAlign: 'center',
  transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
  borderRadius: 0,
  color: '#fff',
  boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
  ':hover': {
    opacity: 0.7,
    transform: 'translateY(-1px)',
    boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)'
  },
  ':focus': { outline: 0 },
  ':active': {
    transform: 'translateY(1px)'
  }
}

const small = {
  padding: '8px 16px'
}

const large = {
  padding: '12px 24px'
}

export default glamorous.button(
  button,
  propStyles({
    success: ({ theme }) => ({ backgroundColor: theme.colors.success }),
    danger: ({ theme }) => ({ backgroundColor: theme.colors.danger }),
    primary: ({ theme }) => ({ backgroundColor: theme.colors.primary }),
    info: ({ theme }) => ({ backgroundColor: theme.colors.info }),
    gray: ({ theme }) => ({ backgroundColor: theme.colors.gray }),
    accent: ({ theme }) => ({ backgroundColor: theme.colors.accent }),
    small: [button, small, { fontSize: 12 }],
    large: [button, large, { fontSize: 18 }]
  })
)
