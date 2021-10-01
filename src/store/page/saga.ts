import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { PagesQuery, headerQuery, footerQuery } from '@graphql/query'
import { GET_PAGE, GET_PAGE_ASYNC } from './action-types'

const getQueryPages = () => {

  const query = `
    query Pages {
      ${PagesQuery}
      ${headerQuery}
      ${footerQuery}
    }
  `

  return query
}

function* getPageAsync() {
  try {
    const response = yield call(GraphQlClient, getQueryPages(), {})
    const { pages, header, footer } = validateFetch(response)
    yield put(actionObject(GET_PAGE_ASYNC, { pages, header, footer }))
  } catch (err) {
    yield call(manageError, err)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}

