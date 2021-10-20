import { combineReducers } from 'redux'
import page from './page/reducer'
import color from './color/reducer'
import font from './font/reducer'
import intermitence from './intermitence/reducer'

const reducers = combineReducers({
  page,
  color,
  font,
  intermitence,
})

export default reducers
