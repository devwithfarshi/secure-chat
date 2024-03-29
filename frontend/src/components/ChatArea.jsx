import React from "react";
import styled from "styled-components";
import MessagesListItem from "./MessagesListItem";

const ChatArea = () => {
  return (
    <ChatAreaWrapper>
      <MessagesListItem
        image={
          "https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/414655913_687288853513928_7511808843410882816_n.jpg?ccb=11-4&oh=01_AdQyUaLJNXr7ipjA7vNgZjjs1XpdaHeG6v90yjMVKQjgSw&oe=65B38E98&_nc_sid=e6ed6c&_nc_cat=103"
        }
        name="Sanuar vai"
        message="Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
      />
      <MessagesListItem
        image="https://res.cloudinary.com/dc2lde0cr/image/upload/v1704392044/portfolio/h495i3hfsbb3qrukpe5a.png"
        name="Salman Farshi"
        message="Lorem ipsum dolor sit amet"
        me={true}
      />
    </ChatAreaWrapper>
  );
};

export default ChatArea;

const ChatAreaWrapper = styled.ul`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: #fff;
  list-style: none;
  border-radius: 2rem;
  margin: 2rem 0;
  padding: 1rem;
  flex: 1;
  @media (max-width: 768px) {
    flex: 0.9;
  }
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
