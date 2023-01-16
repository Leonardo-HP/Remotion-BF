import React from 'react';
import {Sequence} from 'remotion/.';

import styled from 'styled-components';
import {CuadroRojo} from '../CuadroRojo';
import {Logo} from './logo';

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
	background: linear-gradient(110deg, #cc1e2c 60%, #ffffff 60%);
`;

const CenteredContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export function BoxFacturaLogo(props: BackgroundContainerProps) {
	const {transformX} = props;

	return (
		<BackgroundContainer>
			<Sequence from={1}>
				<CenteredContainer>
					<Logo />

					<CuadroRojo />
				</CenteredContainer>
			</Sequence>
		</BackgroundContainer>
	);
}
