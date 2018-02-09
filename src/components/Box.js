import React from 'react'
import './Box.scss'

class Box extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}

export default Box
