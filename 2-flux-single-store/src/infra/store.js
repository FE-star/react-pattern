import { ReduceStore } from 'flux/utils'
import dispatcher from './dispatcher'

class MyStore extends ReduceStore {
  /**
   * get init state
   */
  getInitialState() {
    return {
      msg: 'hello',
    }
  }

  /**
   * just one reduce
   */
  reduce(state, action) {
    switch (action.type) {
      case 'TRIGGER':
        return Object.assign({}, state, { msg: '你好' })
      default:
        return state
    }
  }
}

const store = new MyStore(dispatcher)
export default store
