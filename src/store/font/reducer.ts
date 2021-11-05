import { AnyAction } from 'redux'
import { SET_FONT } from './action-types'

const initialState = {
  bold: {},
  normal: {},
  slim: {},
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_FONT:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default reducer
