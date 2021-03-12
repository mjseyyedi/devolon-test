import React from 'react'
import styled from 'styled-components'

import {themes} from 'utils/StyleConstants'
// import {FlexBox} from 'common/FlexBox'

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: ${themes.sizes.navbar};
  background-color: ${themes.colors.lightBackground};
`

const Navbar = props => {
  return (
    <NavbarWrapper>
      <div>logo</div>
      <div>title</div>
      <div>profile</div>
    </NavbarWrapper>
  )
}

export default Navbar
