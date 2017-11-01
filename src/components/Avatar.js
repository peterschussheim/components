import React from 'react'
import PropTypes from 'prop-types'
import Div, { glamorous } from 'glamorous'
import Image from './Image'

export default class Avatar extends React.Component {
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    showIndicator: PropTypes.bool
  }

  constructor(props) {
    super(props)
  }

  state = { status: true }

  render() {
    const { imgSrc } = this.props
    const { status } = this.state
    return (
      <div>
        {this.props.showIndicator ? (
          <Image faded src={imgSrc} status={status} alt="avatar" />
        ) : (
          <Image src={imgSrc} alt="avatar" />
        )}
      </div>
    )
  }
}
