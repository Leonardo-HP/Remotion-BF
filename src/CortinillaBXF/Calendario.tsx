import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const Calendario: React.FC = () => {
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

	const rotacion = interpolate(frame, [0, 5], [0, -90], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusx = interpolate(frame, [0, 10], [0, 30], {
		extrapolateRight: 'clamp',
	});

	const escala = interpolate(frame, [0, 10], [1, 0.8], {
		extrapolateRight: 'clamp',
	});

	const heightHojas = interpolate(frame, [5,10 ], [0, 300], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusHojas = interpolate(frame, [0, 10], [0, 10], {
		extrapolateRight: 'clamp',
	});

  const ClipHeight = interpolate(frame, [5, 10], [0, 100], {
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
			<Sequence name="Calendario" durationInFrames={17}>
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
		
			<Sequence name="HojasCalendario" durationInFrames={17} from={5}>
				<AbsoluteFill
					style={{
						height: `${heightHojas}px`,
						width: '400px',
						border: '10px solid white',
						top: '430px',
						left: '751px',
						borderRadius: borderRadiusHojas,
					}}
				/>
			</Sequence>
      <Sequence name="ClipCalendario1" durationInFrames={17} from={5}>
				<AbsoluteFill
					style={{
						height: `${ClipHeight}px`,
						width: '50px',
						border: '10px solid white',
						top: '290px',
						left: '820px',
						borderRadius: '25px',
            background:'red'
					}}
				/>
			</Sequence>

      <Sequence name="ClipCalendario2" durationInFrames={17} from={5}>
				<AbsoluteFill
					style={{
						height: `${ClipHeight}px`,
						width: '50px',
						border: '10px solid white',
						top: '290px',
						left: '1020px',
						borderRadius: '25px',
            background:'red'
					}}
			/>
			</Sequence>



      <Sequence name="DiasCalendario" durationInFrames={17} from={5}>
				<AbsoluteFill
					style={{

           gridTemplateColumns:'repeat(4, 60px)',
						height: `${ClipHeight}px`,
						width: '50px',
						border: '10px solid white',
						top: '500px',
						left: '1020px',
						borderRadius: '25px',
            background:'red'
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
