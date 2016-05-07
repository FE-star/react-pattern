import React, { Component } from 'react'
import Trigger from '../../components/trigger/trigger'
import Context from '../context/context'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (<div>
      <Context />
      <Trigger />
    </div>)
  }
}

export default App
