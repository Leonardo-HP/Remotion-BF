import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const Candado: React.FC = () => {
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

	const rotacion = interpolate(frame, [0, 10], [0, -90], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusx = interpolate(frame, [0, 10], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const escala = interpolate(frame, [0, 10], [1, 0.7], {
		extrapolateRight: 'clamp',
	});

	const escalaPad = interpolate(frame, [0, 10], [1, 0.5], {
		extrapolateRight: 'clamp',
	});

	const heightPad = interpolate(frame, [0, 10], [0, 188], {
		extrapolateRight: 'clamp',
	});

	const widhtPad = interpolate(frame, [0, 10], [0, 188], {
		extrapolateRight: 'clamp',
	});

	const positionb = interpolate(frame, [0, 10], [960, 856], {
		extrapolateRight: 'clamp',
	});

	const opacity = interpolate(frame, [0, 10], [0, 1], {
		extrapolateRight: 'clamp',
	});

/// regreso-----------------------------------------------------


	const rotacionRegreso = interpolate(frame, [17, 30], [-90, 0], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusxRegreso = interpolate(frame, [17, 30], [250, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaRegreso = interpolate(frame, [17, 30], [0.7, 1], {
		extrapolateRight: 'clamp',
	});

	const escalaPadRegreso = interpolate(frame, [17, 30], [0.5, 1], {
		extrapolateRight: 'clamp',
	});

	const heightPadRegreso = interpolate(frame, [17, 30], [188, 0], {
		extrapolateRight: 'clamp',
	});

	const widhtPadRegreso = interpolate(frame, [17, 30], [188, 0], {
		extrapolateRight: 'clamp',
	});

	const positionbRegreso = interpolate(frame, [17, 30], [856, 960], {
		extrapolateRight: 'clamp',
	});

	const opacityRegreso = interpolate(frame, [17, 30], [1, 0], {
		extrapolateRight: 'clamp',
	});
/// //////////////////////////////////////////////////////////////






	return (
		<>
			<Sequence name="CajaCandado" durationInFrames={17}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						border: '10px solid white',
						top: '280px',
						left: '700px',
						transform: `rotate(${rotacion}deg) scale(${escala})`,
						borderRadius: borderRadiusx,
					}}
				/>
			</Sequence>
			<Sequence name="BrazoCandado" durationInFrames={17}>
				<AbsoluteFill
					style={{
						height: `${heightPad}px`,
						width: `${widhtPad}px`,
						borderTop: '10px solid white',
						borderRight: '10px solid white',
						borderLeft: '10px solid white',
						top: '196px',
						left: `${positionb}px`,
						borderRadius: '200px 200px 0 0 ',
						opacity,
					}}
				/>
			</Sequence>
			<Sequence name="PadCandado" durationInFrames={17}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						border: '10px solid white',
						top: '280px',
						left: '700px',
						transform: `rotate(${rotacion}deg) scale(${escalaPad})`,
						borderRadius: borderRadiusx,
					}}
				/>
			</Sequence>







      <Sequence name="CajaCandadoRegreso" from={17}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						border: '10px solid white',
						top: '280px',
						left: '700px',
						transform: `rotate(${rotacionRegreso}deg) scale(${escalaRegreso})`,
						borderRadius: borderRadiusxRegreso,
					}}
				/>
			</Sequence>
			<Sequence name="BrazoCandadoRegreso" from={17}>
				<AbsoluteFill
					style={{
						height: `${heightPadRegreso}px`,
						width: `${widhtPadRegreso}px`,
						borderTop: '10px solid white',
						borderRight: '10px solid white',
						borderLeft: '10px solid white',
						top: '196px',
						left: `${positionbRegreso}px`,
						borderRadius: '200px 200px 0 0 ',
						opacity:opacityRegreso,
					}}
				/>
			</Sequence>
			<Sequence name="PadCandadoRegreso" from={17}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						border: '10px solid white',
						top: '280px',
						left: '700px',
						transform: `rotate(${rotacionRegreso}deg) scale(${escalaPadRegreso})`,
						borderRadius: borderRadiusxRegreso,
					}}
				/>
			</Sequence>

















		</>
	);
};
