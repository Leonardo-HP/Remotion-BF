import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const Colores: React.FC = () => {
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

	// 11

	const duracion = 70;

	const linea1Entrada = interpolate(frame, [0, 40], [1920, -480], {
		extrapolateRight: 'clamp',
	});

	const linea2Entrada = interpolate(frame, [38, 41], [-1440, -480], {
		extrapolateRight: 'clamp',
	});

	const linea3Entrada = interpolate(frame, [4, 44], [1920, -480], {
		extrapolateRight: 'clamp',
	});

	const linea4Entrada = interpolate(frame, [38, 42], [-1440, -480], {
		extrapolateRight: 'clamp',
	});
	const linea5Entrada = interpolate(frame, [8, 48], [1920, -480], {
		extrapolateRight: 'clamp',
	});

	const linea6Entrada = interpolate(frame, [38, 43], [-1440, -480], {
		extrapolateRight: 'clamp',
	});

	const linea7Entrada = interpolate(frame, [12, 52], [1920, -480], {
		extrapolateRight: 'clamp',
	});

	const linea8Entrada = interpolate(frame, [38, 44], [-1440, -480], {
		extrapolateRight: 'clamp',
	});

	const linea9Entrada = interpolate(frame, [18, 56], [1920, -480], {
		extrapolateRight: 'clamp',
	});

	const linea10Entrada = interpolate(frame, [38, 50], [-1440, -480], {
		extrapolateRight: 'clamp',
	});

	const linea11Entrada = interpolate(frame, [22, 58], [1920, -480], {
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence name="Linea1" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#ec1144',
						top: '5px',

						left: `${linea1Entrada}px`,
					}}
				/>
			</Sequence>

			<Sequence name="Linea2" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#ac54c1',
						top: '105px',
						left: `${linea2Entrada}px`,
					}}
				/>
			</Sequence>
			<Sequence name="Linea3" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#7010b1',
						top: '205px',
						left: `${linea3Entrada}px`,
					}}
				/>
			</Sequence>
			<div>
				<Sequence name="Linea4" durationInFrames={duracion}>
					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#dd1180',
							top: '305px',
							left: `${linea4Entrada}px`,
						}}
					/>
				</Sequence>
			</div>
			<Sequence name="Linea5" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#4eb2e4',
						top: '405px',
						left: `${linea5Entrada}px`,
					}}
				/>
			</Sequence>
			<Sequence name="Linea6" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#f8e606',
						top: '505px',
						left: `${linea6Entrada}px`,
					}}
				/>
			</Sequence>
			<Sequence name="Linea7" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#4f8822',
						top: '605px',
						left: `${linea7Entrada}px`,
					}}
				/>
			</Sequence>
			<Sequence name="Linea8" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#79d20a',
						top: '705px',
						left: `${linea8Entrada}px`,
					}}
				/>
			</Sequence>
			<Sequence name="Linea9" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#fdffff',
						top: '805px',
						left: `${linea9Entrada}px`,
					}}
				/>
			</Sequence>
			<Sequence name="Linea10" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#fcb00b',
						top: '905px',
						left: `${linea10Entrada}px`,
					}}
				/>
			</Sequence>
			<Sequence name="Linea11" durationInFrames={duracion}>
				<AbsoluteFill
					style={{
						height: '70px',
						width: '3840px',
						background: '#ec1144',
						top: '1005px',
						left: `${linea11Entrada}px`,
					}}
				/>
			</Sequence>
		</div>
	);
};
