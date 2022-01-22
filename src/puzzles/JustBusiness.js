
import React from 'react';
import { Card, Stack } from "react-bootstrap";
import SubmitBox from '../SubmitBox';

function JustBusiness() {
  const clues = [
    "Only Bolsonaro can destroy it",
    "Robert and his strip of brined salmon",
    "Long-range nuclear capability (-C)",
    "Pirates of the Seven Seeds",
    "Instant coffee: Just add water!",
    "Turtlenecks are the original sin",
    "Defense Against the Dark Arts? No, true Gamers learn Defense Against the",
    "Catharina-Amalia isn’t sp oiled"
  ];
  return <Card>
    <Card.Body>
      <Card.Title>{"Nothing personal kid, it's just business"}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Best practices are so 1900s, worst practices are in! Take notes from the best in the business.
      </Card.Subtitle>
      <Card.Text>
        <Stack gap={3}>
          <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={2} />
          {clues.map((line) => {
            return <div key={line}>{line}</div>;
          })}
        </Stack>
      </Card.Text>
    </Card.Body>
  </Card >;
}

export default JustBusiness;
