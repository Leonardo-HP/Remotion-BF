import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

import { Texto } from './TextoLogo2';

export const TextoLogoBXF: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		frame,
		fps,
	});

	const opacity = interpolate(frame, [15, 16], [0, 1]);

	const escalaPeque = interpolate(frame, [84, 90], [1, 0], {
		extrapolateRight: 'clamp',
	});

	const escalaGrande = interpolate(frame, [198, 210], [0, 1.5], {
		extrapolateRight: 'clamp',
	});

	const escalaSalida = interpolate(frame, [210, 276], [1.5, 2], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Sequence name="aparece" durationInFrames={84}>
				<AbsoluteFill
					style={{
						opacity,
					}}
				>
			<Texto/>
				</AbsoluteFill>
			</Sequence>

			<Sequence name="escalaPeque" from={84}>
				<AbsoluteFill
					style={{
						transform: `scale(${escalaPeque})`,
					}}
				>
				<Texto/>
				</AbsoluteFill>
			</Sequence>

			<Sequence name="escalaGrande" from={198} durationInFrames={12}>
				<AbsoluteFill
					style={{
						transform: `scale(${escalaGrande})`,
					}}
				>
				<Texto/>
				</AbsoluteFill>
			</Sequence>

			<Sequence name="escalaSalida" from={210}>
				<AbsoluteFill
					style={{
						transform: `scale(${escalaSalida})`,
					}}
				>
				<Texto/>
				</AbsoluteFill>
			</Sequence>

		</>
	);
};
