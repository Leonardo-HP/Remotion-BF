import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const CajaRealBXF: React.FC = () => {
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

	const movimiento1 = interpolate(frame, [0, 25, 26 ,50], [-20, -15,-15,-20], {
		extrapolateRight: 'clamp',
	});
	const movimiento2 = interpolate(frame, [0, 25, 26 ,50], [20, 15,15,20], {
		extrapolateRight: 'clamp',
	});
	const heightCaja = interpolate(frame, [0, 25, 26 ,50], [410, 406,406,410], {
		extrapolateRight: 'clamp',
	});

	const widhtCaja = interpolate(frame,[0, 25, 26 ,50], [350, 346,346,350], {
		extrapolateRight: 'clamp',
	});

	const topCaja = interpolate(frame, [0, 25, 26 ,50], [500, 496,496,500], {
		extrapolateRight: 'clamp',
	});
	const leftCajaIzquierda = interpolate(frame, [0, 25, 26 ,50], [598, 602,601,598], {
		extrapolateRight: 'clamp',
	});
	const leftCajaDerecha = interpolate(frame, [0, 25, 26 ,50], [960, 956,957,960], {
		extrapolateRight: 'clamp',
	});



	/// ///'linear-gradient(45deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)'/////////
	return (
		<>
			<Sequence name="CajaBXF">
				<AbsoluteFill
					style={{
						height: heightCaja,
						width: widhtCaja,
						background:
							'linear-gradient(45deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)',
						transform: 'perspective(600px) rotateY(-25deg)',
						top: topCaja,
						left: leftCajaIzquierda,
					}}
				/>

				<AbsoluteFill
					style={{
						height:heightCaja,
						width: widhtCaja,
						background:
							'linear-gradient(45deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)',
						transform: 'perspective(600px) rotateY(25deg)',
						top: topCaja,
						left: leftCajaDerecha,
					}}
				/>

				<AbsoluteFill
					style={{
						height: '150px',
						width: '333px',
            background: 'linear-gradient(6deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)',
						transform:`skew(${movimiento2}deg)  perspective(520px) rotateY(25deg) rotate(4deg)`,
            boxShadow: '-2px 0px 7px grey',
						borderBottom: '1px solid grey',
						borderLeft: '1px solid grey',
						top: '501px',
						left: '993.8px',
					}}
				/>

				<AbsoluteFill
					style={{
						height: '150px',
						width: '333px',
						background: 'linear-gradient(6deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)',
						transform:`skew(${movimiento1}deg) perspective(520px) rotateY(-25deg) rotate(-4deg)`,
						top: '501px',
            boxShadow: '-2px 0px 7px grey',
						left: '580px',
						borderBottom: '1px solid grey',
						borderRight: '1px solid grey',
					}}
				/>
			</Sequence>
		</>
	);
};
