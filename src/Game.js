import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SadBoiHours from './puzzles/Cards';
import Rude from './puzzles/Rude';
import JustBusiness from './puzzles/JustBusiness';
import StoryTime from './puzzles/StoryTime';
import Besties from './puzzles/Besties';

function Game() {
  return <div className='Game'>
    <Tabs defaultActiveKey="sadBoiHours" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="sadBoiHours" title="Learning is not in the cards">
    <SadBoiHours />
  </Tab>
  <Tab eventKey="rude" title="Rude">
    <Rude />
  </Tab>
  <Tab eventKey="nothingPersonal" title="Nothing personal">
    <JustBusiness />
  </Tab>
  <Tab eventKey="StoryTime" title="Story tim">
    <StoryTime />
  </Tab>
  <Tab eventKey="Besties" title="Besties">
    <Besties />
  </Tab>
</Tabs>
  </div>;
}

export default Game;
