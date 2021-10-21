import { MENU_SHOW, SHOW_LOADER } from './action-types'
import { actionObject } from '@utils'

export const setMenuShow = (show: any) => actionObject(MENU_SHOW, show)
export const setLoaderShow = (show: any) => actionObject(SHOW_LOADER, show)
