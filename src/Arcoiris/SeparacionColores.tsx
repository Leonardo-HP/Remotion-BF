import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const SeparacionColores: React.FC = () => {
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

	const salida2 = interpolate(frame, [0, 43], [0, -5700], {
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence name="Separacion" durationInFrames={200}>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: '70px',
						background: '#fcb00b',
						top: '0px',
						left: `525px`,
					}}
				/>

				<AbsoluteFill
					style={{
						height: '1080px',
						width: '70px',
						background: '#ac54c1',
						top: '0px',
						left: `1325px`,
					}}
				/>
			</Sequence>
		</div>
	);
};
