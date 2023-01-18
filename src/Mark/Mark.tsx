import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const Mark: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		from:0,
		to:100,
		frame,
		fps,
		config: {
			mass:10,
			stiffness: 80,
			damping:200,
		},
	});
	const left = interpolate(frame, [10, 90], [280, 1200], {
		extrapolateRight: 'clamp',
	});


	const borderRadius = interpolate(frame, [10, 90], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const rotacion = interpolate(frame, [0, 90], [0, -250], {
		extrapolateRight: 'clamp',
	});


	return (
		<>
			<Sequence name="Mark">
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						border: '10px solid white',
						borderRadius,
						transform: `rotate(${rotacion}deg)`,
						top:'280px',
						left,
					
					}}

				>
					
					<p style={{	color:'red',
				fontFamily: 'Arial',
				fontSize: '5em',
				textAlign: 'center',
				
				}}> Hi, im Mark the mark!
				</p>
				</AbsoluteFill>


			</Sequence>

	
		</>
	);
};
