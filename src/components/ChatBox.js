import React from 'react';
import { Button } from "react-bootstrap";

const ChatBox = (props) => {
  return <>
  <Button
  variant={props.color == "blue" ? "primary" : "success"}
  disabled
  >
    {props.text}
    </Button>
    </>;
};

export default ChatBox;
