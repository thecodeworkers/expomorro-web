import { call, delay, put } from '@redux-saga/core/effects'
import { END } from '@redux-saga/core'

export const normalizedArray = response => response ? response : []

export const normalized = response => response ? response : {}

export const actionObject = (type: string, payload = null) => ({ type, payload })

export const paginate = (items: Array<any>, page_number: number = 1, page_size: number = 15) => {
  return items.slice((page_number - 1) * page_size, page_number * page_size);
}

export const scrollTo = (ref: any, offset = 0) => {
  window.scrollTo({ top: ref.offsetTop - offset, behavior: 'smooth' });
}

export const createMarkup = (text) => { return { __html: text }; }

export const validateFetch = ({ errors, data }) => {
  if (errors) throw errors[0].message
  if (typeof (data) == 'undefined') throw new Error('Cannot connect')

  return data
}

export function* showDialog(message, type = 'success', toast = 'SHOW_TOAST') {
  yield put(actionObject(toast, {
    status: 1,
    message,
    type
  }))

  yield delay(3000)

  yield put(actionObject(toast, {
    status: 2
  }))
}

export function* manageError(error, toast = 'SHOW_TOAST', loader = 'SHOW_LOADER') {
  yield put(actionObject(loader, false))
  yield call(showDialog, error, 'error', toast)
}

export const mapProps = async (store, action) => {
  store.dispatch(action)
  store.dispatch(END)
  await store.sagaTask.toPromise();
}

export const roundNumber = (number) => Math.round(number * 100) / 100

export const elementId = (id: string) => {
  const element = document.querySelector(id)
  return element.id
}

export const parseDate = (currentDate) => {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()

  return `${day}/${month}/${year}`
}

export const parseHour = (data) => {
  const date = new Date(data)
  let minutes: any = date.getMinutes()
  let hour: any = date.getHours()
  const setHour = hour === 0 ? 12 : hour
  hour = hour > 12 ? hour - 12 : setHour
  hour = hour < 10 ? `0${hour}` : hour
  minutes = minutes < 10 ? `0${minutes}` : minutes
  const afternoon = date.getHours() > 11 ? 'PM' : 'AM'
  return `${hour}:${minutes} ${afternoon}`
}

export const buildSimpleArray = (key: string, array: any = []): Array<any> => {
  let newArray = []
  array.forEach((item: any, index: number) => {
    newArray[index] = item[key]
  })

  return newArray
}
