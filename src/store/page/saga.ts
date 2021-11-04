import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { PagesQuery, headerQuery, footerQuery, colorQuery, fontQuery, portfolioQuery } from '@graphql/query'
import { GET_PAGE, GET_PAGE_ASYNC } from './action-types'
import { setColor } from '../color/action'
import { setFonts } from '../font/action'
import { setLoaderShow } from '../intermitence/action'
import { setPortfolio } from '@store/actions'

const getQueryPages = () => {
  return `
    query Pages {
      ${PagesQuery}
      ${headerQuery}
      ${footerQuery}
      ${colorQuery}
      ${fontQuery}
      ${portfolioQuery}
    }
  `
}

function* getPageAsync() {
  try {
    yield put(setLoaderShow(true))

    const response = yield call(GraphQlClient, getQueryPages(), {})

    const { pages, header, footer, colorPallete, font, portfolios } = validateFetch(response)
    if (colorPallete) yield put(setColor(colorPallete))
    if (font) yield put(setFonts(font))
    if (portfolios) yield put(setPortfolio({ portfolios }))
    if (pages && header && footer) yield put(actionObject(GET_PAGE_ASYNC, { pages, header, footer }))
    yield put(setLoaderShow(false))
  } catch (err) {
    console.log(err)
    //yield call(manageError, err)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}

