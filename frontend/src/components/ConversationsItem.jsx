import { Avatar } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const ConversationsItem = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([
    {
      name: "Shariful islamn",
      lastMessage: {
        message: "Accha...",
        read: true,
      },
      image:
        "https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/414655913_687288853513928_7511808843410882816_n.jpg?ccb=11-4&oh=01_AdQyUaLJNXr7ipjA7vNgZjjs1XpdaHeG6v90yjMVKQjgSw&oe=65B38E98&_nc_sid=e6ed6c&_nc_cat=103",
    },
    {
      name: "MD Salman Farshi",
      lastMessage: {
        message:
          "pore vai ar kicu to janailen na..ekn ki korbo? bolen kicu nahole to somossay porbo!",
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
            <motion.li
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => {
                navigate("/app/chat");
              }}
              key={v.name}
              className={`conversations-list-item ${
                !v.lastMessage.read && "unreed"
              } `}
            >
              <Avatar
                alt={v.name}
                src={v.image || v.name[0]}
                sx={{ width: 50, height: 50 }}
              />
              <div className="info">
                <span className="userName">{v.name}</span>

                {v.lastMessage.message.length > 45 ? (
                  <p>{v.lastMessage.message.slice(0, 45)}...</p>
                ) : (
                  <p>{v.lastMessage.message}</p>
                )}
              </div>
            </motion.li>
          </>
        ))}
      </ul>
    </>
  );
};

export default ConversationsItem;
