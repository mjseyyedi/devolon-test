import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import reducer from 'Redux/reducers/Home/reducer'
import saga from 'Redux/reducers/Home/saga'

import {getCategories, getCategoryImages} from 'Redux/reducers/Home/actions'
import {
  selectCategories,
  selectCategoryImages,
} from 'Redux/reducers/Home/selectors'

import useRedux from 'Hooks/useRedux'

import View from './View'

const HomePageIndex = initialProps => {
  const reducers = {home: reducer}
  const sagas = {home: saga}
  const dispatch = useDispatch()

  useRedux(reducers, sagas)

  const mapDispatchToProps = {
    getCategories: data => dispatch(getCategories(data)),
    getCategoryImages: data => dispatch(getCategoryImages(data)),
  }

  const mapStateToProps = useSelector(
    createStructuredSelector({
      categories: selectCategories(),
      categoryImages: selectCategoryImages(),
    }),
  )

  const props = Object.assign(
    {},
    initialProps,
    mapDispatchToProps,
    mapStateToProps,
  )

  return <View {...props} />
}

export default HomePageIndex
