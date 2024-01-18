import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatPage from "./Pages/ChatPage";
import WellcomePage from "./Pages/WellcomePage";
import CreateGroup from "./Pages/CreateGroup";
import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/Signup";
import OnlineUsers from "./Pages/OnlineUsers";
const MainContainer = () => {
  return (
    <main className="mainContainer">
      <Sidebar />
      {/* <WellcomePage /> */}
      {/* <ChatPage /> */}
      {/* <CreateGroup /> */}
      <OnlineUsers />
    </main>
  );
};

export default MainContainer;
