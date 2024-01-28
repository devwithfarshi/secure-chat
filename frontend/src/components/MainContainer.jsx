import React, { useEffect, useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../reducer/userSlice";
import { MutatingDots } from "react-loader-spinner";

const MainContainer = ({ chatShow, setChatShow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUser(token));
    } else {
      navigate("/");
    }
  }, []);
  if (isLoading) {
    return (
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4169e1"
        secondaryColor="#dc143c"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }

  return (
    <main className="mainContainer">
      <Sidebar chatShow={chatShow} setChatShow={setChatShow} />
      <Outlet />
    </main>
  );
};

export default MainContainer;
