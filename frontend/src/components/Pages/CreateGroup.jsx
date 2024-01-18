import { DoneOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CreateGroup = () => {
  return (
    <Wrapper>
      <div className="box">
        <input className="create-group-input" Placeholder="Enter Group Name" />
        <IconButton>
          <DoneOutline
            sx={{
              width: 36,
              height: 36,
              color: "royalblue",
            }}
          />
        </IconButton>
      </div>
    </Wrapper>
  );
};

export default CreateGroup;
const Wrapper = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 2rem;
  margin: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    border: 2px solid royalblue;
    width: 50%;
    border-radius: 1rem;
    height: 7rem;
    .create-group-input {
      width: 80%;
      border: none;
      padding: 1rem;
      font-size: 1.8rem;
      border: 0;
      color: #333d58;
      outline: 0;
    }
  }
`;
