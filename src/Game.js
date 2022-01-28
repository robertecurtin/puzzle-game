import React from 'react';
import { Tabs, Tab } from '@mui/material';
import SadBoiHours from './puzzles/Cards';
import Rude from './puzzles/Rude';
import JustBusiness from './puzzles/JustBusiness';
import StoryTime from './puzzles/StoryTime';
import Besties from './puzzles/Besties';

function Game() {
  return <div className='Game'>
    <Tabs defaultValue="sadBoiHours" id="gameTabs" className="mb-3">
      <TabsList>
        <Tab>Learning is not in the cards</Tab>
        <Tab>Rude</Tab>
        <Tab>Nothing personal</Tab>
        <Tab>Story tim</Tab>
        <Tab>Besties</Tab>
      </TabsList>
  <Tab value="sadBoiHours" title="">
    <SadBoiHours />
  </Tab>
  <Tab value="rude" title="Rude">
    <Rude />
  </Tab>
  <Tab value="nothingPersonal" title="Nothing personal">
    <JustBusiness />
  </Tab>
  <Tab value="StoryTime" title="Story tim">
    <StoryTime />
  </Tab>
  <Tab value="Besties" title="Besties">
    <Besties />
  </Tab>
</Tabs>
  </div>;
}

export default Game;
