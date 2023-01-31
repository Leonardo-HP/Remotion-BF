import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
	delayRender,
} from 'remotion';
import { Modelo } from './ModeloFactura';

export const Factura: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	

	const jump10 = interpolate(frame, [0,3,15,18], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});
	const jump9 = interpolate(frame, [0,6,18,21], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});
	const jump8 = interpolate(frame, [0,9,21,24], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});
	const jump7 = interpolate(frame, [0,12,24,27], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});
	const jump6 = interpolate(frame, [0,15,27,30], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});
	const jump5 = interpolate(frame, [0,18,30,33], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});
	const jump4 = interpolate(frame, [0,21,33,36], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});
	const jump3 = interpolate(frame, [0,24,39,42], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});
	const jump2 = interpolate(frame, [0,27,42,45], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});
	const jump1 = interpolate(frame, [0,29,45,48], [280, 200,200,280], {
		extrapolateRight: 'clamp',
	});




	/// //////////////	transform: ' skew(0deg,4deg)',////////////////////////////////////////////////

	return (
		<>
			<Sequence name="Hoja" durationInFrames={121}>
				
				<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: jump1,
						left: '520px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				/>
				<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: jump2,
						left: '540px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				/>
				<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: jump3,
						left: '560px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				/>
				<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: jump4,
						left: '580px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				/>

				<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: jump5,
						left: '600px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				/>
				<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: jump6,
						left: '620px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				/>
				<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: jump7,
						left: '640px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				/>
				<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: jump8,
						left: '660px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				/>

				<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: jump9,
						left: '680px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				// eslint-disable-next-line react/jsx-no-comment-textnodes
				/>



/////////////



				<AbsoluteFill
					style={{
						height: '600px',
						width: '400px',
						border: '10px solid white',
						top: jump10,
						left: '700px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
						transform: ' skew(0deg,7deg)',
					}}
				>
								<AbsoluteFill
						style={{
							height: '100px',
							width: '300px',
							top: '30px',
							left: '150px',
						}}
					>
						<AbsoluteFill
							style={{
								height: '30px',
								width: '300px',
								background: 'grey',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '300px',
								background: 'grey',
								top: '40px',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '300px',
								background: 'grey',
								top: '60px',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '300px',
								background: 'grey',
								top: '80px',
							}}
						/>

						<AbsoluteFill
							style={{
								height: '20px',
								width: '50px',
								background: 'white',
								top: '54px',
								transform: 'rotate(90deg)',
								left: '55px',
							}}
						/>
					</AbsoluteFill>

					<AbsoluteFill
						style={{
							height: '90px',
							width: '90px',
							background: 'grey',
							top: '30px',
							borderRadius: '50px',
							left: '30px',
						}}
					/>

					<AbsoluteFill
						style={{
							height: '100px',
							width: '420px',
							top: '240px',
							left: '35px',
						}}
					>
						<AbsoluteFill
							style={{
								height: '15px',
								width: '410px',
								background: 'grey',
								top: '10px',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '200px',
								background: 'grey',
								top: '35px',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '200px',
								background: 'grey',
								top: '55px',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '200px',
								background: 'grey',
								top: '75px',
							}}
						/>

					
					</AbsoluteFill>

          <AbsoluteFill
						style={{
							height: '100px',
							width: '420px',
							top: '335px',
							left: '35px',
						}}
					>
						<AbsoluteFill
							style={{
								height: '15px',
								width: '410px',
								background: 'grey',
								top: '10px',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '200px',
								background: 'grey',
								top: '35px',
                left:'210px'
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '200px',
								background: 'grey',
								top: '55px',
                left:'210px'
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '200px',
								background: 'grey',
								top: '75px',
                left:'210px'
							}}
						/>

					
					</AbsoluteFill>

          
   

					<AbsoluteFill
						style={{
							height: '100px',
							width: '420px',
							top: '150px',
							left: '35px',
						}}
					>
						<AbsoluteFill
							style={{
								height: '15px',
								width: '410px',
								background: 'grey',
								top: '10px',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '200px',
								background: 'grey',
								top: '35px',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '200px',
								background: 'grey',
								top: '55px',
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '200px',
								background: 'grey',
								top: '75px',
                
							}}
						/>

					
					</AbsoluteFill>




					
					<AbsoluteFill
							style={{
								height: '100px',
								width: '100px',
								background: 'grey',
								transform: 'rotate(90deg)',
								left: '345px',
                top:'440px'
							}}
						/>


<AbsoluteFill
							style={{
								height: '5px',
								width: '280px',
								background: 'grey',
								top: '440px',
                left:'40px'
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '280px',
								background: 'grey',
								top: '470px',
                left:'40px'
							}}
						/>
						<AbsoluteFill
							style={{
								height: '5px',
								width: '280px',
								background: 'grey',
								top: '500px',
                left:'40px'
                
							}}
						/>
           

<AbsoluteFill
							style={{
								height: '5px',
								width: '280px',
								background: 'grey',
								top: '530px',
                left:'40px'
                
							}}
						/>
		
				</AbsoluteFill>
</Sequence>
		</>
	);
};
