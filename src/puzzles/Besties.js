
import React from 'react';
import ageRestricted from "../assets/age-restricted.jpeg";
import lonely from "../assets/lonely.jpg";
import mirror from "../assets/mirror.png";
import dallOrGrante from "../assets/dall_or_grante.jpg";
import furious from "../assets/furious.png";
import holey from "../assets/holey.jpg";
import head from "../assets/head.png";
import bigGuysBadSide from "../assets/big_guys_bad_side.jpg";
import boratPriya from "../assets/borat_priya.jpg";
import clifford from "../assets/clifford.jpg";
import terminal from "../assets/terminal.png";
import { ImageListItem, ImageListItemBar, Stack } from '@mui/material';
import PuzzleTabContainer from '../components/PuzzleTabContainer';

function Besties() {
  function Image(props) {
    return <img
      src={props.image}
      style={{ maxHeight: 500, maxWidth: 500, width:"100%" }}
    />;
  }

  const clues = [
    { image: dallOrGrante, clue: 6 },
    { image: holey, clue: 7 },
    { image: boratPriya, clue: 6 },
    { image: head, clue: 5 },

    { image: bigGuysBadSide, clue: 5 },
    { image: furious, clue: 7 },
    { image: clifford, clue: 8 },
    { image: boratPriya, clue: 6 },
    { image: furious, clue: 7 },
    { image: mirror, clue: 12 },

    { image: terminal, clue: 7 },
    { image: lonely, clue: 7 },
    { image: ageRestricted, clue: 8 },
    { image: mirror, clue: 12 }
  ];

  return PuzzleTabContainer(
    {
      title: "Besties",
      subTitle: "hese are some of my friends! They promise they'll behave...",
      puzzleId: 2,
      contents: < Stack spacing={2} >
        {clues.map((line) => {
          return <ImageListItem key={line}>
                <Image image={line.image} />
                <ImageListItemBar title={line.clue} />
              </ImageListItem>;
        })}
      </Stack>
    }
  );
  // return <Card>
  //   <Card.Body>
  //     <Card.Title>{"Besties"}</Card.Title>
  //     <Card.Subtitle className="mb-2 text-muted">
  //       {"These are some of my friends! They promise they'll behave..."}
  //     </Card.Subtitle>
  //     <Card.Text>
  //       <Stack gap={3}>
  //         <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={2} />
  //         {clues.map((line) => {
  //           return <div key={line}>
  //             <Image image={line} />
  //           </div>;
  //         })}
  //       </Stack>
  //     </Card.Text>
  //   </Card.Body>
  // </Card >;
}

export default Besties;
