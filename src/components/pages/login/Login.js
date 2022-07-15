import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1``;
const LogWrap = styled.div``;
const UserNmae = styled.input``;
const Password = styled.input``;
const Button = styled.button``;

export const Login = () => {
  return (
    <Section>
      <Title>J Movie</Title>
      <LogWrap>
        <form>
          <UserNmae />
          <Password />
          <Button></Button>
        </form>
      </LogWrap>
    </Section>
  );
};
