import styled from "styled-components";

const WellcomePage = () => {
  return (
    <Wrapper>
      <img src="./images/secure_chat_logo.png" alt="Sec" />
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
