import {Composition} from 'remotion';
import { Candado } from './CortinillaBXF/Candado';

import {MyComposition} from './CortinillaBXF/Composition';
import { Nube } from './CortinillaBXF/Nube';
import { Mark } from './Mark/Mark';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Demo"
				component={MyComposition}
				durationInFrames={150}
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


		</>
	);
};
