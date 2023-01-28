import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
	random,
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



	const movimiento1 = interpolate(frame, [60,100], [-600, 900], {
		extrapolateRight: 'clamp',
	});


	const movimiento2 = interpolate(frame, [50, 80], [-600, 900], {
		extrapolateRight: 'clamp',
	});


	const movimiento3 = interpolate(frame, [60, 110], [-600, 900], {
		extrapolateRight: 'clamp',
	});


	const movimiento4 = interpolate(frame, [0, 40], [-600, 900], {
		extrapolateRight: 'clamp',
	});


	const movimiento5 = interpolate(frame, [40, 90], [-600, 900], {
		extrapolateRight: 'clamp',
	});


	const movimiento6 = interpolate(frame, [90, 120], [-600, 900], {
		extrapolateRight: 'clamp',
	});


	const movimiento7 = interpolate(frame, [20, 50], [-600, 900], {
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
top:movimiento1,
opacity:'0.2',
left:'-900px',
}}>
<Modelo/>
</AbsoluteFill>

<AbsoluteFill style={{
transform: 'scale(0.5)',
top:movimiento2,
left:'-600px',
opacity:'0.5',
}}>
<Modelo/>
</AbsoluteFill>

<AbsoluteFill style={{
transform: 'scale(0.5)',
top:movimiento3,
left:'-300px',
opacity:'0.4',
}}>
<Modelo/>
</AbsoluteFill>

<AbsoluteFill style={{
transform: 'scale(0.5)',
top:movimiento4,
left:'0px',
opacity:'0.3',
}}>
<Modelo/>
</AbsoluteFill>

<AbsoluteFill style={{
transform: 'scale(0.5)',
top:movimiento5,
left:'300px',
opacity:'0.1',
}}>
<Modelo/>
</AbsoluteFill>

<AbsoluteFill style={{
transform: 'scale(0.5)',
top:movimiento6,
left:'600px',
opacity:'0.3',
}}>
<Modelo/>
</AbsoluteFill>

<AbsoluteFill style={{
transform: 'scale(0.5)',
top:movimiento7,
left:'900px',
opacity:'0.2',
}}>
<Modelo/>
</AbsoluteFill>


<AbsoluteFill
					style={{
						height: '550px',
						width: '2200px',
						border: '10px solid white',
						top: '800px',
						left: '-150px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						borderRadius: '  200% 200% 0 0 '
					}}
				/>











			</Sequence>
		</>
	);
};
