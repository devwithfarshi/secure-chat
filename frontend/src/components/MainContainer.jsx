import React, { useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const MainContainer = ({ chatShow, setChatShow }) => {
  return (
    <main className="mainContainer">
      <Sidebar chatShow={chatShow} setChatShow={setChatShow} />
      <Outlet />
    </main>
  );
};

export default MainContainer;
