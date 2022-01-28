import { IconButton, TextField, Paper } from '@mui/material';
import React from 'react';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoneIcon from '@mui/icons-material/Done';
import answers from "./SpoilersHereDontLookUnlessYouKnowWhatYoureGettingInto";
import terribleCypher from "./utils/terribleCypher";


const SubmitBox = (props) => {
  const [succeeded, setSucceeded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  // const [previousGuess, setPreviousGuess] = React.useState("");
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
    const expected = terribleCypher.decode(answers[props.puzzleId]);
    const actual = guess.toUpperCase().replace(/[^A-Z0-9]/gi, '');
    if (expected == actual) {
      setSucceeded(true);
      setFailed(false);
    }
    else {
      // setPreviousGuess(actual);
      setFailed(true);
    }
  };

  const inputChanged = (e) => {
    setGuess(e.target.value);
    setFailed(false);
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <TextField
        sx={{ ml: 1, flex: 1 }}
        placeholder="Submit your answer"
        inputProps={{ 'aria-label': 'submit your answer' }}
        onChange={inputChanged}
        onKeyPress={handleKeyPress}
        disabled={succeeded}
        error={failed}

      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={handleSubmit} disabled={succeeded} >
        {succeeded ? <DoneIcon /> : <ArrowForwardIosIcon />}
      </IconButton>
    </Paper>
  );
};

export default SubmitBox;
