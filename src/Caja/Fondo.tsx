import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';


import { Modelo } from './ModeloFactura';


export const FondoBXF: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		from: 0,
		to: 15,
		frame,
		fps,
		config: {
			mass: 10,
			stiffness: 80,
			damping: 200,
		},
	});

	const movimiento = interpolate(frame, [0, 120], [-600, 900], {
		extrapolateRight: 'clamp',
	});

	/// ///'linear-gradient(45deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)'/////////
	return (
		<>
			<Sequence name="CajaBXF">
				<AbsoluteFill
					style={{
            width:1920,
            height:1080,
            background:'#01152f'
					}}
				/>



<AbsoluteFill style={{
transform: 'scale(0.5)',
top:movimiento,

opacity:'0.5',

}}>
<Modelo/>

</AbsoluteFill>



			</Sequence>
		</>
	);
};
