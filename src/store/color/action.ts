import { actionObject } from '@utils'
import { SET_COLOR } from './action-types'

export const setColor = (colors) => actionObject(SET_COLOR, colors)
