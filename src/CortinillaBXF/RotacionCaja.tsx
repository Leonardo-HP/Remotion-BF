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
		from:0,
		to:100,
		frame,
		fps,
		config: {
			mass:10,
			stiffness: 20,
			damping:100,
		},
	});
	const rotacion = interpolate(driver, [0, 30], [0, 90], {
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
