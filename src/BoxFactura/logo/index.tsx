import React from "react";
import styled from "styled-components";
import { BoxFactura } from "..";
import { TextoBF } from "./textoBF";


const LogoContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;


`
export function Logo(){
 

return <LogoContainer>
  <TextoBF transformY={0}/>
</LogoContainer>

}