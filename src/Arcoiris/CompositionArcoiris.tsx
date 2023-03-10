import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
} from 'remotion/.';
import {BolaBlanca} from './BolaBlanca';
import {CirculoColores} from './CirculoColores';
import {Colores} from './Colores';
import {MovimientoCirculo} from './MovimientoCirculo';
import {SalidaColores} from './SalidaColores';
import {SeparacionColores} from './SeparacionColores';
import {VueltaColores} from './VueltaColores';

export const CompositionArcoiris = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
			}}
		>
			<br />

			<p
				style={{
					textAlign: 'center',
					fontSize: '2em',
					position: 'absolute',
					bottom: 0,
					right: 0,
					color: 'white',
				}}
			>
				this video is {width}x{height}px and {durationInFrames / fps} seconds
				long. By LeonardoHP
			</p>

			<Sequence name="ColoresEntrada" durationInFrames={60}>
				<Colores />
			</Sequence>

			<Sequence name="ColoresVuelta" from={60} durationInFrames={30}>
				<VueltaColores />
			</Sequence>

			<Sequence name="SalidaColores" from={90} durationInFrames={40}>
				<SalidaColores />
			</Sequence>

			<Sequence name="SeparacionColores" from={130} durationInFrames={70}>
				<SeparacionColores />
			</Sequence>

			<Sequence name="CirculoColores" from={160} durationInFrames={170}>
				<MovimientoCirculo />
			</Sequence>

			<Sequence name="CirculoColores" from={400} durationInFrames={400}>
				<BolaBlanca />
			</Sequence>

			<AbsoluteFill>
				<Audio src={staticFile('New Project.mp3')} />
			</AbsoluteFill>
		</div>
	);
};
