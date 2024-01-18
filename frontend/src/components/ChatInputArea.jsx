import { Add } from "@mui/icons-material";
import { Button, IconButton, Input } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ChatInputArea = () => {
  return (
    <ChatInputWrapper>
      <IconButton>
        <Add
          sx={{
            width: 36,
            height: 36,
            color: "royalblue",
          }}
        />
      </IconButton>
      {/* <input id="" type="file" /> */}
      <Input
        name="message"
        type="text"
        placeholder="Message..."
        autoFocus
        required
        sx={{
          width: "80%",
        }}
      />
      <Button variant="contained" className="send-btn">
        Send
      </Button>
    </ChatInputWrapper>
  );
};

export default ChatInputArea;
const ChatInputWrapper = styled.div`
  border-radius: 2rem;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-around;

  input {
    font-size: 1.6rem;
    &::placeholder {
      font-family: "Poppins", sans-serif;
    }
  }
  .send-btn {
    font-size: 2rem;
    background-color: royalblue;
  }
`;
