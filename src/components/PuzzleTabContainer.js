import React from 'react';
import { Card } from "react-bootstrap";
import SubmitBox from '../SubmitBox';
// Contains a title, subtitle, answer submittion field, and content

const PuzzleTabContainer = (props) => {
  return <Card border="secondary" >
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {props.subTitle}
      </Card.Subtitle>
      <Card.Text>
        <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={props.puzzleId} />
        {props.contents}
      </Card.Text>
    </Card.Body>
  </Card>;
};

export default PuzzleTabContainer;
