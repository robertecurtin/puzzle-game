import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import SadBoiHours from './puzzles/Cards';
import Rude from './puzzles/Rude';
import JustBusiness from './puzzles/JustBusiness';
import StoryTime from './puzzles/StoryTime';
import Besties from './puzzles/Besties';
import PizzaGameGame from './puzzles/PizzaGameGame';

const puzzles = [
  () => <SadBoiHours />,
  () => <Rude />,
  () => <JustBusiness />,
  () => <StoryTime />,
  () => <Besties />,
  () => <PizzaGameGame />
];

const tabText = [
  "Learning is not in the cards",
  "Rude",
  "Nothing personal",
  "Story tim",
  "Besties",
  "Pizza Game Game"
];

function Game() {
  const [tab, setTab] = React.useState(4);

  const changeTab = (_, a) => {
    console.log(a);
    setTab(a);
  };

  return <div className='Game'>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={tab} onChange={changeTab} className="mb-3">
        {tabText.map((text) => {
          return <Tab key={text} label={text}></Tab>;
        })}
      </Tabs>
    </Box>
    <Box>
      {puzzles[tab]()}
    </Box>
  </div>;
}

export default Game;
