import {
	useVideoConfig,
	useCurrentFrame,
	Sequence,
	interpolate,
} from 'remotion/.';
import {CuadroRojo} from './CuadroRojo';
import {France} from './France';
import {Rain} from './Rain';
import {RainDrop} from './RainDrop';
import {TextoLogoBXF} from './TextoLogoBXF';
import {CajaBXF} from './CajaBXF';
import {RotacionCaja} from './RotacionCaja';
import {SeparacionCaja} from './SeparacionCaja';
import {CuadroBlancoSalida} from './CuadroBlancoSalida';

export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = frame / durationInFrames;

	const left = interpolate(frame, [0, 10], [200, 800], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				background: 'red',
				color: 'white',
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
				long.
			</p>

			<Sequence name="cortinillaEntrada">
				<CuadroRojo />
			</Sequence>
			<Sequence name="PrimeraAnimacion" durationInFrames={134}>
				<TextoLogoBXF />
			</Sequence>
			<Sequence name="SegundaAnimacion" durationInFrames={25} from={35}>
				<CajaBXF />
			</Sequence>
			<Sequence name="terceraAnimacion" from={60} durationInFrames={25}>
				<RotacionCaja />
			</Sequence>

			<Sequence name="cuartaAnimacion" from={85} durationInFrames={25}>
				<SeparacionCaja />
			</Sequence>

			<Sequence name="cortinillaSalida" from={120} durationInFrames={25}>
				<CuadroBlancoSalida />
			</Sequence>
		</div>
	);
};
