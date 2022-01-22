import React from 'react';
import { Button, Form, Col, Row } from "react-bootstrap";
import answers from "./SpoilersHereDontLookUnlessYouKnowWhatYoureGettingInto";
import terribleCypher from "./utils/terribleCypher";

const SubmitBox = (props) => {
  const [succeeded, setSucceeded] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget;
    const expected = terribleCypher.decode(answers[props.puzzleId]);
    const actual = target[0].value;
    if (expected == actual) {
      setSucceeded(true);
    }
  };

  return <>
    <Form inline onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control type="reply" placeholder={props.prompt} disabled={succeeded} ></Form.Control>
        </Col>
        <Col>
          <Button variety="primary" type="submit" disabled={succeeded} >{
          succeeded ? "Correct!" : props.submitText}
          </Button>
        </Col>
      </Row>
    </Form>
  </>;
};

export default SubmitBox;
