import { AnyAction } from 'redux'
import {
  MENU_SHOW,
  SHOW_LOADER,
  SHOW_TOAST,
} from './action-types'

const initialState = {
  showMenu: false,
  showLoader: false,
  toast: {
    status: 0,
    message: '',
    type: ''
  },
}

const setIntermitenceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, showLoader: payload }

    case SHOW_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          ...payload
        }
      }
    case MENU_SHOW:
      return { ...state, showMenu: payload }


    default:
      return state
  }
}

export default setIntermitenceReducer
