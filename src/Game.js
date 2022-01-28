import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import SadBoiHours from './puzzles/Cards';
// import Rude from './puzzles/Rude';
// import JustBusiness from './puzzles/JustBusiness';
// import StoryTime from './puzzles/StoryTime';
// import Besties from './puzzles/Besties';

// const puzzles = [
//   () => <SadBoiHours />,
//   () => <Rude />,
//   () => <JustBusiness />,
//   () => <StoryTime />,
//   () => <Besties />
// ];
const puzzles = [
  () => <SadBoiHours />,
  () => <div>2</div>,
  () => <div>3</div>,
  () => <div>4</div>,
  () => <div>5</div>,
];

const tabText = [
  "Learning is not in the cards",
  "Rude",
  "Nothing personal",
  "Story tim",
  "Besties"
];

function Game() {
  const [tab, setTab] = React.useState(0);

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
      {/* {puzzles.map((callback) => {
        return callback();
      })} */}
    </Box>
    <Box>
      {puzzles[tab]()}
    </Box>
  </div>;
}

export default Game;
