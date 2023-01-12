
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import styled from "styled-components";

const BackgroundContainer = styled.div`
	width: 10%;
	height: 10%;
	display: flex;[]
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background:  #cc1e2c ;
  top: top * 300 + "%"
`;




export const CuadroRojo: React.FC <{
delay:number ;


}>= ({delay}) => {

const frame = useCurrentFrame()

const top = interpolate(frame-delay,[0,1],[0,1],[-0.2,1.1]);
  
  
  return (
<BackgroundContainer/>
  );
};

