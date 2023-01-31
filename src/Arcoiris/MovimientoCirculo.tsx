import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';
import {CirculoColores} from './CirculoColores';

export const MovimientoCirculo: React.FC = () => {
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

	const top1 = interpolate(frame, [0, 80], [1400, -3000], {
		extrapolateRight: 'clamp',
	});
	const left1 = interpolate(frame, [0, 80], [-3500, 3000], {
		extrapolateRight: 'clamp',
	});

	const top2 = interpolate(frame, [0, 80], [-3000, 1000], {
		extrapolateRight: 'clamp',
	});
	const left2 = interpolate(frame, [0, 80], [3500, -3000], {
		extrapolateRight: 'clamp',
	});

	const top3 = interpolate(frame, [100, 200], [-900, 3500], {
		extrapolateRight: 'clamp',
	});
	const left3 = interpolate(frame, [120, 140], [-1800, -1800], {
		extrapolateRight: 'clamp',
	});

	const top4 = interpolate(frame, [100, 200], [400, -4500], {
		extrapolateRight: 'clamp',
	});
	const left4 = interpolate(frame, [120, 140], [500, 500], {
		extrapolateRight: 'clamp',
	});

	const opacity1 = interpolate(frame, [70, 80, 90, 100], [0, 1, 1, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence name="Salida" durationInFrames={200}>
				<AbsoluteFill
					style={{
						top: `${top1}px`,
						left: `${left1}px`,
					}}
				>
					<CirculoColores />
				</AbsoluteFill>
			</Sequence>

			<Sequence name="Salida" durationInFrames={200} from={50}>
				<AbsoluteFill
					style={{
						top: `${top2}px`,
						left: `${left2}px`,
						
						
					}}
				>
					<CirculoColores />
				</AbsoluteFill>
			</Sequence>

			<Sequence name="Salida" durationInFrames={200} from={50}>
				<AbsoluteFill
					style={{
						top: `-400px`,
						left: `-700px`,
						opacity: opacity1,
					}}
				>
					<CirculoColores />
				</AbsoluteFill>
			</Sequence>

			<Sequence name="Salida" durationInFrames={200} from={100}>
				<AbsoluteFill
					style={{
						top: `${top3}px`,
						left: `${left3}px`,
					}}
				>
					<CirculoColores />
				</AbsoluteFill>
			</Sequence>
			<Sequence name="Salida" durationInFrames={200} from={100}>
				<AbsoluteFill
					style={{
						top: `${top4}px`,
						left: `${left4}px`,
					}}
				>
					<CirculoColores/>
				</AbsoluteFill>
			</Sequence>


      <Sequence name="Salida" durationInFrames={200} from={350}>
				<AbsoluteFill
					style={{
						top: `${top4}px`,
						left: `${left4}px`,
					}}
				>
					<CirculoColores/>
				</AbsoluteFill>
			</Sequence>






		</div>
	);
};
