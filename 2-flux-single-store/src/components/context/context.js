import React, { Component } from 'react'

class Context extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <p>{this.state.value}</p>
  }
}

export default Context
