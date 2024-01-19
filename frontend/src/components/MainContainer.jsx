import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatPage from "./Pages/ChatPage";
import WellcomePage from "./Pages/WellcomePage";
import CreateGroup from "./Pages/CreateGroup";
import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/Signup";
import OnlineUsers from "./Pages/OnlineUsers";
import OnlineGroups from "./Pages/OnlineGroups";
import { Outlet } from "react-router-dom";
const MainContainer = () => {
  return (
    <main className="mainContainer">
      <Sidebar />
      <Outlet />
      {/* <WellcomePage /> */}
      {/* <ChatPage /> */}
      {/* <CreateGroup /> */}
      {/* <OnlineUsers /> */}
      {/* <OnlineGroups /> */}
    </main>
  );
};

export default MainContainer;
