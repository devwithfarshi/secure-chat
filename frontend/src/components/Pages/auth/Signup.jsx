import { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { notify } from "../../../config/toast";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { instance } from "../../../config/axiosDefault";
// import axios from "axios";

const SignUp = () => {
  const [loading, setloading] = useState(false);
  // password show hide
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="logo">
        <img src="./images/secure_chat_logo.png" alt="logo" />
      </div>
      <SignUpWrapper>
        <div className="box">
          <h2>Create your account</h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              username: "",
              password: "",
              c_password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.username) {
                errors.username = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              if (!values.c_password) {
                errors.c_password = "Required";
              }
              if (
                values.password &&
                values.c_password &&
                values.password !== values.c_password
              ) {
                errors.password = "Password and confrim password dose't match!";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              return errors;
            }}
            onSubmit={async (values) => {
              setloading(true);
              try {
                const { data } = await instance.post(
                  "/api/user/register",
                  values
                );
                console.log(data);
                notify("success", data.message);
                setloading(false);
                navigate("/");
              } catch (error) {
                console.log({ error });
                notify("error", error.response.data.message);
                setloading(false);
              }
              setloading(false);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <TextField
                    onChange={handleChange}
                    name="name"
                    label="Name"
                    variant="outlined"
                    type="text"
                    sx={{ width: "100%", margin: "1rem 0" }}
                    value={values.name}
                  />
                  {errors.name && (
                    <span
                      style={{
                        color: "crimson",
                      }}
                    >
                      {errors.name && touched.name && errors.name}
                    </span>
                  )}
                  <TextField
                    onChange={handleChange}
                    value={values.username}
                    name="username"
                    label="Username"
                    variant="outlined"
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
                  <TextField
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="text"
                    sx={{ width: "100%", margin: "1rem 0" }}
                  />
                  {errors.email && (
                    <span
                      style={{
                        color: "crimson",
                      }}
                    >
                      {errors.email && touched.email && errors.email}
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
                  <FormControl
                    sx={{ width: "100%", margin: "1rem 0" }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confrim Password
                    </InputLabel>
                    <OutlinedInput
                      onChange={handleChange}
                      value={values.c_password}
                      name="c_password"
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
                      label="Confrim Password"
                    />
                  </FormControl>
                  {errors.c_password && (
                    <span
                      style={{
                        color: "crimson",
                      }}
                    >
                      {errors.c_password &&
                        touched.c_password &&
                        errors.c_password}
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
                    SignUp
                  </LoadingButton>

                  <p>
                    Allready Have an account? <Link to={"/"}>Login.</Link>
                  </p>
                </form>
              </>
            )}
          </Formik>
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
    form {
      input {
        padding: 1rem;
        font-size: 1.8rem;
        border-radius: 0.8rem;
      }
      .auth-button {
        font-size: 1.6rem;
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
  }
`;
