import React, { Component } from 'react'
import emitter from '../../lib/emitter'

 /**
  * TODO 数据属于 Component 本身，所以 Component 不纯粹，不容易在多个地方复用
  */
class Context extends Component {
  constructor(props) {
    super(props)
    this.state = { msg: 'hello' }
  }
  componentWillMount() {
    /**
     *  TODO 事件紊乱，这是个不好的例子，但是架构上应该避免，而不是让程序员自行避免
     */
    emitter.addListener('TRIGGER', () => {
      this.setState({ msg: '你好' })
      emitter.emit('CHANGE_WORD', '点我没用')
    })
  }
  render() {
    return <p>{this.state.msg}</p>
  }
}

export default Context
