import {Composition} from 'remotion';
import {BoxFacturaLogo} from './BoxFactura';
import {MyComposition} from './Composition';

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
		</>
	);
};
