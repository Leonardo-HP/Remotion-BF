import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
	interpolateColors,
} from 'remotion';

export const SeparacionColores: React.FC = () => {
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

	const widthX1 = interpolate(frame, [0, 20], [70, 0], {
		extrapolateRight: 'clamp',
	});

	const widthX2 = interpolate(frame, [10, 30], [70, 0], {
		extrapolateRight: 'clamp',
	});


	const widthX3 = interpolate(frame, [20, 40], [70, 0], {
		extrapolateRight: 'clamp',
	});

	const widthX4 = interpolate(frame, [30, 50], [70, 0], {
		extrapolateRight: 'clamp',
	});

	const widthX5 = interpolate(frame, [40, 60], [70, 0], {
		extrapolateRight: 'clamp',
	});

	const widthX6 = interpolate(frame, [50,70], [70, 0], {
		extrapolateRight: 'clamp',
	});



	const amarilloIzquierda1 = interpolate(frame, [0, 20], [520, 0], {
		extrapolateRight: 'clamp',
	});
	const amarilloDerecha1 = interpolate(frame, [0, 20], [520, 600], {
		extrapolateRight: 'clamp',
	});

	const moradoIzquierda1 = interpolate(frame, [0, 20], [1325, 950], {
		extrapolateRight: 'clamp',
	});

	const moradoDerecha1 = interpolate(frame, [0, 20], [1325, 1920], {
		extrapolateRight: 'clamp',
	});



	const amarilloIzquierda2 = interpolate(frame, [10, 30], [530, 0], {
		extrapolateRight: 'clamp',
	});
	const amarilloDerecha2 = interpolate(frame, [10, 30], [530, 850], {
		extrapolateRight: 'clamp',
	});

	const moradoIzquierda2 = interpolate(frame, [10, 30], [1325, 950], {
		extrapolateRight: 'clamp',
	});

	const moradoDerecha2 = interpolate(frame, [10, 30], [1325, 1920], {
		extrapolateRight: 'clamp',
	});

	




	const amarilloIzquierda3 = interpolate(frame, [20, 40], [530, 0], {
		extrapolateRight: 'clamp',
	});
	const amarilloDerecha3 = interpolate(frame, [20, 40], [530, 850], {
		extrapolateRight: 'clamp',
	});

	const moradoIzquierda3 = interpolate(frame, [20, 40], [1325, 950], {
		extrapolateRight: 'clamp',
	});

	const moradoDerecha3 = interpolate(frame, [20, 40], [1325, 1920], {
		extrapolateRight: 'clamp',
	});



	const amarilloIzquierda4 = interpolate(frame, [30, 50], [520, 0], {
		extrapolateRight: 'clamp',
	});
	const amarilloDerecha4 = interpolate(frame,[30, 50], [520, 850], {
		extrapolateRight: 'clamp',
	});

	const moradoIzquierda4 = interpolate(frame, [30, 50], [1325, 950], {
		extrapolateRight: 'clamp',
	});

	const moradoDerecha4 = interpolate(frame, [30, 50], [1325, 1920], {
		extrapolateRight: 'clamp',
	});




	const amarilloIzquierda5 = interpolate(frame, [40, 60], [520, 0], {
		extrapolateRight: 'clamp',
	});
	const amarilloDerecha5 = interpolate(frame, [40, 60], [520, 850], {
		extrapolateRight: 'clamp',
	});

	const moradoIzquierda5 = interpolate(frame, [40, 60], [1325, 950], {
		extrapolateRight: 'clamp',
	});

	const moradoDerecha5 = interpolate(frame, [40, 60], [1325, 1920], {
		extrapolateRight: 'clamp',
	});






	const amarilloIzquierda6 = interpolate(frame, [50, 70], [520, 0], {
		extrapolateRight: 'clamp',
	});
	const amarilloDerecha6 = interpolate(frame, [50, 70], [520, 850], {
		extrapolateRight: 'clamp',
	});

	const moradoIzquierda6 = interpolate(frame, [50, 70], [1325, 950], {
		extrapolateRight: 'clamp',
	});

	const moradoDerecha6 = interpolate(frame, [50, 70], [1325, 1920], {
		extrapolateRight: 'clamp',
	});













	/// ////////////

	const colorAmarillo1 = interpolateColors(
		frame,
		[0, 20],
		['#fcb00b', '#7010b1']
	);

	const colorMorado1 = interpolateColors(
		frame,
		[0, 20],
		['#ac54c1', '#dd1180']
	);

	const colorAmarillo2 = interpolateColors(
		frame,
		[10, 30],
		['#fcb00b', '#4eb2e4']
	);

	const colorMorado2 = interpolateColors(
		frame,
		[10, 30],
		['#ac54c1', '#f8e606']
	);

	const colorAmarillo3 = interpolateColors(
		frame,
		[20, 40],
		['#fcb00b', '#4f8822']
	);

	const colorMorado3 = interpolateColors(
		frame,
		[20, 40],
		['#ac54c1', '#79d20a']
	);

	const colorAmarillo4 = interpolateColors(
		frame,
		[30, 50],
		['#fcb00b', '#fdffff']
	);

	const colorMorado4 = interpolateColors(
		frame,
		[30, 50],
		['#ac54c1', '#7010b1']
	);

	const colorAmarillo5 = interpolateColors(
		frame,
		[40, 60],
		['#fcb00b', '#dd1180']
	);

	const colorMorado5 = interpolateColors(
		frame,
		[40, 60],
		['#ac54c1', '#4eb2e4']
	);

	const colorAmarillo6 = interpolateColors(
		frame,
		[50, 70],
		['#fcb00b', '#f8e606']
	);

	const colorMorado6 = interpolateColors(
		frame,
		[50, 70],
		['#ac54c1', '#4f8822']
	);

	return (
		<div>
		<Sequence durationInFrames={50}>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: '70px',
						background: '#fcb00b',
						top: '0px',
						left: `525px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: '70px',
						background: '#ac54c1',
						top: '0px',
						left: `1325px`,
					}}
				/>
			
			</Sequence>




			<Sequence name='sepparacion1' >
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX1}px`,
						background: `${colorAmarillo1}`,
						top: '0px',
						left: `${amarilloDerecha1}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX1}px`,
						background: `${colorMorado1}`,
						top: '0px',
						left: `${moradoIzquierda1}px`,
					}}
				/>

				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX1}px`,
						background: `${colorAmarillo1}`,
						top: '0px',
						left: `${amarilloIzquierda1}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX1}px`,
						background: `${colorMorado1}`,
						top: '0px',
						left: `${moradoDerecha1}px`,
					}}
				/>
			</Sequence>


			<Sequence from={10}>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX2}px`,
						background: `${colorAmarillo2}`,
						top: '0px',
						left: `${amarilloDerecha2}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX2}px`,
						background: `${colorMorado2}`,
						top: '0px',
						left: `${moradoIzquierda2}px`,
					}}
				/>

				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX2}px`,
						background: `${colorAmarillo2}`,
						top: '0px',
						left: `${amarilloIzquierda2}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX2}px`,
						background: `${colorMorado2}`,
						top: '0px',
						left: `${moradoDerecha2}px`,
					}}
				/>
			</Sequence>

			<Sequence from={20}>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX3}px`,
						background: `${colorAmarillo3}`,
						top: '0px',
						left: `${amarilloDerecha3}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX3}px`,
						background: `${colorMorado3}`,
						top: '0px',
						left: `${moradoIzquierda3}px`,
					}}
				/>

				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX3}px`,
						background: `${colorAmarillo3}`,
						top: '0px',
						left: `${amarilloIzquierda3}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX3}px`,
						background: `${colorMorado3}`,
						top: '0px',
						left: `${moradoDerecha3}px`,
					}}
				/>
			</Sequence>

			<Sequence from={30}>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX4}px`,
						background: `${colorAmarillo4}`,
						top: '0px',
						left: `${amarilloDerecha4}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX4}px`,
						background: `${colorMorado4}`,
						top: '0px',
						left: `${moradoIzquierda4}px`,
					}}
				/>

				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX4}px`,
						background: `${colorAmarillo4}`,
						top: '0px',
						left: `${amarilloIzquierda4}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX4}px`,
						background: `${colorMorado4}`,
						top: '0px',
						left: `${moradoDerecha4}px`,
					}}
				/>
			</Sequence>

			<Sequence from={40}>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX5}px`,
						background: `${colorAmarillo5}`,
						top: '0px',
						left: `${amarilloDerecha5}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX5}px`,
						background: `${colorMorado5}`,
						top: '0px',
						left: `${moradoIzquierda5}px`,
					}}
				/>

				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX5}px`,
						background: `${colorAmarillo5}`,
						top: '0px',
						left: `${amarilloIzquierda5}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX5}px`,
						background: `${colorMorado5}`,
						top: '0px',
						left: `${moradoDerecha5}px`,
					}}
				/>
			</Sequence>

			<Sequence from={50}>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX6}px`,
						background: `${colorAmarillo6}`,
						top: '0px',
						left: `${amarilloDerecha6}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX6}px`,
						background: `${colorMorado6}`,
						top: '0px',
						left: `${moradoIzquierda6}px`,
					}}
				/>

				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX6}px`,
						background: `${colorAmarillo6}`,
						top: '0px',
						left: `${amarilloIzquierda6}px`,
					}}
				/>
				<AbsoluteFill
					style={{
						height: '1080px',
						width: `${widthX6}px`,
						background: `${colorMorado6}`,
						top: '0px',
						left: `${moradoDerecha6}px`,
					}}
				/>
			</Sequence>


		</div>
	);
};
