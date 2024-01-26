import { Button, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src="./images/secure_chat_logo.png" alt="logo" />
      </div>
      <SignUpWrapper>
        <div className="box">
          <h2>Create your account</h2>
          <TextField name="name" label="Name" variant="outlined" type="text" />
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            type="text"
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="text"
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
          />
          <TextField
            name="c-password"
            label="Confrim Password"
            variant="outlined"
            type="password"
          />
          <Button className="auth-button" variant="contained">
            SignUp
          </Button>
          <p>
            Allready Have an account? <Link to={"/"}>Login.</Link>
          </p>
        </div>
      </SignUpWrapper>
    </Wrapper>
  );
};

export default SignUp;
const Wrapper = styled.main`
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
const SignUpWrapper = styled.div`
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
    a {
      text-decoration: underline;
      color: black;
    }
  }
`;
