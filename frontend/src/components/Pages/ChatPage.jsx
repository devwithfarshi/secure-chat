import { MenuOpen, MoreVert } from "@mui/icons-material";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import styled from "styled-components";
import ChatArea from "../ChatArea";
import ChatInputArea from "../ChatInputArea";
import { useState } from "react";

const ChatPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Wrapper>
      <header className="chat-header">
        <Avatar
          alt="user name"
          src="https://res.cloudinary.com/dc2lde0cr/image/upload/v1704392044/portfolio/h495i3hfsbb3qrukpe5a.png"
          sx={{ width: 56, height: 56 }}
        />
        <div className="user-info">
          <h5>Sanuar vai</h5>
          <p>Online</p>
        </div>

        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVert
            sx={{
              width: 36,
              height: 36,
            }}
          />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            sx={{
              fontSize: "1.6rem",
            }}
          >
            Delete
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "1.6rem",
            }}
          >
            Block
          </MenuItem>
        </Menu>
      </header>

      <ChatArea />
      <ChatInputArea />
    </Wrapper>
  );
};

export default ChatPage;
const Wrapper = styled.div`
  padding: 1rem 0.5rem;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  .chat-header {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    .user-info {
      margin-left: 2rem;

      h5 {
        font-size: 2.4rem;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        margin-bottom: 0.8rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: 600;
        color: royalblue;
      }
    }
  }
`;
