import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const CirculoColores: React.FC = () => {
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

	const rotacionI = interpolate(frame, [0, 120], [0, 360], {
		extrapolateRight: 'clamp',
	});
	const rotacionD = interpolate(frame, [0, 190], [0, -360], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: 'scale(0.5)',
			}}
		>
			<Sequence name="circulo" durationInFrames={120}>
				<AbsoluteFill>
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
					>
						<AbsoluteFill
							style={{
								top: '75px',
								left: '75px',
								borderRadius: '50%',
								width: '3000px',
								height: '3000px',
								borderTop: '75px solid #fcb00b',
								borderLeft: ' 75px solid #fcb00b',
								borderRight: '75px solid transparent',
								borderBottom: '75px solid #fcb00b',
								transform: `rotate(${rotacionI}deg)`,
							}}
						>
							<AbsoluteFill
								style={{
									top: '75px',
									left: '75px',
									borderRadius: '50%',
									width: '2700px',
									height: '2700px',
									borderTop: '75px solid #fdffff',
									borderLeft: ' 75px solid #fdffff',
									borderRight: '75px solid transparent',
									borderBottom: '75px solid #fdffff',
									transform: `rotate(${rotacionD}deg)`,
								}}
							>
								<AbsoluteFill
									style={{
										top: '75px',
										left: '75px',
										borderRadius: '50%',
										width: '2400px',
										height: '2400px',
										borderTop: '75px solid #4f8822',
										borderLeft: ' 75px solid #4f8822',
										borderRight: '75px solid transparent',
										borderBottom: '75px solid #4f8822',
										transform: `rotate(${rotacionI}deg)`,
									}}
								>
									<AbsoluteFill
										style={{
											top: '75px',
											left: '75px',
											borderRadius: '50%',
											width: '2100px',
											height: '2100px',
											borderTop: '75px solid #f8e606',
											borderLeft: ' 75px solid #f8e606',
											borderRight: '75px solid transparent',
											borderBottom: '75px solid #f8e606',
											transform: `rotate(${rotacionD}deg)`,
										}}
									>
										<AbsoluteFill
											style={{
												top: '75px',
												left: '75px',
												borderRadius: '50%',
												width: '1800px',
												height: '1800px',
												borderTop: '75px solid #4eb2e4',
												borderLeft: ' 75px solid #4eb2e4',
												borderRight: '75px solid transparent',
												borderBottom: '75px solid #4eb2e4',
												transform: `rotate(${rotacionI}deg)`,
											}}
										>
											<AbsoluteFill
												style={{
													top: '75px',
													left: '75px',
													borderRadius: '50%',
													width: '1500px',
													height: '1500px',
													borderTop: '75px solid #dd1180',
													borderLeft: ' 75px solid #dd1180',
													borderRight: '75px solid transparent',
													borderBottom: '75px solid #dd1180',
													transform: `rotate(${rotacionD}deg)`,
												}}
											>
												<AbsoluteFill
													style={{
														top: '75px',
														left: '75px',
														borderRadius: '50%',
														width: '1200px',
														height: '1200px',
														borderTop: '75px solid #7010b1',
														borderLeft: ' 75px solid #7010b1',
														borderRight: '75px solid transparent',
														borderBottom: '75px solid #7010b1',
														transform: `rotate(${rotacionI}deg)`,
													}}
												>
													<AbsoluteFill
														style={{
															top: '75px',
															left: '75px',
															borderRadius: '50%',
															width: '900px',
															height: '900px',
															borderTop: '75px solid #ac54c1',
															borderLeft: ' 75px solid #ac54c1',
															borderRight: '75px solid transparent',
															borderBottom: '75px solid #ac54c1',
															transform: `rotate(${rotacionD}deg)`,
														}}
													>
														<AbsoluteFill
															style={{
																top: '75px',
																left: '75px',
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
												</AbsoluteFill>
											</AbsoluteFill>
										</AbsoluteFill>
									</AbsoluteFill>
								</AbsoluteFill>
							</AbsoluteFill>
						</AbsoluteFill>
					</AbsoluteFill>
				</AbsoluteFill>
			</Sequence>
		</div>
	);
};
