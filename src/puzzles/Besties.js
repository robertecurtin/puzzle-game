
import React from 'react';
import { Card, Stack } from "react-bootstrap";
import SubmitBox from '../SubmitBox';
import lonely from "../assets/lonely.jpg";
import mirror from "../assets/mirror.png";
import dallOrGrante from "../assets/dall_or_grante.jpg";
import furious from "../assets/furious.png";
import holey from "../assets/holey.jpg";
import head from "../assets/head.png";
import bigGuysBadSide from "../assets/big_guys_bad_side.jpg";
import clifford from "../assets/clifford.jpg";
import terminal from "../assets/terminal.png";

function Besties() {
  function Image(props) {
    return <img
      src={props.image}
      style={{ maxHeight: 500, maxWidth: 500 }}
    />;
  }

  const notSure = head;

  const clues = [
    dallOrGrante,
    holey,
    notSure,
    head,

    bigGuysBadSide,
    furious,
    clifford,
    notSure,
    furious,
    mirror,

    terminal,
    lonely,
    notSure,
    mirror
  ];

  return <Card>
    <Card.Body>
      <Card.Title>{"Besties"}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {"These are some of my friends! They promise they'll behave..."}
      </Card.Subtitle>
      <Card.Text>
        <Stack gap={3}>
          <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={2} />
          {clues.map((line) => {
            return <div key={line}>
              <Image image={line} />
            </div>;
          })}
        </Stack>
      </Card.Text>
    </Card.Body>
  </Card >;
}

export default Besties;
