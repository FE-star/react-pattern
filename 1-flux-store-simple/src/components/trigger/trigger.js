import React, { Component } from 'react'
import store from '../../store/store'

class Trigger extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  /**
   * TODO component's action & store 解耦
   */
  trigger() {
    store.getDispatcher().dispatch({ type: 'TRIGGER' })
  }

  render() {
    return <button onClick={this.trigger}>trigger</button>
  }
}

export default Trigger
