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
	const left = interpolate(driver, [10, 90], [280, 1200], {
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
						top:'280px',
						left,
					}}

				/>
			</Sequence>

	
		</>
	);
};
