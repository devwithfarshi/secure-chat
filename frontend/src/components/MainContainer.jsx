import React, { useEffect, useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../reducer/userSlice";
const MainContainer = ({ chatShow, setChatShow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUser(token));
    } else {
      navigate("/");
    }
  }, []);
  return (
    <main className="mainContainer">
      <Sidebar chatShow={chatShow} setChatShow={setChatShow} />
      <Outlet />
    </main>
  );
};

export default MainContainer;
