import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderWrapper>Selecione o filme</HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
    display: flex;
    width: 375px;
    height: 110px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
`;

export default Header
