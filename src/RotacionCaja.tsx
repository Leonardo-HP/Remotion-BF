import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const RotacionCaja: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		frame,
		fps,
	});

	const rotacion = interpolate(frame, [0, 20], [0, 180], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Sequence name="rotacion">
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						border: '10px solid white',
						top: '280px',
						left: '700px',
						transform: `rotate(${rotacion}deg)`,
					}}
				/>
			</Sequence>
		</>
	);
};
