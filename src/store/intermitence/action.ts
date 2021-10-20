import { MENU_SHOW } from './action-types'
import { actionObject } from '@utils'

export const setMenuShow = (show: any) => actionObject(MENU_SHOW, show)
