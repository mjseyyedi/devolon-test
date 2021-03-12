import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useLocation, useHistory} from 'react-router-dom'

import {FlexBox} from 'components/common/FlexBox'
import {Button} from 'components/common/Button'

import {Sidebar} from './Sidebar'
import {Tiles} from './Tiles'

import {urlParams} from 'utils'
import {themes} from 'utils/StyleConstants'

const Wrapper = styled(FlexBox)``

const SideWrapper = styled.div`
  width: 20%;
`

const Content = styled(FlexBox)`
  padding: 24px;
  width: 80%;
  height: calc(100vh - ${themes.sizes.navbar});
  overflow-y: auto;

  > div {
    width: 30%;
    height: 30vh;
  }
`

const LoadMore = styled.section`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
`

const Home = ({
  setState,
  getCategories,
  categories,
  getCategoryImages,
  categoryImages,
}) => {
  const location = useLocation()
  const history = useHistory()

  const [category_ids, setCatId] = useState()

  useEffect(() => {
    setTimeout(() => {
      // setState('title', 'new title')
    }, 1000)
    getCategories()
  }, [])

  useEffect(() => {
    if (categories.length && !location.search) {
      const firstCat = categories[0]
      history.replace(`/?category_id=${firstCat.id}`)
    }
  }, [categories])

  useEffect(() => {
    const category_ids = urlParams(location.search, 'category_id')
    if (category_ids) {
      setCatId(category_ids)
      getCategoryImages({category_ids, page: 0})
    }
  }, [location.search])

  return (
    <Wrapper justify={'center'}>
      <SideWrapper>
        <Sidebar
          items={categories}
          selectCategory={id => history.replace(`/?category_id=${id}`)}
        />
      </SideWrapper>
      <Content wrap={'wrap'} justify={'space-between'}>
        {categoryImages[category_ids] &&
          categoryImages[category_ids].map(imgItem => <Tiles item={imgItem} />)}

        {categoryImages[category_ids] && categoryImages[category_ids].length ? (
          <LoadMore>
            <Button primary onClick={() => getCategoryImages({category_ids})}>
              load more
            </Button>
          </LoadMore>
        ) : null}
      </Content>
    </Wrapper>
  )
}

export default Home
