import React from 'react'
import styled from 'styled-components'

import {FlexBox} from 'components/common/FlexBox'
import {themes} from 'utils/StyleConstants'

const ImgWrapper = styled(FlexBox)`
  background-color: ${themes.colors.lightBackground};
  margin-bottom: 16px;
  border-radius: 8px;
  > img {
    height: 100%;
    max-width: 100%;
    border-radius: 8px;
  }
`

export const Tiles = ({item}) => {
  return (
    <ImgWrapper key={item.id} justify={'center'} alignItems={'center'}>
      <img src={item.url} alt={item.id} />
    </ImgWrapper>
  )
}
