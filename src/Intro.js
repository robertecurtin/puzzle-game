import { Stack } from '@mui/material';
import React from 'react';

const pizzaGameTrailer = <div>
  <div style={{ position:"relative", paddingTop:"56.25%" }}>
    <iframe
    src="https://www.youtube.com/embed/Zhola4i_L0Q"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ position:"absolute", width:"100%", height:"100%", top:0, left:0 }}
     />
  </div>
</div>;

function Intro() {
  return <Stack spacing={3}>
    <h2>Pizza game is the best game youve probably never played!</h2>
    <h3>if you havent, fisrt of all shame on you</h3>
    <h3>but also everytin you need to know is in this traler</h3>
    also i didnt feel like baking cookies or w/e so your answers wont be saved when you chagne tabs
    {pizzaGameTrailer}
    <div />
    also you wont need need to have watch tralior until the game game but it will help also there am no hints on this page except the vidoe so dont worry and haev fun!!(tm)
  </Stack>;
};

export default Intro;
