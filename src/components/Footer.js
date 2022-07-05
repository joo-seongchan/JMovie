import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 18px;
`;

export const Footer = () => {
  return <Wrap>&copy; Joo-seongchan</Wrap>;
};
