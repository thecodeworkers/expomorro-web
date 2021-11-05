import { actionObject } from '@utils'
import { SET_PORTFOLIO } from './action-types'

export const setPortfolio = (portfolios) => actionObject(SET_PORTFOLIO, portfolios)
