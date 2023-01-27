import { Component } from 'react';
import {useVideoConfig, Sequence, Composition} from 'remotion/.';
import { Colores } from './Colores';
import { VueltaColores } from './VueltaColores';


export const CompositionArcoiris = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				background: 'black',
			
			}}
		>
			<br />

			<p
				style={{
					textAlign: 'center',
					fontSize: '2em',
					position: 'absolute',
					bottom: 0,
					right: 0,
					color: 'white',
				}}
			>
				this video is {width}x{height}px and {durationInFrames / fps} seconds
				long. By LeonardoHP
			</p>

			<Sequence name="VueltaColores" durationInFrames={60}>
				<VueltaColores/>
			</Sequence>
			
		</div>
	);
};
