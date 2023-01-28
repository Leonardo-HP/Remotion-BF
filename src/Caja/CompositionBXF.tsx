import {useVideoConfig, Sequence} from 'remotion/.';
import { CajaBXF } from '../CortinillaBXF/CajaBXF';
import { CajaRealBXF } from './Caja';
import { Factura } from './Factura';
import { FondoBXF } from './Fondo';


export const CompositionBXF = () => {
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
				long. By LeonardoHP
			</p>
      
<FondoBXF/>
<Factura/>
<CajaRealBXF/>


		</div>
	);
};
