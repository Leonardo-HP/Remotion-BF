import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const BolaBlanca: React.FC = () => {
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

	const rotacionI = interpolate(frame, [0, 120], [0, 495], {
		extrapolateRight: 'clamp',
	});
	const rotacionD = interpolate(frame, [0, 120], [0, -550], {
		extrapolateRight: 'clamp',
	});
  const Top1 = interpolate(frame, [0, 80], [2000, -300], {
		extrapolateRight: 'clamp',
	});
  
  const Left1 = interpolate(frame, [0, 80], [-600, -600], {
		extrapolateRight: 'clamp',
	});

  const TopBola1 = interpolate(frame, [0, 45], [-100, 600], {
		extrapolateRight: 'clamp',
	});
  
  const LeftBola1 = interpolate(frame, [0, 80], [1000, 1000], {
		extrapolateRight: 'clamp',
	});


  const TopBola2 = interpolate(frame, [0, 100], [200,400   ], {
		extrapolateRight: 'clamp',
	});
  
  const LeftBola2 = interpolate(frame, [0, 80], [1200, 100], {
		extrapolateRight: 'clamp',
	});












	return (
		<Sequence name="circulo" durationInFrames={800}>
			<AbsoluteFill style={{

        top:Top1,
        left: Left1
    
    
    }}>
				<AbsoluteFill
					style={{
						top: '-800px',
						left: '0px',
						borderRadius: '50%',
						width: '3300px',
						height: '3300px',
						borderTop: '75px solid #ec1144',
						borderLeft: ' 75px solid #ec1144',
						borderRight: '75px solid transparent',
						borderBottom: '75px solid #ec1144',
						transform: `rotate(${rotacionD}deg)`,
						
					}}
				/>
				<AbsoluteFill
					style={{
						top: '-650px',
						left: '150px',
						borderRadius: '50%',
						width: '3000px',
						height: '3000px',
						borderTop: '75px solid #fcb00b',
						borderLeft: ' 75px solid #fcb00b',
						borderRight: '75px solid #fcb00b',
						borderBottom: '75px solid transparent',
						transform: `rotate(${rotacionI}deg)`,
						
					}}
				/>
				<AbsoluteFill
					style={{
						top: '-500px',
						left: '300px',
						borderRadius: '50%',
						width: '2700px',
						height: '2700px',
						borderTop: '75px solid transparent',
						borderLeft: ' 75px solid #fdffff',
						borderRight: '75px solid #fdffff',
						borderBottom: '75px solid #fdffff',
						transform: `rotate(${rotacionD}deg)`,
					
					}}
				/>
				<AbsoluteFill
					style={{
						top: '-350px',
						left: '450px',
						borderRadius: '50%',
						width: '2400px',
						height: '2400px',
						borderTop: '75px solid #4f8822',
						borderLeft: ' 75px solid transparent',
						borderRight: '75px solid #4f8822',
						borderBottom: '75px solid #4f8822',
						transform: `rotate(${rotacionI}deg)`,
					
					}}
				/>
				<AbsoluteFill
					style={{
						top: '-200px',
						left: '600px',
						borderRadius: '50%',
						width: '2100px',
						height: '2100px',
						borderTop: '75px solid #f8e606',
						borderLeft: ' 75px solid #f8e606',
						borderRight: '75px solid transparent',
						borderBottom: '75px solid #f8e606',
						transform: `rotate(${rotacionD}deg)`,

					}}
				/>
				<AbsoluteFill
					style={{
						top: '-50px',
						left: '750px',
						borderRadius: '50%',
						width: '1800px',
						height: '1800px',
						borderTop: '75px solid #4eb2e4',
						borderLeft: ' 75px solid #4eb2e4',
						borderRight: '75px solid #4eb2e4',
						borderBottom: '75px solid transparent',
						transform: `rotate(${rotacionI}deg)`,
				
					}}
				/>
				<AbsoluteFill
					style={{
						top: '100px',
						left: '900px',
						borderRadius: '50%',
						width: '1500px',
						height: '1500px',
						borderTop: '75px solid transparent',
						borderLeft: ' 75px solid #dd1180',
						borderRight: '75px solid #dd1180',
						borderBottom: '75px solid #dd1180',
						transform: `rotate(${rotacionD}deg)`,
					
					}}
				/>
				<AbsoluteFill
					style={{
						top: '250px',
						left: '1050px',
						borderRadius: '50%',
						width: '1200px',
						height: '1200px',
						borderTop: '75px solid #7010b1',
						borderLeft: ' 75px solid transparent',
						borderRight: '75px solid #7010b1',
						borderBottom: '75px solid #7010b1',
						transform: `rotate(${rotacionI}deg)`,
					
					}}
				/>
				<AbsoluteFill
					style={{
						top: '400px',
						left: '1200px',
						borderRadius: '50%',
						width: '900px',
						height: '900px',
						borderTop: '75px solid #ac54c1',
						borderLeft: ' 75px solid #ac54c1',
						borderRight: '75px solid transparent',
						borderBottom: '75px solid #ac54c1',
						transform: `rotate(${rotacionD}deg)`,
				
					}}
				/>
				<AbsoluteFill
					style={{
						top: '550px',
						left: '1350px',
						borderRadius: '50%',
						width: '600px',
						height: '600px',
						borderTop: '75px solid transparent',
						borderLeft: ' 75px solid #ec1144',
						borderRight: '75px solid transparent',
						borderBottom: '75px solid #ec1144',
						transform: `rotate(${rotacionI}deg)`,
					}}
				/>
			</AbsoluteFill>

      <Sequence durationInFrames={30}>
      <AbsoluteFill
					style={{
						top: `${TopBola1}px`,
						left: `${LeftBola1}px`,
						borderRadius: '50%',
						width: '100px',
						height: '100px',
            background:'white'
					}}
				/>
        </Sequence>

        <Sequence  from={30}>
      <AbsoluteFill
					style={{
						top: `${TopBola2}px`,
						left: `${LeftBola2}px`,
						borderRadius: '50%',
						width: '100px',
						height: '100px',
            background:'white'
					}}
				/>
        </Sequence>




		</Sequence>
	);
};