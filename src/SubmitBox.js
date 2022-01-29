import { IconButton, TextField, Paper } from '@mui/material';
import React from 'react';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import answers from "./SpoilersHereDontLookUnlessYouKnowWhatYoureGettingInto";
import terribleCypher from "./utils/terribleCypher";
import roobit from "./assets/roobit.png";
import arimNaes from "./assets/arim-naes.png";
import arimYays from "./assets/arim-yays.png";
import { Box } from '@mui/system';

const SubmitBox = (props) => {
  const [succeeded, setSucceeded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const expected = terribleCypher.decode(answers[props.puzzleId]);
    const actual = guess.toUpperCase().replace(/[^A-Z0-9]/gi, '');
    if (expected == actual) {
      setSucceeded(true);
      setFailed(false);
    }
    else {
      setFailed(true);
    }
  };

  const Arimface = () => {
    return <Box
      sx={{
        boxShadow: 1,
        borderRadius: 1,
        height: "auto",
      }}
    ><img
        src={succeeded ? arimYays : arimNaes}
        style={{ width: "100%", maxWidth: 100, height: "auto" }}
      />
    </Box>;
  };

  const inputChanged = (e) => {
    setGuess(e.target.value);
    setFailed(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  const secretEnding = () => {
    return <div>
      <h2>you freed a the me! thank you forever!</h2>
      <div>
        <img
          src={roobit}
        />
      </div>
    </div>;
  };
  const showSecretEnding = (typeof props.secret !== 'undefined');

  const SubmitButton = () => {
    return <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={handleSubmit} disabled={succeeded} >
      {(succeeded || failed) ? <Arimface /> : <ArrowForwardIosIcon />}
    </IconButton>;
  };

  return showSecretEnding && succeeded ? secretEnding() : (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', height: 60 }}
    >
      <TextField
        sx={{ ml: 1, flex: 1 }}
        placeholder={props.prompt}
        inputProps={{ 'aria-label': 'submit your answer' }}
        onChange={inputChanged}
        onKeyPress={handleKeyPress}
        disabled={succeeded}
        error={failed}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <SubmitButton />
    </Paper>
  );
};

export default SubmitBox;
