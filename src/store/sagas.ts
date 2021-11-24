import { all, fork } from 'redux-saga/effects'
import { watchGetPages, watchSendEmail } from './page/saga'

function* sagas() {
  yield all([
    fork(watchGetPages),
    fork(watchSendEmail)
  ])
}

export default sagas
