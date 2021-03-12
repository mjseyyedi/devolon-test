import {makeActionCreator} from '../helpers'
import C from './constants'

export const getCategories = makeActionCreator(
  C.GET_CATEGORIES,
)
export const setCategories = makeActionCreator(
  C.SET_CATEGORIES,
  'result',
)
export const getCategoryImages = makeActionCreator(
  C.GET_CATEGORY_IMAGES,
  'data',
)
export const setCategoryImages = makeActionCreator(
  C.SET_CATEGORY_IMAGES,
  'result',
)
