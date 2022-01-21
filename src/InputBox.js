import React from 'react';
import { Button, Form } from "react-bootstrap";
import answers from "./SpoilersHereDontLookUnlessYouKnowWhatYoureGettingInto";

const InputBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget;
    console.log(target.firstChild.value, answers.answer1);
    if (answers.answer1 == target.firstChild.value) {
      console.log("you did it!");
    }
    else {
      console.log("nah boooo");
    }
  };

  return <>
    <Form onSubmit={handleSubmit}>
      <Form.Control type="reply" placeholder="reply"></Form.Control>
      <Button variety="primary" type="submit">Send</Button>
    </Form>
  </>;
};

export default InputBox;
