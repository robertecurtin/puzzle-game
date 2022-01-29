
import { Grid } from '@mui/material';
import React from 'react';
import { Avatar } from "@mui/material";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import SubmitBox from '../SubmitBox';

function Rude() {
  const chat = [
    "m’i gonna tlel you somethnig very important",
    "you are sml brain and are stinky and need a hot tbu",
    "so get on that",
    "smell you later",
    "youll probab smell bad"
  ];
  const chatLog = () => {
    return <ChatBox>
      <ReceiverMessage>
        hey
      </ReceiverMessage>
      <SenderMessage>
        hey
      </SenderMessage>
      {
        chat.map((line) => {
          return <ReceiverMessage avater={<Avatar>KS</Avatar>} key={line}>
            {line}
          </ReceiverMessage>;
        })
      }
      <SenderMessage>
        <SubmitBox prompt={"reply"} submitText={"Send"} puzzleId={0} color={"blue"} />
      </SenderMessage>
    </ChatBox>;
  };

  return <Grid container>
    <Grid item>
      {chatLog()}
    </Grid>
  </Grid>;
}

export default Rude;
