import { actionObject } from '@utils'
import { GET_PAGE, SEND_EMAIL } from './action-types'

export const getPage = () => actionObject(GET_PAGE)
export const sendEmail = (data) => actionObject(SEND_EMAIL, data)