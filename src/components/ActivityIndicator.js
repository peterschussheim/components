import React from 'react'
import PropTypes from 'prop-types'

const compose = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

class ActivityIndicator extends React.Component {
  static defaultProps = {
    defaultOn: false,
    onToggle: () => {},
    onReset: () => {}
  }

  initialState = { on: this.props.defaultOn }
  state = this.initialState

  reset = () =>
    this.setState(this.initialState, () => this.props.onReset(this.state.on))

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    )

  getTogglerProps = ({ onClick, ...props } = {}) => ({
    onClick: compose(onClick, this.toggle),
    'aria-expanded': this.state.on,
    ...props
  })

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
      reset: this.reset,
      getTogglerProps: this.getTogglerProps
    })
  }
}
export default ActivityIndicator
