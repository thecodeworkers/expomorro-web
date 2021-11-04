import { AnyAction } from 'redux'
import { SET_COLOR } from './action-types'

const initialState = {
  primary: '#e5e5e5',
  secondary: '#34a1ad',
  complement: '#59c1c6',
  titles: '#000000',
  body: '#858585',
  footer: '#000000',
  contrast: '#c4c4c4',
  menuText: '#FFFFFF'
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_COLOR:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default reducer
