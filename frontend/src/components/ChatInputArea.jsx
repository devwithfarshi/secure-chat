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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 2rem;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    font-size: 1.6rem;
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  .send-btn {
    font-size: 2rem;
    background-color: royalblue;
    @media (max-width: 768px) {
      font-size: 1.6rem;
      padding: 0.5rem 1rem;
    }
  }
`;
