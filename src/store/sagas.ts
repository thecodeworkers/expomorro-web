import { all, fork } from 'redux-saga/effects'
import { watchGetPages } from './page/saga'

function* sagas() {
  yield all([
    fork(watchGetPages)
  ])
}

export default sagas
