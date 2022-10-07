import React from 'react'
import styled from 'styled-components';

function Topbar() {
  return (
    <TopbarComp>CINEFLEX</TopbarComp>
  )
}


const TopbarComp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    width: 375px;
    height: 67px;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    margin: auto;
`;

export default Topbar