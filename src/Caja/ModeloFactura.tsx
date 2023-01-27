import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';


export const Modelo: React.FC = () => {
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

	

	/// ///'linear-gradient(45deg, rgba(182,107,0,1) 0%, rgba(255,191,0,1) 80%)'/////////
	return (
		<>

<Sequence>
<AbsoluteFill
					style={{
						height: '600px',
						width: '500px',
						border: '10px solid white',
						top: '0',
						left: '700px',
						background: 'white',
						boxShadow: '-5px 0px 5px grey',
					
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
