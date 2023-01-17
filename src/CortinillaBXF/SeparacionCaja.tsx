import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const SeparacionCaja: React.FC = () => {
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

	const leftL = interpolate(driver, [0, 10], [700, -700], {
		extrapolateRight: 'clamp',
	});

	const leftR = interpolate(driver, [0, 10], [700, 1600], {
		extrapolateRight: 'clamp',
	});

	const topT = interpolate(driver, [0, 10], [280, -280], {
		extrapolateRight: 'clamp',
	});

	const topB = interpolate(driver, [0, 10], [280, 640], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Sequence name="Arriba">
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: '10px solid white',
						left: '700px',
						top: topT,
					}}
				/>
			</Sequence>

			<Sequence name="abajo">
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderBottom: '10px solid white',
						left: '700px',
						top: topB,
					}}
				/>
			</Sequence>
			<Sequence name="izquierda">
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderLeft: '10px solid white',
						left: leftL,
						top: '280px',
					}}
				/>
			</Sequence>
			<Sequence name="derecha">
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderRight: '10px solid white',
						left: leftR,
						top: '280px',
					}}
				/>
			</Sequence>
		</>
	);
};
