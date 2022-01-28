import React from 'react';
import SubmitBox from '../SubmitBox';
// Contains a title, subtitle, answer submittion field, and content

const PuzzleTabContainer = (props) => {
  return <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={props.puzzleId} />;
  // return <Card border="secondary" >
  //   <Card.Body>
  //     <Card.Title>{props.title}</Card.Title>
  //     <Card.Subtitle className="mb-2 text-muted">
  //       {props.subTitle}
  //     </Card.Subtitle>
  //     <Card.Text>
  //       <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={props.puzzleId} />
  //       {props.contents}
  //     </Card.Text>
  //   </Card.Body>
  // </Card>;
};

export default PuzzleTabContainer;
