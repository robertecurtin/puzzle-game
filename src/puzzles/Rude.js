
import React from 'react';
import { Card, Stack, Container, Col, Row } from "react-bootstrap";
import ChatBox from '../ChatBox';
import InputBox from '../InputBox';

function Rude() {
  const chat = [
    "m’i gonna tlel you somethnig very important",
    "you are sml brain and are stinky and need a hot tbu",
    "so get on that",
    "smell you later",
    "youll probab smell bad"
  ];
  return <Card>
    <Card.Body>
      <Card.Title>Rude</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">whats up nerd</Card.Subtitle>
      <Card.Text>
        <Container>
          <Row>
            <Col fluid>
              <Stack gap={3}>
                {chat.map((line) => {
                  return <ChatBox key={line} text={line} />;
                })}
              </Stack>
            </Col>
          <Col fluid />
        </Row>
        <Row>
          <Col fluid />
          <Col fluid>
            <InputBox prompt={"reply"} submitText={"Send"} puzzleId={0} />
          </Col>
        </Row>
      </Container>
    </Card.Text>
  </Card.Body>
  </Card >;
}

export default Rude;
