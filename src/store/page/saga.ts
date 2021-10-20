import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { PagesQuery, headerQuery, footerQuery, colorQuery, fontQuery } from '@graphql/query'
import { GET_PAGE, GET_PAGE_ASYNC } from './action-types'
import { setColor } from '../color/action'
import { setFonts } from '../font/action'

const getQueryPages = () => {
  return `
    query Pages {
      ${PagesQuery}
      ${headerQuery}
      ${footerQuery}
      ${colorQuery}
      ${fontQuery}
    }
  `
}

function* getPageAsync() {
  try {
    const response = yield call(GraphQlClient, getQueryPages(), {})
    const { pages, header, footer, colorPallete, font } = validateFetch(response)
    yield put(setColor(colorPallete))
    yield put(setFonts(font))
    yield put(actionObject(GET_PAGE_ASYNC, { pages, header, footer }))
  } catch (err) {
    yield call(manageError, err)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}

