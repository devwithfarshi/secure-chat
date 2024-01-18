import { Button, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src="./images/secure_chat_logo.png" alt="logo" />
      </div>
      <LoginWrapper>
        <div className="box">
          <h2>Login to your account</h2>
          <TextField label="Email" variant="outlined" type="text" />
          <TextField label="Password" variant="outlined" type="password" />

          <Button className="auth-button" variant="contained">
            Login
          </Button>
          <p>Haven't account? Create an account</p>
        </div>
      </LoginWrapper>
    </Wrapper>
  );
};

export default Login;
const Wrapper = styled.div`
  height: 90vh;
  width: 90vw;
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  .logo {
    flex: 0.3;
    text-align: center;
  }
`;
const LoginWrapper = styled.div`
  flex: 0.7;
  border-left: 2px solid royalblue;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    padding: 3rem;
    width: 40%;
    border-radius: 0%.4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    h2 {
      font-size: 3.6rem;
      font-family: "Poppins", sans-serif;
      margin-bottom: 2rem;
      color: crimson;
      text-transform: uppercase;
      text-align: center;
    }

    input {
      padding: 1rem;
      font-size: 1.8rem;
      border-radius: 0.8rem;
    }
    .auth-button {
      font-size: 2rem;
      background-color: royalblue;
    }
  }
  p {
    font-size: 1.4rem;
    text-align: center;
    margin-top: 1rem;
  }
`;
