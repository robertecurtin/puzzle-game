import React from 'react';
import SubmitBox from '../SubmitBox';
import { Paper, Stack } from '@mui/material';

const PuzzleTabContainer = (props) => {
  return <Stack spacing={3}>
    <div />
    <div>{props.subTitle}</div>
    <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={props.puzzleId} secret={props.secret} />
    <Paper
    elevation={3}
      sx={{ p: '2px 8px', display: 'flex', alignItems: 'left' }}
    >
      {props.contents}
    </Paper>
  </Stack>;
};

export default PuzzleTabContainer;
