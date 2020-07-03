import * as actions from './constants'
import produce from 'immer'

const initialState = {
  error: {},
  list: []
}

export default (state = initialState, { type, data }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.GET.SUCCESS: {
        draft.list = data
        break
      }

      default:
        return state
    }
  })
}
