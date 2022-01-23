
import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import cardinal from '../assets/cardinal.png';
import teardrop from '../assets/teardrop.png';
import PuzzleTabContainer from '../components/PuzzleTabContainer';

// is it crappy code or security by obscurity? i'll never tell

function Icon(props) {
  return <img
    src={props.val == "c" ? cardinal : teardrop}
    style={{ maxHeight: 100, maxWidth: 100, transform: props.val == "r" ? "scaleX(-1)" : "" }}
  />;
}

const array = [
  ["c", "c", "c", "t"],
  ["t", "c", "t", "c", "c"],
  ["c", "r", "r", "c", "c", "c", "t"],
];

function Cards() {
  return PuzzleTabContainer(
    {
      title: "Learning is not in the cards",
      subTitle: "All my classes are hard, no matter what school I go to!",
      puzzleId: 1,
      contents: < Container fluid>
        {
          array.map((row, y) => {
            return <Row key={row} className="mx-auto my-3">
              {row.map((col, x) => {
                return <Col key={x+y} md="auto" > <Icon val={col} /> </Col>;
              })}
              <Col fluid />
            </Row>;
          })
        }
      </Container >
    }
  );
}

export default Cards;
