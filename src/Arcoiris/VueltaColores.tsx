import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const VueltaColores: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		from: 0,
		to: 100,
		frame,
		fps,
		config: {
			mass: 10,
			stiffness: 20,
			damping: 100,
		},
	});
	const rotacionColores = interpolate(
		frame,
		[0, 20],
		[0, 90],

		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div>
			<Sequence name="Vuelta" durationInFrames={200}>
				<AbsoluteFill
					style={{
						transform: `rotate(${rotacionColores}deg)`,
					}}
				>
					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#ec1144',
							top: '5px',
							left: `-480px`,
						}}
					/>

					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#ac54c1',
							top: '105px',
							left: `-480pxpx`,
						}}
					/>

					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#7010b1',
							top: '205px',
							left: `-480pxpx`,
						}}
					/>

					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#dd1180',
							top: '305px',
							left: `-480px`,
						}}
					/>
					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#4eb2e4',
							top: '405px',
							left: `-480px`,
						}}
					/>
					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#f8e606',
							top: '505px',
							left: `-480px`,
						}}
					/>
					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#4f8822',
							top: '605px',
							left: `$-480px`,
						}}
					/>
					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#79d20a',
							top: '705px',
							left: `-480px`,
						}}
					/>
					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#fdffff',
							top: '805px',
							left: `-480px`,
						}}
					/>
					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#fcb00b',
							top: '905px',
							left: `-480px`,
						}}
					/>
					<AbsoluteFill
						style={{
							height: '70px',
							width: '3840px',
							background: '#ec1144',
							top: '1005px',
							left: `-480px`,
						}}
					/>
				</AbsoluteFill>
			</Sequence>
		</div>
	);
};
