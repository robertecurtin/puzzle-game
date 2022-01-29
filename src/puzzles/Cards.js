
import React from 'react';
import cardinal from '../assets/cardinal.png';
import teardrop from '../assets/teardrop.png';
import { Grid } from '@mui/material';
import PuzzleTabContainer from '../components/PuzzleTabContainer';

// is it crappy code or security by obscurity? i'll never tell

function Icon(props) {
  return <img
    src={props.val == "c" ? cardinal : teardrop}
    style={{ maxHeight: 100, maxWidth: 100, transform: props.val == "r" ? "scaleX(-1)" : "" }}
  />;
}

const array = [
  ["c", "c", "c", "t"],
  ["c", "c", "t", "c", "c"],
  ["c", "r", "r", "c", "c", "c", "t"],
];

function ImageRow(row, y) {
  return <Grid container columns={row.length} spacing={2} >
    {row.map((col, x) => {
      return <Grid item key={x + y} > <Icon val={col} /> </Grid>;
    })}
  </Grid>;
};

function Cards() {
  return PuzzleTabContainer(
    {
      title: "Learning is not in the cards",
      subTitle: "All my classes are hard, no matter what school I go to!",
      puzzleId: 1,
      contents: < Grid container spacing={2} >
        {
          array.map((row, y) => {
            return <Grid container key={row}>
                {ImageRow(row, y)}
            </Grid>;
          })
        }
      </Grid>
    }
  );
}

export default Cards;
