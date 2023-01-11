import React from "react"; 
import { Sequence } from "remotion/.";

import styled from 'styled-components'
import { Logo } from "./logo";


interface BackgroundContainerProps {
	transformX: number;
}



const BackgroundContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: linear-gradient(110deg, #CC1E2C 60%, #FFFFFF 60%);
`;

const CenteredContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`;

export function BoxFacturaLogo(props: BackgroundContainerProps) {

  
  return  <BackgroundContainer>
  <Sequence from={1}>
  <CenteredContainer>
    <Logo/>
  </CenteredContainer>
  </Sequence>
  </BackgroundContainer>

}