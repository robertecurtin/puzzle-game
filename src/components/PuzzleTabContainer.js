import React from 'react';
import SubmitBox from '../SubmitBox';
import { Paper, Stack } from '@mui/material';

const PuzzleTabContainer = (props) => {
  return <Stack spacing={3}>
    <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={props.puzzleId} />
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'left' }}
    >
      {props.contents}
    </Paper>
  </Stack>;
};

export default PuzzleTabContainer;
