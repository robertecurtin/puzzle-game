import React from 'react';
import { Button } from "react-bootstrap";

const ChatBox = (props) => {
  return <>
  <Button
  variant="success"
  disabled
  >
    {props.text}
    </Button>
    </>;
};

export default ChatBox;
