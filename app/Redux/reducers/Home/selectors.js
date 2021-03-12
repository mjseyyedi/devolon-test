import {createSelector} from 'reselect'

const selectHome = state =>
  state.home

export const selectCategories = () =>
  createSelector(
    selectHome,
    home =>
      home.categories,
  )

export const selectCategoryImages = () =>
  createSelector(
    selectHome,
    home =>
      home.category_images,
  )
