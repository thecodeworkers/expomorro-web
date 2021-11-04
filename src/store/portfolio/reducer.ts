import { AnyAction } from 'redux'
import { SET_PORTFOLIO } from './action-types'

const initialState = {
  portfolios: []
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_PORTFOLIO:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default reducer
