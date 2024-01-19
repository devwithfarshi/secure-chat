import styled from "styled-components";
import logo from "../../../public/images/secure_chat_logo.png";
const WellcomePage = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <h4>Start conversations with your friends!</h4>
    </Wrapper>
  );
};

export default WellcomePage;
const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h4 {
    font-size: 3.6rem;
    font-weight: 300;
    margin-top: 2rem;
  }
`;
