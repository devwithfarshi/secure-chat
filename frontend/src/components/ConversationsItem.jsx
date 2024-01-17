import { Avatar } from "@mui/material";
import { useState } from "react";

const ConversationsItem = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Sanuar vai",
      lastMessage: {
        message: "Okay bro...",
        read: true,
      },
      image:
        "https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/414655913_687288853513928_7511808843410882816_n.jpg?ccb=11-4&oh=01_AdQyUaLJNXr7ipjA7vNgZjjs1XpdaHeG6v90yjMVKQjgSw&oe=65B38E98&_nc_sid=e6ed6c&_nc_cat=103",
    },
    {
      name: "MD Salman Farshi",
      lastMessage: {
        message: "no no",
        read: false,
      },
      image:
        "https://res.cloudinary.com/dc2lde0cr/image/upload/v1704392044/portfolio/h495i3hfsbb3qrukpe5a.png",
    },
    {
      name: "Sanuar vai",
      lastMessage: {
        message: "Okay bro...",
        read: true,
      },
      image: "",
    },
    {
      name: "MD Salman Farshi",
      lastMessage: {
        message: "i have done yet!",
        read: false,
      },
      image: "",
    },
  ]);
  return (
    <>
      <ul className="conversations-lists">
        {conversations.map((v) => (
          <>
            {/* <li className="conversations-list-item"> */}
            <li
              className={`conversations-list-item ${
                !v.lastMessage.read && "unreed"
              } `}
            >
              <Avatar
                alt={v.name}
                src={v.image || v.name[0]}
                sx={{ width: 56, height: 56 }}
              />
              <div className="info">
                <span className="userName">{v.name}</span>
                <p>{v.lastMessage.message}</p>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default ConversationsItem;
