import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import { LoadingButton } from "@mui/lab";
import { notify } from "../../../config/toast";
import axios from "axios";
import { instance } from "../../../config/axiosDefault";
const Login = () => {
  const [loading, setloading] = useState(false);
  // password show hide
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/app/wellcome");
    }
  }, []);

  return (
    <Wrapper>
      <div className="logo">
        <img src="/images/secure_chat_logo.png" alt="logo" />
      </div>
      <LoginWrapper>
        <div className="box">
          <h2>Login to your account</h2>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              return errors;
            }}
            onSubmit={async (values) => {
              setloading(true);
              try {
                const { data } = await instance.post("/api/user/login", values);
                console.log(data);
                notify("success", data.message);
                localStorage.setItem("token", data.token);
                // console.log(data.token);
                setloading(false);
                navigate("/app/wellcome");
              } catch (error) {
                console.log({ error });
                notify("error", error.response.data.message);
                setloading(false);
              }
              setloading(false);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  name="username"
                  label="Email or Username"
                  variant="outlined"
                  value={values.username}
                  onChange={handleChange}
                  type="text"
                  sx={{ width: "100%", margin: "1rem 0" }}
                />
                {errors.username && (
                  <span
                    style={{
                      color: "crimson",
                    }}
                  >
                    {errors.username && touched.username && errors.username}
                  </span>
                )}
                <FormControl
                  sx={{ width: "100%", margin: "1rem 0" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                {errors.password && (
                  <span
                    style={{
                      color: "crimson",
                    }}
                  >
                    {errors.password && touched.password && errors.password}
                  </span>
                )}
                <LoadingButton
                  loading={loading}
                  sx={{
                    width: "100%",
                    margin: "1rem 0",
                    "&:disabled": {
                      background: "#aaa !important",
                    },
                  }}
                  className="auth-button"
                  variant="contained"
                  type="submit"
                >
                  Log In
                </LoadingButton>
                <p>
                  Haven't account?{" "}
                  <Link to={"/signup"}>Create an account.</Link>
                </p>
              </form>
            )}
          </Formik>
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
    a {
      text-decoration: underline;
      color: black;
    }
  }
`;
