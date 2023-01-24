import {useVideoConfig, Sequence} from 'remotion/.';
import {CuadroRojo} from './CuadroRojo';

import {TextoLogoBXF} from './TextoLogoBXF';
import {CajaBXF} from './CajaBXF';
import {RotacionCaja} from './RotacionCaja';
import {SeparacionCaja} from './SeparacionCaja';
import {CuadroBlancoSalida} from './CuadroBlancoSalida';
import { Nube } from './Nube';
import { Candado } from './Candado';
import { Calendario } from './Calendario';

export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

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
				By LeonardoHP
			</p>

			<Sequence name="cortinillaEntrada">
				<CuadroRojo />
			</Sequence>
			<Sequence name="PrimeraAnimacion" durationInFrames={278}>
				<TextoLogoBXF />
			</Sequence>
			<Sequence name="SegundaAnimacion" durationInFrames={25} from={35}>
				<CajaBXF />
			</Sequence>
			<Sequence name="terceraAnimacion" from={60} durationInFrames={35}>
				<RotacionCaja />
			</Sequence>

			<Sequence name="primeraTransformacion" from={95} durationInFrames={30}>
				<Candado/>
			</Sequence>
			<Sequence name="segundaTransformacion" from={125} durationInFrames={30}>
				<Nube/>
			</Sequence>
			<Sequence name="terceraTransformacion" from={155} durationInFrames={45}>
				<Calendario/>
			</Sequence>







			<Sequence name="cuartaAnimacion" from={200} durationInFrames={20}>
				<SeparacionCaja />
			</Sequence>

			<Sequence name="cortinillaSalida" from={264} durationInFrames={25}>
				<CuadroBlancoSalida />
			</Sequence>
		

		</div>
	);
};
