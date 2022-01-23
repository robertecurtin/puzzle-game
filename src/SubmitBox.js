import React from 'react';
import { Button, Form, Col, Row, Alert } from "react-bootstrap";
import answers from "./SpoilersHereDontLookUnlessYouKnowWhatYoureGettingInto";
import terribleCypher from "./utils/terribleCypher";

const SubmitBox = (props) => {
  const [succeeded, setSucceeded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [previousGuess, setPreviousGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget;
    const expected = terribleCypher.decode(answers[props.puzzleId]);
    const actual = target[0].value.toUpperCase().replace(/[^A-Z0-9]/gi, '');
    if (expected == actual) {
      setSucceeded(true);
      setFailed(false);
    }
    else {
      setPreviousGuess(actual);
      setFailed(true);
    }
  };

  const sendButton =
    <Button
      variety="primary"
      type="submit"
      disabled={succeeded}>{succeeded ? "Correct!" : props.submitText}
    </Button>;

  const prompt = <Form.Control
    type="reply"
    placeholder={props.prompt}
    disabled={succeeded}>
  </Form.Control>;

  const response = <Alert
    dismissible
    onClose={() => setFailed(false)}
    show={failed || succeeded}
  >
    {succeeded? "Success!" : "Incorrect guess: "} {previousGuess}
  </Alert>;

  return <Form inline onSubmit={handleSubmit}>
      <Row>
        <Col>
          {prompt}
        </Col>
        <Col>
          {sendButton}
        </Col>
        <Col/>
      </Row>
      <Row><Col>{response}</Col></Row>
    </Form>;
};

export default SubmitBox;
