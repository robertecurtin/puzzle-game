
import React from 'react';
import { Card, Container, Col, Row } from "react-bootstrap";
import ChatBox from '../components/ChatBox';
import SubmitBox from '../SubmitBox';

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
      <Card.Title>{"whats up nerd"}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        i always say what i mean
      </Card.Subtitle>
      <Card.Text>
        <Container fluid>
          {chatLog()}
          <Row>
            <Col fluid />
            <Col fluid>
              <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={0} color={"blue"} />
            </Col>
          </Row>
        </Container>
      </Card.Text>
    </Card.Body>
  </Card >;

  function chatLog() {
    return <Row>
      <Container>
        <Row>
          <Col>
            <ChatBox key={"hey"} text={"hey"} />
          </Col>
        </Row>
        <Row>
          <Col fluid />
          <Col >
            <ChatBox key={"hey"} text={"hey"} color={"blue"} />
          </Col>
        </Row>
        <Row>
          <Col fluid>
            {chat.map((line) => {
              return <Row key={line}>
                <Col>
                  <ChatBox text={line} />
                </Col>
              </Row>;
            })}
          </Col>
        </Row>
      </Container>
    </Row>;
  }
}

export default Rude;
