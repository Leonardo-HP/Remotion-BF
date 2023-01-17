import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const TextoLogoBXF: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		frame,
		fps,
	});

	const opacity = interpolate(frame, [15, 16], [0, 1]);

	const escala = interpolate(frame, [84, 90], [1, 2], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Sequence name="aparece" durationInFrames={84}>
				<AbsoluteFill
					style={{
						fontFamily: 'Arial',
						fontSize: '7em',
						textAlign: 'center',
						padding: '400px ',
						opacity,
					}}
				>
					BOX
					<br />
					factura
				</AbsoluteFill>
			</Sequence>

			<Sequence name="escala" from={84}>
				<AbsoluteFill
					style={{
						fontFamily: 'Arial',
						fontSize: '7em',
						textAlign: 'center',
						padding: '400px ',
						transform: `scale(${escala})`,
					}}
				>
					BOX
					<br />
					factura
				</AbsoluteFill>
			</Sequence>
		</>
	);
};
