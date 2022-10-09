import React from 'react'
import styled from 'styled-components'

function Header(props) {

  return (
    <HeaderWrapper color={props.color} weight={props.weight}>{props.text}</HeaderWrapper>
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
    color: ${props => props.color};
    font-weight: ${(props) => props.weight ? props.weight : "400"};
`;

export default Header
