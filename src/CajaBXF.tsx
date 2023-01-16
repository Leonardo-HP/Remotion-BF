import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const CajaBXF: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		frame,
		fps,
	});

	const top = interpolate(frame, [0, 10], [1200, 280], {
		extrapolateRight: 'clamp',
	});

	const topTapa = interpolate(frame, [0, 20], [-1280, 280], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Sequence name="entraCaja">
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderBottom: '10px solid white',
						borderRight: '10px solid white',
						borderLeft: '10px solid white',
						top,
						left: '700px',
					}}
				/>
			</Sequence>

			<Sequence name="entraTapa">
				<AbsoluteFill
					style={{
						height: '500px',
						width: '500px',
						borderTop: '10px solid white',
						top: topTapa,
						left: '700px',
					}}
				/>
			</Sequence>
		</>
	);
};
