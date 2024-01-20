import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const MessagesListItem = ({ image, name, message, me }) => {
  return (
    // <Lists className={`right`}>
    <Lists className={me && "right"}>
      <Avatar src={image} alt={name} sx={{ width: 36, height: 36 }} />
      <div className="info">
        <div className="help_div">
          <h6>{name}</h6>

          <span>12:10 PM</span>
        </div>
        <p>{message}</p>
      </div>
    </Lists>
  );
};

export default MessagesListItem;
const Lists = styled.li`
  margin: 2rem 0;
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
  &.right {
    flex-direction: row-reverse;
    .info {
      background-color: gray;
    }
  }
  .info {
    background-color: royalblue;
    color: #fff;
    padding: 1rem;
    max-width: 50rem;
    border-radius: 0.8rem;
    &.right {
      flex-direction: row-reverse;
      .info {
        background-color: gray;
      }
    }
    .help_div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      h6 {
        font-size: 1.6rem;
        font-family: "Poppins", sans-serif;
      }
      span {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
    p {
      font-size: 1.8rem;
    }
  }
`;
