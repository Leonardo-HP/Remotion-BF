import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const CuadroBlancoSalida: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		frame,
		fps,
	});

	const top = interpolate(frame, [10, 20], [1100, -4000]);

	return (
		<>
			<Sequence>
				<AbsoluteFill
					style={{
						width: '150%',
						height: '300%',
						background: '#F8F8FF',
						transform: 'rotate(50deg)',
						top,
						left: top,
					}}
				>
					XXX
				</AbsoluteFill>
			</Sequence>
		</>
	);
};
