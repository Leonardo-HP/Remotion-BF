import { useVideoConfig, useCurrentFrame } from "remotion/."
import { CuadroRojo } from "./CuadroRojo";
import { France } from "./France";
import { Rain } from "./Rain";
import { RainDrop } from "./RainDrop";





export const MyComposition = () => {

const {fps, durationInFrames,width, height} = useVideoConfig();
const frame  = useCurrentFrame();
const opacity = frame / durationInFrames




  return(

<div
style={{
  flex:1,
  textAlign: 'center',
  fontSize: '7em',
  background: 'BLACK',
  color: 'red',
  opacity,
}}
>

  olakease
this video is {width}x{height}px  and {durationInFrames / fps} seconds long.

<France />
<Rain/>


</div>



)

}