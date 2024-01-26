import { Message, Search } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo from "/public/images/secure_chat_logo.png";

const OnlineUsers = () => {
  return (
    <Wrapper>
      <div className="online-users-header">
        <img alt="logo" src={logo} />
        <h2>Online Users</h2>
      </div>
      <div className="online-users-search">
        <input
          type="text"
          name="onlineUsersSearch"
          placeholder="Search from online users"
        />
        <IconButton>
          <Search sx={{ width: 36, height: 36 }} />
        </IconButton>
      </div>
      <ul className="online-users-lists">
        <li>
          <Avatar
            src="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/414655913_687288853513928_7511808843410882816_n.jpg?ccb=11-4&oh=01_AdQyUaLJNXr7ipjA7vNgZjjs1XpdaHeG6v90yjMVKQjgSw&oe=65B38E98&_nc_sid=e6ed6c&_nc_cat=103"
            alt="user name"
          />
          <span>Sanuyar vai</span>
          <IconButton>
            <Message sx={{ width: 36, height: 36, color: "royalblue" }} />
          </IconButton>
        </li>
      </ul>
    </Wrapper>
  );
};

export default OnlineUsers;
const Wrapper = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  .online-users-header {
    padding: 1rem 0.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    img {
      margin-left: 2rem;
      width: 7rem;
    }
    h2 {
      font-size: 3.6rem;
      font-family: "Poppins", sans-serif;
    }
  }

  .online-users-search {
    margin: 2rem 0;
    padding: 1rem;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 2rem;
    display: flex;
    justify-content: space-between;
    input {
      padding: 1rem;
      width: 80%;
      margin-left: 2rem;
      font-size: 1.6rem;
      border: 0;
      outline: 0;
    }
  }

  ul {
    list-style: none;
    padding: 1rem 0.5rem;
    overflow: scroll;
    flex: 1;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      gap: 2rem;
      background-color: #fff;
      padding: 1.5rem 1rem;
      border-radius: 1rem;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      span {
        font-size: 2.4rem;
      }
      button {
        margin-left: auto;
      }
    }
  }
`;
