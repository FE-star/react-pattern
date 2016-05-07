import React, { Component } from 'react'
import { dispatch } from '../../infra/dispatcher'

class Trigger extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  /**
   * TODO dispatch 依赖注入方案，
   * Component 本身应当连 dispatch 哪里来的都不需要知道，
   * 甚至可能根本不知道 dispatch
   */
  trigger() {
    dispatch({
      type: 'TRIGGER',
    })
  }

  render() {
    return <button onClick={this.trigger}>改变</button>
  }
}

export default Trigger
