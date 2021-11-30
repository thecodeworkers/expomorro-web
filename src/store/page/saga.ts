import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, RestClient, validateFetch } from '@utils'
import { PagesQuery, headerQuery, footerQuery, colorQuery, fontQuery, portfolioQuery } from '@graphql/query'
import { GET_PAGE, GET_PAGE_ASYNC, SEND_EMAIL } from './action-types'
import { setColor } from '../color/action'
import { setFonts } from '../font/action'
import { setLoaderShow } from '../intermitence/action'
import { setPortfolio, setToast } from '@store/actions'

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
    // console.log("portfolios", portfolios)
    if (colorPallete) yield put(setColor(colorPallete))
    if (font) yield put(setFonts(font))
    if (portfolios) yield put(setPortfolio({ portfolios }))
    if (pages && header && footer) yield put(actionObject(GET_PAGE_ASYNC, { pages, header, footer }))
    yield put(setLoaderShow(false))
  } catch (err) {
    console.log(err)
    yield put(setLoaderShow(false))
    //yield call(manageError, err)
  }
}

function* sendMailAsync({ payload }) {
  try {
    yield put(setLoaderShow(true))
    yield call(RestClient, 'forms/sendmail', payload)
    yield put(setLoaderShow(false))
    yield put(setToast('check', 'Correo enviado con exito', 1))
  } catch (err) {
    console.log(err)
    yield put(setToast('error', 'Error al procesar el envio de correo', 1))
    yield put(setLoaderShow(false))
    //yield call(manageError, err)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}

export function* watchSendEmail() {
  yield takeLatest(SEND_EMAIL, sendMailAsync)
}

