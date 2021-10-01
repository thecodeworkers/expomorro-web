import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { PagesQuery, headerQuery } from '@graphql/query'
import { GET_PAGE, GET_PAGE_ASYNC } from './action-types'

const getQueryPages = () => {

  const query = `
    query Pages {
      ${PagesQuery}
      ${headerQuery}
    }
  `

  return query
}

function* getPageAsync() {
  try {
    const response = yield call(GraphQlClient, getQueryPages(), {})
    const { pages, header } = validateFetch(response)
    yield put(actionObject(GET_PAGE_ASYNC, { pages, header }))
  } catch (err) {
    yield call(manageError, err)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}

