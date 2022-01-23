import React from 'react';

function Game() {
  return <div className='Game'>
    <Tabs defaultActiveKey="sadBoiHours" id="gameTabs" className="mb-3">
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
