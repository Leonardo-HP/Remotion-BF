import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const Texto: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		frame,
		fps,
	});


	return (
				<AbsoluteFill
					style={{
						fontFamily: 'Arial',
						fontSize: '7em',
						textAlign: 'center',
						padding: '400px ',
					}}
				>
					BOX
					<br />
					factura
				</AbsoluteFill>
	);
};
