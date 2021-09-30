import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { PagesQuery } from '@graphql/query'
import {GET_PAGE, GET_PAGE_ASYNC } from './action-types'

const getQueryPages = () => {

  const query = `
    query Pages {
      ${PagesQuery}
    }
  `

  return query
}

function* getPageAsync() {
  try {
    const response = yield call(GraphQlClient, getQueryPages(), {})
    const { pages } = validateFetch(response)
    console.log(pages)
    yield put(actionObject(GET_PAGE_ASYNC, { pages }))
  } catch (err) {
    yield call(manageError, err)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}

