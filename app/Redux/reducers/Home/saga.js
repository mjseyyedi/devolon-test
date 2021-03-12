import {call, put, all, takeLatest, select} from 'redux-saga/effects'

import {setCategories, setCategoryImages} from './actions'
import {selectCategoryImages} from './selectors'

import API from 'API'

import types from './constants'

function* fetchCategoriesData(actions) {
  const response = yield call(API.getCategories)
  if (response && response.length) {
    yield put(setCategories(response.sort((a, b) => a.id - b.id)))
  }
}

function* fetchCategoryImages(actions) {
  const limit = 9
  const categoryImages = yield select(selectCategoryImages())
  const catImageList = categoryImages[actions.data.category_ids] || []
  const page =
    actions.data.page === 0 || !catImageList.length
      ? 0
      : Math.floor(catImageList.length / limit)
  const params = {...actions.data, limit, page}

  const response = yield call(API.getImages, params)

  if (response && response.length) {
    const newImageList = catImageList.concat(response)
    const newCategoryImages = {
      ...categoryImages,
      [actions.data.category_ids]: newImageList,
    }
    yield put(setCategoryImages(newCategoryImages))
  }
}

export default function* HomeSaga() {
  yield all([
    takeLatest(types.GET_CATEGORIES, fetchCategoriesData),
    takeLatest(types.GET_CATEGORY_IMAGES, fetchCategoryImages),
  ])
}
