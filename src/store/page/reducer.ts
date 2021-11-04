import { AnyAction } from 'redux'
import { GET_PAGE_ASYNC } from './action-types'

const initialState = {
  pages: [],
  header: {},
  footer: {}
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_PAGE_ASYNC:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default reducer
