import { Stack } from '@mui/material';
import React from 'react';

const pizzaGameTrailer = <iframe width="1090" height="613" src="https://www.youtube.com/embed/Zhola4i_L0Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;

function Intro() {
  return <Stack spacing={3}>
    <h2>Pizza game is the best game youve probably never played!</h2>
    <h3>if you havent, fisrt of all shame on you</h3>
    <h3>but also everytin you need to know is in this traler:</h3>
    {pizzaGameTrailer}
    plus you wont need them until the game game also there am no hints on this page except the vidoe so dont worry and haev fun!!(tm)
  </Stack>;
};

export default Intro;
