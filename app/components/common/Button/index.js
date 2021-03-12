import React from 'react'
import styled from 'styled-components'
import {themes} from 'utils/StyleConstants'

const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  height: 48px;
  min-width: 128px;
  color: ${themes.colors.white};
  background-color: ${props =>
    props.primary ? themes.colors.primary : themes.colors.default};
`

export const Button = ({type, children, primary, onClick = () => {}}) => {
  return (
    <ButtonWrapper primary={primary} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}
