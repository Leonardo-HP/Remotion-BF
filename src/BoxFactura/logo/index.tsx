import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion/.';
import styled from 'styled-components';
import {TextoBF} from './textoBF';

const LogoContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;
export function Logo() {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const textoBFPosition = spring({
		from: 0,
		to: 100,
		frame,
		fps,
		config: {mass: 10, damping: 100, stiffness: 300},
	});

	return (
		<LogoContainer>
			<TextoBF transformY={textoBFPosition} />
		</LogoContainer>
	);
}
