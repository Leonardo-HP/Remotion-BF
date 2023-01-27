import {Composition} from 'remotion';
import { Colores } from './Arcoiris/Colores';
import { Factura } from './Caja/Factura';
import {Calendario} from './CortinillaBXF/Calendario';
import {Candado} from './CortinillaBXF/Candado';

import {MyComposition} from './CortinillaBXF/Composition';
import {Nube} from './CortinillaBXF/Nube';
import {Mark} from './Mark/Mark';
import { CompositionArcoiris } from './Arcoiris/CompositionArcoiris';
import { CajaRealBXF } from './Caja/Caja';
import { FondoBXF } from './Caja/Fondo';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Demo"
				component={MyComposition}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>

			<Composition
				id="Demo2"
				component={Mark}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>

			<Composition
				id="Candado"
				component={Candado}
				durationInFrames={31}
				fps={30}
				width={1920}
				height={1080}
			/>

			<Composition
				id="Nube"
				component={Nube}
				durationInFrames={31}
				fps={30}
				width={1920}
				height={1080}
			/>

			<Composition
				id="Calendario"
				component={Calendario}
				durationInFrames={31}
				fps={30}
				width={1920}
				height={1080}
			/>


<Composition
				id="Factura"
				component={Factura}
				durationInFrames={120}
				fps={30}
				width={1920}
				height={1080}
			/>
		<Composition
				id="Caja"
				component={CajaRealBXF}
				durationInFrames={120}
				fps={30}
				width={1920}
				height={1080}
			/>

<Composition
				id="FondoBXF"
				component={FondoBXF}
				durationInFrames={120}
				fps={30}
				width={1920}
				height={1080}
			/>


<Composition
				id="Colores"
				component={CompositionArcoiris}
				durationInFrames={50}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
