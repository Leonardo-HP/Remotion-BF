import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const CirculoColores: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		from: 0,
		to: 100,
		frame,
		fps,
		config: {
			mass: 10,
			stiffness: 20,
			damping: 100,
		},
	});

	const salida = interpolate(frame, [0, 30], [0, 1700], {
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence name="Separacion" durationInFrames={200}>
				<AbsoluteFill>
					
					<AbsoluteFill
					style={{
						background: '#fcb00b',
						top: '0px',
						left: `525px`,
						width: '500px',
						height: '500px',
						clipPath: 'circle(50% at 0%)',
					}}
				/>
				<AbsoluteFill
					style={{
						background: 'black',
						top: '50px',
						left: `525px`,
						width: '400px',
						height: '400px',
						clipPath: 'circle(45% at 0%)',
					}}
				/>
				</AbsoluteFill>
				
			</Sequence>
		</div>
	);
};
