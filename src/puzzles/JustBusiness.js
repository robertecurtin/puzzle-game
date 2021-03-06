
import { Typography, Stack } from '@mui/material';
import React from 'react';
import PuzzleTabContainer from '../components/PuzzleTabContainer';

function JustBusiness() {
  const clues = [
    "Only Bolsonaro can destroy it",
    "Robert made a game about his strip of brined salmon",
    "Long-range nuclear capability (-C)",
    "Pirates of the Seven Seeds",
    "Instant coffee: Just add water!",
    "Turtlenecks are the original sin",
    "Defense Against the Dark Arts? No, true Gamers learn Defense Against the",
    "Catharina-Amalia isn’t sp oiled"
  ];

  return PuzzleTabContainer(
    {
      title: "Nothing personal, printer boy",
      subTitle: "Best practices are so 1900s, worst practices are in! Take notes from the best in the business.",
      puzzleId: 2,
      contents: < Stack spacing={3} >
          {clues.map((line) => {
            // return <Chip key={line} color="info" variant="outlined" label={line} >asdf</Chip>;
            return <Typography key={line} variant="overline">{line}</Typography>;
          })}
      </Stack>
    }
  );
}

export default JustBusiness;
