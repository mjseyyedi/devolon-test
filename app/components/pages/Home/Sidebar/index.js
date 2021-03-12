import React from 'react'
import styled from 'styled-components'

import {FlexBox} from 'components/common/FlexBox'
import ChevronIcon from 'components/common/Icons/ChevronIcon'

import {themes} from 'utils/StyleConstants'

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${themes.colors.lightBackground};
  min-height: calc(100vh - ${themes.sizes.navbar});
`

const SidebarItem = styled(FlexBox)`
  height: 48px;
  width: 100%;
  padding: 0 24px;
  border-bottom: 1px solid ${themes.colors.separator};
  cursor: pointer;
  &:last-child {
    border-bottom: none !important;
  }
`

export const Sidebar = ({items, selectCategory = () => {}}) => (
  <SidebarWrapper>
    {items.map(item => (
      <SidebarItem
        justify={'space-between'}
        onClick={() => selectCategory(item.id)}
        alignItems={'center'}>
        <span>{item.name}</span>
        <ChevronIcon rotation={'180deg'} />
      </SidebarItem>
    ))}
  </SidebarWrapper>
)
