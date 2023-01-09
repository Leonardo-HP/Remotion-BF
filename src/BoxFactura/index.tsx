import React from "react"; 
import { Sequence } from "remotion/.";

import styled from 'styled-components'
import { Logo } from "./logo";




const BackgroundContainer = styled.div`
widht:100%
background: linear-gradient(110deg, red 60%, white 60%);
`


const CenteredContainer = styled.div`
width: 100%;
display: flex:
flex-direction: colum;
align-items: center;


`

export function BoxFactura()  {

  return <Sequence>
  <BackgroundContainer>
  <CenteredContainer>


    <Logo />
  </CenteredContainer>
  
  </BackgroundContainer>
  </Sequence>


}