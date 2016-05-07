import { Container } from 'flux/utils'
import Context from '../../components/context/context'
import store from '../../infra/store'

/**
 * bind store
 */
Object.assign(Context, {
  getStores: () => [store],
  calculateState: function calculateState() {
    return {
      value: store.getState().msg,
    }
  },
})

const ContextContainer = Container.create(Context)
export default ContextContainer
