import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";
const MainContainer = () => {
  return (
    <main className="mainContainer">
      <Sidebar />
      <WorkArea />
    </main>
  );
};

export default MainContainer;
