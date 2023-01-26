import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const Colores: React.FC = () => {
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

	// 11

	return (

   <div style={{ display: 'flex',
 
    alignItems: 'center'}} >
     
        <Sequence name="Linea1" durationInFrames={30}>
          <div
           style={{
            height: '50px',
            width: '1920px',
            background: '#ec1144'
          }} 
           />
         
        
    </Sequence>
   
    <Sequence name="Linea2" durationInFrames={30}>
        <AbsoluteFill
          style={{
            height: '50px',
            width: '1920px',
            background: '            #ac54c1',
          }} />
      </Sequence><Sequence name="Linea3" durationInFrames={30}>
        <AbsoluteFill
          style={{
            height: '50px',
            width: '1920px',
            background: '#7010b1',
          }} />
      </Sequence><div>
        <Sequence name="Linea4" durationInFrames={30}>
          <AbsoluteFill
            style={{
              height: '50px',
              width: '1920px',
              border: '10px',
              background: '#7010b1',
            }} />
        </Sequence>
      </div><Sequence name="Linea5" durationInFrames={30}>
        <AbsoluteFill
          style={{
            height: '50px',
            width: '1920px',

            background: '#4eb2e4',
          }} />
      </Sequence><Sequence name="Linea6" durationInFrames={30}>
        <AbsoluteFill
          style={{
            height: '50px',
            width: '1920px',

            background: '#f8e606',
          }} />
      </Sequence><Sequence name="Linea7" durationInFrames={30}>
        <AbsoluteFill
          style={{
            height: '50px',
            width: '1920px',

            background: '#4f8822',
          }} />
      </Sequence><Sequence name="Linea8" durationInFrames={30}>
        <AbsoluteFill
          style={{
            height: '50px',
            width: '1920px',

            background: '#79d20a',
          }} />
      </Sequence><Sequence name="Linea9" durationInFrames={30}>
        <AbsoluteFill
          style={{
            height: '50px',
            width: '1920px',

            background: '#79d20a',
          }} />
      </Sequence><Sequence name="Linea10" durationInFrames={30}>
        <AbsoluteFill
          style={{
            height: '50px',
            width: '1920px',

            background: '#fcb00b',
          }} />
      </Sequence><Sequence name="Linea10" durationInFrames={30}>
        <AbsoluteFill
          style={{
            height: '50px',
            width: '1920px',

            background: '#ec1144',
          }} />
      </Sequence>
   </div>
	);
};
