import React, { Component } from 'react'
import store from '../../store/store'

class Context extends Component {
  constructor(props) {
    super(props)
    const { msg } = store.getState()
    this.state = { msg }
  }
  // TODO component data & store 解耦
  componentWillMount() {
    store.addListener(() => {
      const { msg } = store.getState()
      this.setState({ msg })
    })
  }
  render() {
    return <p>{this.state.msg}</p>
  }
}

export default Context
