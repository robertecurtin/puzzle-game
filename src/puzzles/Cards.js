
import React from 'react';
import { Card, Container, Col, Row } from "react-bootstrap";
import cardinal from '../assets/cardinal.png';
import teardrop from '../assets/teardrop.png';

// is it crappy code or security by obscurity? i'll never tell

function Icon(props) {
  return <img
  src={props.val == "c" ? cardinal : teardrop }
  style={{maxHeight: 100, maxWidth: 100, transform: props.val == "r" ? "scaleX(-1)" : "" }}
  />;
}

const array = [
  ["c", "c", "c", "t"],
  ["t", "c", "t", "c", "c" ],
  ["c", "r", "r", "c", "c", "c", "t"],
];

function Cards() {
  return <Card>
    <Card.Body>
      <Card.Title>Learning is not in the cards</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        All my classes are hard, no matter what school I go to!
      </Card.Subtitle>
      <Container>
        {array.map((row) => {
          return <Row key={row} >
            {row.map((col) => {
              return <Col key={col} md="auto" > <Icon val={col} /> </Col>;
            })}
            <Col fluid />
          </Row>;
        })}
      </Container>
    </Card.Body>
  </Card>;
}

export default Cards;
