import { actionObject } from '@utils'
import { SET_FONT } from './action-types'

export const setFonts = (fonts) => actionObject(SET_FONT, fonts)
