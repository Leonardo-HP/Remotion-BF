import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const Nube: React.FC = () => {
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

	const borderRadiusx = interpolate(frame, [0, 5], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const escala = interpolate(frame, [0, 5], [1, 0.7], {
		extrapolateRight: 'clamp',
	});

	const borderLeftCirculo1 = interpolate(frame, [5, 10], [10, 5], {
		extrapolateRight: 'clamp',
	});

	const borderTopCirculo1 = interpolate(frame, [5, 10], [10, 0], {
		extrapolateRight: 'clamp',
	});

	const borderTopRightRadius1 = interpolate(frame, [5, 10], [250, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaCirulo1 = interpolate(frame, [5, 10], [0.7, 0.3], {
		extrapolateRight: 'clamp',
	});

	const topCirculo1 = interpolate(frame, [5, 10], [280, 379], {
		extrapolateRight: 'clamp',
	});

	const leftCirculo1 = interpolate(frame, [5, 10], [700, 480], {
		extrapolateRight: 'clamp',
	});

	const borderLeftCirculo2 = interpolate(frame, [5, 10], [10, 0], {
		extrapolateRight: 'clamp',
	});

	const borderTopCirculo2 = interpolate(frame, [5, 10], [10, 0], {
		extrapolateRight: 'clamp',
	});

	const borderTopRightRadius2 = interpolate(frame, [5, 10], [250, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaCirulo2 = interpolate(frame, [5, 10], [0.7, 0.23], {
		extrapolateRight: 'clamp',
	});

	const topCirculo2 = interpolate(frame, [5, 10], [280, 300], {
		extrapolateRight: 'clamp',
	});

	const leftCirculo2 = interpolate(frame, [5, 10], [700, 570], {
		extrapolateRight: 'clamp',
	});

	const borderLeftCirculo3 = interpolate(frame, [5, 10], [10, 0], {
		extrapolateRight: 'clamp',
	});

	const borderTopCirculo3 = interpolate(frame, [5, 10], [10, 0], {
		extrapolateRight: 'clamp',
	});

	const borderTopRightRadius3 = interpolate(frame, [5, 10], [250, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaCirulo3 = interpolate(frame, [5, 10], [0.7, 0.45], {
		extrapolateRight: 'clamp',
	});

	const topCirculo3 = interpolate(frame, [5, 10], [280, 260], {
		extrapolateRight: 'clamp',
	});

	const leftCirculo3 = interpolate(frame, [5, 10], [700, 730], {
		extrapolateRight: 'clamp',
	});

	const borderLeftCirculo4 = interpolate(frame, [5, 10], [10, 0], {
		extrapolateRight: 'clamp',
	});

	const borderTopCirculo4 = interpolate(frame, [5, 10], [10, 7], {
		extrapolateRight: 'clamp',
	});

	const borderTopRightRadius4 = interpolate(frame, [5, 10], [250, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaCirulo4 = interpolate(frame, [5, 10], [0.7, 0.3], {
		extrapolateRight: 'clamp',
	});

	const topCirculo4 = interpolate(frame, [5, 10], [280, 379], {
		extrapolateRight: 'clamp',
	});

	const leftCirculo4 = interpolate(frame, [5, 10], [700, 873], {
		extrapolateRight: 'clamp',
	});

	const opacity = interpolate(frame, [5, 10], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusxBase = interpolate(frame, [5, 10], [250, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaBase = interpolate(frame, [0, 10], [1, 0.7], {
		extrapolateRight: 'clamp',
	});

	/// regreso-----------------------------------------------------

	const rotacionRegreso = interpolate(frame, [22, 30], [0, 90], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusxRegreso = interpolate(frame, [22, 30], [250, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaRegreso = interpolate(frame, [22, 30], [0.7, 1], {
		extrapolateRight: 'clamp',
	});

	const borderLeftCirculo1Regreso = interpolate(frame, [17, 22], [0, 5], {
		extrapolateRight: 'clamp',
	});

	const borderTopCirculo1Regreso = interpolate(frame, [17, 22], [0, 10], {
		extrapolateRight: 'clamp',
	});

	const borderTopRightRadius1Regreso = interpolate(frame, [17, 22], [400, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaCirulo1Regreso = interpolate(frame, [17, 22], [0.3, 0.3], {
		extrapolateRight: 'clamp',
	});

	const topCirculo1Regreso = interpolate(frame, [17, 22], [379, 280], {
		extrapolateRight: 'clamp',
	});

	const leftCirculo1Regreso = interpolate(frame, [17, 22], [480, 700], {
		extrapolateRight: 'clamp',
	});

	const borderLeftCirculo2Regreso = interpolate(frame, [17, 22], [0, 10], {
		extrapolateRight: 'clamp',
	});

	const borderTopCirculo2Regreso = interpolate(frame, [17, 22], [0, 10], {
		extrapolateRight: 'clamp',
	});

	const borderTopRightRadius2Regreso = interpolate(frame, [17, 22], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const escalaCirulo2Regreso = interpolate(frame, [17, 22], [0.23, 0.7], {
		extrapolateRight: 'clamp',
	});

	const topCirculo2Regreso = interpolate(frame, [17, 22], [300, 280], {
		extrapolateRight: 'clamp',
	});

	const leftCirculo2Regreso = interpolate(frame, [17, 22], [570, 700], {
		extrapolateRight: 'clamp',
	});

	const borderLeftCirculo3Regreso = interpolate(frame, [17, 22], [0, 10], {
		extrapolateRight: 'clamp',
	});

	const borderTopCirculo3Regreso = interpolate(frame, [17, 22], [0, 10], {
		extrapolateRight: 'clamp',
	});

	const borderTopRightRadius3Regreso = interpolate(frame, [17, 22], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const escalaCirulo3Regreso = interpolate(frame, [17, 22], [0.45, 0.7], {
		extrapolateRight: 'clamp',
	});

	const topCirculo3Regreso = interpolate(frame, [17, 22], [260, 280], {
		extrapolateRight: 'clamp',
	});

	const leftCirculo3Regreso = interpolate(frame, [17, 22], [730, 700], {
		extrapolateRight: 'clamp',
	});

	const borderLeftCirculo4Regreso = interpolate(frame, [17, 22], [0, 10], {
		extrapolateRight: 'clamp',
	});

	const borderTopCirculo4Regreso = interpolate(frame, [17, 22], [7, 10], {
		extrapolateRight: 'clamp',
	});

	const borderTopRightRadius4Regreso = interpolate(frame, [17, 22], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const escalaCirulo4Regreso = interpolate(frame, [17, 22], [0.3, 0.7], {
		extrapolateRight: 'clamp',
	});

	const topCirculo4Regreso = interpolate(frame, [17, 22], [379, 280], {
		extrapolateRight: 'clamp',
	});

	const leftCirculo4Regreso = interpolate(frame, [17, 22], [873, 700], {
		extrapolateRight: 'clamp',
	});

	const opacityRegreso = interpolate(frame, [17, 22], [1, 1], {
		extrapolateRight: 'clamp',
	});

	const borradorHeightRegreso = interpolate(frame, [17, 22], [66, 350], {
		extrapolateRight: 'clamp',
	});

	const borradorRadioRegreso = interpolate(frame, [17, 22], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const borradorWidhtRegreso = interpolate(frame, [17, 22], [180, 180], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusxBaseRegreso = interpolate(frame, [17, 22], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const escalaBaseRegreso = interpolate(frame, [17, 22], [0.7, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Sequence name="CajaCirculo" durationInFrames={5}>
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

			<Sequence name="Circulo1" durationInFrames={12} from={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: `${borderTopCirculo1}px solid white`,
						borderLeft: `${borderLeftCirculo1}px solid white`,
						borderRight: '10px solid white',
						borderBottom: '10px solid white',
						top: topCirculo1,
						left: leftCirculo1,
						transform: `rotate(90deg) scale(${escalaCirulo1})`,
						borderRadius: borderRadiusx,
						borderTopRightRadius: borderTopRightRadius1,
						background: 'red',
					}}
				/>
			</Sequence>
			<Sequence name="Circulo2" durationInFrames={12} from={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: `${borderTopCirculo2}px solid white`,
						borderLeft: `10px solid white`,
						borderRight: `${borderLeftCirculo2}px solid white`,
						borderBottom: '3px solid white',
						top: topCirculo2,
						left: leftCirculo2,
						transform: `rotate(110deg) scale(${escalaCirulo2})`,
						borderRadius: borderRadiusx,
						borderTopRightRadius: borderTopRightRadius2,
						background: 'red',
					}}
				/>
			</Sequence>
			<Sequence name="Circulo3" durationInFrames={12} from={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: `${borderTopCirculo3}px solid white`,
						borderLeft: `10px solid white`,
						borderRight: `${borderLeftCirculo3}px solid white`,
						borderBottom: '10px solid white',
						top: topCirculo3,
						left: leftCirculo3,
						transform: `rotate(148deg) scale(${escalaCirulo3})`,
						borderRadius: borderRadiusx,
						borderTopRightRadius: borderTopRightRadius3,

						background: 'red',
					}}
				/>
			</Sequence>
			<Sequence name="Circulo4" durationInFrames={12} from={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: `${borderTopCirculo4}px solid white`,
						borderLeft: `10px solid white`,
						borderRight: `${borderLeftCirculo4}px solid white`,
						borderBottom: '20px  solid white',
						top: topCirculo4,
						left: leftCirculo4,
						transform: `rotate(180deg) scale(${escalaCirulo4})`,
						borderRadius: borderRadiusx,
						borderTopRightRadius: borderTopRightRadius4,
						background: 'red',
					}}
				/>
			</Sequence>

			<Sequence name="borrador" durationInFrames={17}>
				<AbsoluteFill
					style={{
						height: '66px',
						width: '180px',
						background: 'red',
						top: '533px',
						left: '760px',
						transform: ` rotate(157deg)`,
						opacity,
					}}
				/>
			</Sequence>

			<Sequence name="Base" durationInFrames={12} from={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderBottom: '3px solid white',
						top: '279px',
						left: '700px',
						transform: ` scale(${escalaBase})`,
						borderRadius: borderRadiusxBase,
					}}
				/>
			</Sequence>

			<Sequence name="CajaCirculoRegreso" from={22}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						border: '10px solid white',
						top: '280px',
						left: '700px',
						transform: `rotate(${rotacionRegreso}deg) scale(${escalaRegreso})`,
						borderRadius: borderRadiusxRegreso,
						background: 'red',
					}}
				/>
			</Sequence>

			<Sequence name="Circulo1Regreso" from={17} durationInFrames={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: `${borderTopCirculo1Regreso}px solid white`,
						borderLeft: `${borderLeftCirculo1Regreso}px solid white`,
						borderRight: '10px solid white',
						borderBottom: '10px solid white',
						top: topCirculo1Regreso,
						left: leftCirculo1Regreso,
						transform: `rotate(${rotacionRegreso}deg) scale(${escalaCirulo1Regreso})`,
						borderRadius: borderRadiusxRegreso,
						borderTopRightRadius: borderTopRightRadius1Regreso,
						background: 'red',
					}}
				/>
			</Sequence>
			<Sequence name="Circulo2Regreso" from={17} durationInFrames={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: `${borderTopCirculo2Regreso}px solid white`,
						borderLeft: `10px solid white`,
						borderRight: `${borderLeftCirculo2Regreso}px solid white`,
						borderBottom: '3px solid white',
						top: topCirculo2Regreso,
						left: leftCirculo2Regreso,
						transform: `rotate(110deg) scale(${escalaCirulo2Regreso})`,
						borderRadius: borderRadiusxRegreso,
						borderTopRightRadius: borderTopRightRadius2Regreso,
						background: 'red',
					}}
				/>
			</Sequence>
			<Sequence name="Circulo3Regreso" from={17} durationInFrames={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: `${borderTopCirculo3Regreso}px solid white`,
						borderLeft: `10px solid white`,
						borderRight: `${borderLeftCirculo3Regreso}px solid white`,
						borderBottom: '10px solid white',
						top: topCirculo3Regreso,
						left: leftCirculo3Regreso,
						transform: `rotate(148deg) scale(${escalaCirulo3Regreso})`,
						borderRadius: borderRadiusxRegreso,
						borderTopRightRadius: borderTopRightRadius3Regreso,
						background: 'red',
					}}
				/>
			</Sequence>
			<Sequence name="Circulo4Regreso" from={17} durationInFrames={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: `${borderTopCirculo4Regreso}px solid white`,
						borderLeft: `10px solid white`,
						borderRight: `${borderLeftCirculo4Regreso}px solid white`,
						borderBottom: '20px  solid white',
						top: topCirculo4Regreso,
						left: leftCirculo4Regreso,
						transform: `rotate(180deg) scale(${escalaCirulo4Regreso})`,
						borderRadius: borderRadiusxRegreso,
						borderTopRightRadius: borderTopRightRadius4Regreso,
						background: 'red',
					}}
				/>
			</Sequence>

			<Sequence name="borradorRegreso" from={17} durationInFrames={5}>
				<AbsoluteFill
					style={{
						height: `${borradorHeightRegreso}px`,
						width: `${borradorWidhtRegreso}px`,
						background: 'red',
						top: '533px',
						left: '760px',
						transform: `rotate(157deg)`,
						opacity: opacityRegreso,
						borderRadius: borradorRadioRegreso,
					}}
				/>
			</Sequence>

			<Sequence name="BaseRegreso" from={17} durationInFrames={5}>
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderBottom: '3px solid white',
						top: '279px',
						left: '700px',
						transform: ` scale(${escalaBaseRegreso})`,
						borderRadius: borderRadiusxBaseRegreso,
						opacity: opacityRegreso,
					}}
				/>
			</Sequence>
		</>
	);
};
