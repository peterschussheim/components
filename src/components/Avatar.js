import React from 'react'
import PropTypes from 'prop-types'
import Div, { glamorous } from 'glamorous'
import Image from './Image'

export default class Avatar extends React.Component {
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    presence: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  state = { status: 'online' }

  render() {
    const { imgSrc } = this.props
    const { status } = this.state
    return (
      <div>
        {this.props.presence ? (
          <Image avatar src={imgSrc} status={status} alt="avatar" />
        ) : (
          <Image avatar src={imgSrc} alt="avatar" />
        )}
      </div>
    )
  }
}
