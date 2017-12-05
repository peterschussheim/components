import React from 'react'
import PropTypes from 'prop-types'
import spinners from '../data/spinners'

class Spinner extends React.Component {
  state = { frame: 0 }

  componentDidMount() {
    const spinnerType = this.props.type
    console.log(spinnerType)
    this.interval = setInterval(() => {
      this.setState({
        frame:
          this.state.frame + 1 === spinners[spinnerType].frames.length
            ? 0
            : this.state.frame + 1
      })
    }, spinners[spinnerType].interval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  // init component with a default or a spinnerType prop specified by user
  // const getSpinnerType props => {
  //   const { spinnerType } = props.type
  // }

  render() {
    const { spinnerType } = this.props.type
    let cell = ''
    while (this.state.frame > 0) {
      cell += spinners.arc.frames[this.state.frame]
      // dots--
    }
    return <span>{cell}&nbsp;</span>
  }
}

export default Spinner
