import React from 'react';
import mrArimnaes from "../assets/mr-arimnaes.png";
import sensei from "../assets/sensei.png";
import warpedLamp from "../assets/warped-lamp.png";
import keenarnor from "../assets/keenarnor.png";
import chris from "../assets/chris.png";
import { ImageListItem, ImageListItemBar, Stack } from '@mui/material';
import PuzzleTabContainer from '../components/PuzzleTabContainer';

function PizzaGameGame() {
  const clues = [
    { image: mrArimnaes, clue: "5->7" },
    { image: sensei, clue: "3->6, 2->8" },
    { image: warpedLamp, clue: "2->5, 12->3" },
    { image: keenarnor, clue: "6->1, 5->2" },
    { image: chris, clue: "4->4" },
  ];

  function Image(props) {
    return <img
      src={props.image}
      style={{ maxHeight: 500, maxWidth: 500, width:"100%" }}
    />;
  }

  return PuzzleTabContainer(
    {
      title: "PIzza Game Game",
      subTitle: "I hope you had fune! Lets see waht you've leanred!",
      puzzleId: 5,
      contents: < Stack spacing={2} >
        {clues.map((line) => {
          return <ImageListItem key={line.clue}>
                <Image image={line.image} />
                <ImageListItemBar title={line.clue} />
              </ImageListItem>;
        })}
      </Stack>,
      secret: true
    }
  );
};


export default PizzaGameGame;
