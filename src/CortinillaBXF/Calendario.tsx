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

	const rotacion = interpolate(frame, [0, 5], [0, 90], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusx = interpolate(frame, [0, 10], [0, 30], {
		extrapolateRight: 'clamp',
	});

	const escala = interpolate(frame, [0, 10], [1, 0.8], {
		extrapolateRight: 'clamp',
	});

	const heightHojas = interpolate(frame, [5, 10], [0, 305], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusHojas = interpolate(frame, [0, 10], [0, 10], {
		extrapolateRight: 'clamp',
	});

	const ClipHeight = interpolate(frame, [5, 10], [0, 100], {
		extrapolateRight: 'clamp',
	});

	const hojaHeight = interpolate(frame, [5, 10], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const diasHeight = interpolate(frame, [7, 10], [0, 75], {
		extrapolateRight: 'clamp',
	});

	const diasHeight2 = interpolate(frame, [8, 11], [-5, 75], {
		extrapolateRight: 'clamp',
	});

	const diasHeight3 = interpolate(frame, [10, 13], [0, 75], {
		extrapolateRight: 'clamp',
	});

	const diasOpacity = interpolate(frame, [5, 10], [0, 1], {
		extrapolateRight: 'clamp',
	});

	/// regreso-----------------------------------------------------

	const rotacionRegreso = interpolate(frame, [25, 30], [0, -90], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusxRegreso = interpolate(frame, [25, 30], [30, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaRegreso = interpolate(frame, [25, 30], [0.8, 1], {
		extrapolateRight: 'clamp',
	});

	const heightHojasRegreso = interpolate(frame, [17, 22], [305, 0], {
		extrapolateRight: 'clamp',
	});

	const borderRadiusHojasRegreso = interpolate(frame, [17, 27], [10, 0], {
		extrapolateRight: 'clamp',
	});

	const ClipHeightRegreso = interpolate(frame, [17, 27], [100, 0], {
		extrapolateRight: 'clamp',
	});

	const hojaHeightRegreso = interpolate(frame, [17, 27], [250, 0], {
		extrapolateRight: 'clamp',
	});

	const diasHeightRegreso = interpolate(frame, [19, 21], [45, 0], {
		extrapolateRight: 'clamp',
	});

	const diasHeight2Regreso = interpolate(frame, [18, 20], [49, -5], {
		extrapolateRight: 'clamp',
	});

	const diasHeight3Regreso = interpolate(frame, [17, 19], [75, 0], {
		extrapolateRight: 'clamp',
	});

	const diasOpacityRegreso = interpolate(frame, [17, 22], [1, 0], {
		extrapolateRight: 'clamp',
	});
	/// //////////////////////////////////////////////////////////////

	return (
		<>
			<Sequence name="Calendario" durationInFrames={25}>
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

			<Sequence name="HojasCalendario" durationInFrames={12} from={5}>
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
			<Sequence name="ClipCalendario1" durationInFrames={12} from={5}>
				<AbsoluteFill
					style={{
						height: `${ClipHeight}px`,
						width: '50px',
						border: '10px solid white',
						top: '290px',
						left: '820px',
						borderRadius: '25px',
						background: 'red',
					}}
				/>
			</Sequence>

			<Sequence name="ClipCalendario2" durationInFrames={12} from={5}>
				<AbsoluteFill
					style={{
						height: `${ClipHeight}px`,
						width: '50px',
						border: '10px solid white',
						top: '290px',
						left: '1020px',
						borderRadius: '25px',
						background: 'red',
					}}
				/>
			</Sequence>

			<Sequence name="hojaCalendario" durationInFrames={12} from={5}>
				<AbsoluteFill
					style={{
						height: `${hojaHeight}px`,
						width: '376px',
						top: '440px',
						left: '774px',
						borderRadius: '0px',
						display: 'inline-Block',
						alignItems: 'center',
						padding: '4px',
					}}
				>
					<div
						className="small1"
						style={{
							display: 'inline-block',
							border: '0px solid white',
							margin: '6px',
							height: `${diasHeight}px`,
							width: '75px',
							opacity: diasOpacity,
						}}
					/>
					<div
						className="small2"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>
					<div
						className="small3"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>
					<div
						className="small4"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>

					<div
						className="small5"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight2}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>
					<div
						className="small6"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight2}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>
					<div
						className="small7"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight2}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>
					<div
						className="small8"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight2}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>
					<div
						className="small9"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight3}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>

					<div
						className="small10"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight3}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>
					<div
						className="small11"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight3}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacity,
						}}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence name="CalendarioRegreso" from={25}>
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

			<Sequence name="HojasCalendarioRegreso" durationInFrames={8} from={17}>
				<AbsoluteFill
					style={{
						height: `${heightHojasRegreso}px`,
						width: '400px',
						border: '10px solid white',
						top: '430px',
						left: '751px',
						borderRadius: borderRadiusHojasRegreso,
					}}
				/>
			</Sequence>
			<Sequence name="ClipCalendario1Regreso" durationInFrames={8} from={17}>
				<AbsoluteFill
					style={{
						height: `${ClipHeightRegreso}px`,
						width: '50px',
						border: '10px solid white',
						top: '290px',
						left: '820px',
						borderRadius: '25px',
						background: 'red',
					}}
				/>
			</Sequence>

			<Sequence name="ClipCalendario2Regreso" durationInFrames={8} from={17}>
				<AbsoluteFill
					style={{
						height: `${ClipHeightRegreso}px`,
						width: '50px',
						border: '10px solid white',
						top: '290px',
						left: '1020px',
						borderRadius: '25px',
						background: 'red',
					}}
				/>
			</Sequence>

			<Sequence name="hojaCalendarioRegreso" durationInFrames={8} from={17}>
				<AbsoluteFill
					style={{
						height: `${hojaHeightRegreso}px`,
						width: '376px',
						top: '440px',
						left: '774px',
						borderRadius: '0px',
						display: 'inline-Block',
						alignItems: 'center',
						padding: '4px',
					}}
				>
					<div
						className="small1Regreso"
						style={{
							display: 'inline-block',
							border: '0px solid white',
							margin: '6px',
							height: `${diasHeightRegreso}px`,
							width: '75px',
							opacity: diasOpacityRegreso,
						}}
					/>
					<div
						className="small2Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeightRegreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>
					<div
						className="small3Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeightRegreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>
					<div
						className="small4Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeightRegreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>

					<div
						className="small5Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight2Regreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>
					<div
						className="small6Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight2Regreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>
					<div
						className="small7Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight2Regreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>
					<div
						className="small8Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight2Regreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>
					<div
						className="small9Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight3Regreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>

					<div
						className="small10Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight3Regreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>
					<div
						className="small11Regreso"
						style={{
							display: 'inline-block',
							border: '2px solid white',
							margin: '6px',
							height: `${diasHeight3Regreso}px`,
							width: '75px',
							background: 'white',
							opacity: diasOpacityRegreso,
						}}
					/>
				</AbsoluteFill>
			</Sequence>
		</>
	);
};
