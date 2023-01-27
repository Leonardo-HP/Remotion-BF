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

	const movimiento = interpolate(driver, [0, 10], [1200, 280], {
		extrapolateRight: 'clamp',
	});

	/// ///'linear-gradient(45deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)'/////////
	return (
		<>
			<Sequence name="CajaBXF">
				<AbsoluteFill
					style={{
						height: '350px',
						width: '350px',
						background:
							'linear-gradient(45deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)',
						transform: 'perspective(600px) rotateY(-25deg)',
						top: '500px',
						left: '598px',
					}}
				/>

				<AbsoluteFill
					style={{
						height: '350px',
						width: '350px',
						background:
							'linear-gradient(45deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)',
						transform: 'perspective(600px) rotateY(25deg)',
						top: '500px',
						left: '960px',
					}}
				/>

				<AbsoluteFill
					style={{
						height: '150px',
						width: '333px',
            background: 'linear-gradient(6deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)',
						transform:'skew(20deg)  perspective(520px) rotateY(25deg) rotate(4deg)',
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
						transform:'skew(-20deg)  perspective(520px) rotateY(-25deg) rotate(-4deg)',
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
