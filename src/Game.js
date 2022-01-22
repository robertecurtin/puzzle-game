import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SadBoiHours from './puzzles/Cards';
import Rude from './puzzles/Rude';


function Game() {
  return <div className='Game'>
    <Tabs defaultActiveKey="sadBoiHours" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="sadBoiHours" title="SadBoiHours">
    <SadBoiHours />
  </Tab>
  <Tab eventKey="rude" title="Rude">
    <Rude />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <SadBoiHours />
  </Tab>
</Tabs>
  </div>;
}

export default Game;
