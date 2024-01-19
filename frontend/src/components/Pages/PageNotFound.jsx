import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFound = () => {
  return (
    <Wrapper>
      <h2>404</h2>
      <h5>Your requested page not found!</h5>
      <Link to={"/"}>
        <Button className="go-back-btn" variant="outlined">
          Go Back
        </Button>
      </Link>
    </Wrapper>
  );
};

export default PageNotFound;
const Wrapper = styled.main`
  text-align: center;
  h2 {
    font-size: 6rem;
  }
  h5 {
    margin: 2rem 0;
    font-size: 3rem;
    word-spacing: 0.5rem;
  }
  a .go-back-btn {
    padding: 1rem 2rem;
    font-size: 2rem;
  }
`;
