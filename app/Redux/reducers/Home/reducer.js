import C from './constants'
import {combineReducers} from 'redux'
import initialState from './state'

const categories = (state = initialState.categories, action) => {
  return action.type === C.SET_CATEGORIES ? action.result : state
}

const category_images = (state = initialState.category_images, action) => {
  return action.type === C.SET_CATEGORY_IMAGES ? action.result : state
}

export default combineReducers({
  categories,
  category_images,
})
