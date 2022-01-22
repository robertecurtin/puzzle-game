import React from 'react';
import { Button, Form } from "react-bootstrap";
import answers from "./SpoilersHereDontLookUnlessYouKnowWhatYoureGettingInto";
import terribleCypher from "./utils/terribleCypher";

const InputBox = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget;
    const expected = terribleCypher.decode(answers[props.puzzleId]);
    const actual = target.firstChild.value;
    console.log(expected, actual);
    if (expected == actual) {
      console.log("you did it!");
    }
    else {
      console.log("nah boooo");
    }
  };

  return <>
    <Form onSubmit={handleSubmit}>
      <Form.Control type="reply" placeholder={props.prompt}></Form.Control>
      <Button variety="primary" type="submit">{props.submitText}</Button>
    </Form>
  </>;
};

export default InputBox;
