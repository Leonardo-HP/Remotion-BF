import React from 'react';

import styled from 'styled-components';

interface TextoBFProps {
	transformY: number;
}

const Container = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	alig-items: center;
	justify-content: center;
	overflow: hidden;
`;

export function TextoBF(props: TextoBFProps) {
	const {transformY} = props;

	return (
		<Container>
			<svg height="30" width="200" transform={`translate(0,${transformY})`}>
				<text x="0" y="15" fill="white">
					Box Factura
				</text>
			</svg>
		</Container>
	);
}
