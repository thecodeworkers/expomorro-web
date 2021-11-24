import { combineReducers } from 'redux'
import page from './page/reducer'
import color from './color/reducer'
import font from './font/reducer'
import intermitence from './intermitence/reducer'
import portfolio from './portfolio/reducer'
import toast from './toast/reducer'

const reducers = combineReducers({
  page,
  color,
  font,
  intermitence,
  portfolio,
  toast
})

export default reducers
