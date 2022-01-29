
import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import PuzzleTabContainer from '../components/PuzzleTabContainer';

function StoryTime() {
  const clues = [
    "Our uninvited picnic guests each wore three pairs of jeans",
    "When I learned my Dr. owned Death Row, I realized my situation was extremely serious",
    "Every atom in our bodies were filled with energy as we reached the holy city",
    "I could not focus on the moon landing hoax video because every word the presenter said came through his nose",
    "The new power production device faced heavy opposition from the local religious leader",
    "The assassin demonstrated great ability",
    "They mirrored my pose in a possibly-flirtatious manner",
    "The detective ran after the suspect in order to continue the investigation",
    "Vivid visions came to me after just the right amount of alcohol",
    "My one-sided conversation in the temple made the price of admission worthwhile",
    "Our base of operations once stored some number of coins",
  ];

  return PuzzleTabContainer(
    {
      title: "Story Tim",
      subTitle: "I lov a good stry! Here are sme of my favrites:",
      puzzleId: 3,
      contents: < Stack spacing={3} >
        {clues.map((line) => {
          return <Typography key={line} variant="inherit">
            {line}
            <Divider />
          </Typography>;
        })}
      </Stack>
    }
  );
}

export default StoryTime;
