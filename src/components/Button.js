import React from 'react'
import glamorous from 'glamorous'
import colors from '../styles/colors'

export default glamorous.button(
  {
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
  },
  props => ({
    backgroundColor: colors[props.type] || colors['gray']
  })
)
