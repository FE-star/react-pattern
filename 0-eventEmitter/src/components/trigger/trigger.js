import React, { Component } from 'react'
import emitter from '../../lib/emitter'

class Trigger extends Component {
  constructor(props) {
    super(props)
    this.state = { word: '改变' }
  }

  componentWillMount() {
    emitter.addListener('CHANGE_WORD', (v) => {
      this.setState({ word: v })
    })
  }

  trigger() {
    emitter.emit('TRIGGER')
  }

  render() {
    return <button onClick={this.trigger}>{this.state.word}</button>
  }
}

export default Trigger
