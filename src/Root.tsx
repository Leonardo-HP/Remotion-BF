import {Composition} from 'remotion';
import { BoxFactura } from './BoxFactura';


import {Logo} from './HelloWorld/Logo';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition id="BoxFactura-Logo" component={BoxFactura}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
