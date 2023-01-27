import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

import { Colores } from './Colores';

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
  const rotacionColores = interpolate(frame, [10, 51], [0,90], 

    {

      extrapolateRight: 'clamp',
    });
  

  const topColores = interpolate(frame, [0, 15], [0,-540], {

		extrapolateRight: 'clamp',
	});


  return (
		<div>
			<Sequence name="Vuelta" durationInFrames={50} >
				<AbsoluteFill
					style={{      
            scale:'0.2',
            transform: `rotate(${rotacionColores}deg)`,    

          }}
				>
        <Colores/>

        </AbsoluteFill>

			</Sequence>
      </div>
	);
};