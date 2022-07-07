import { SpinnerRoundFilled } from "spinners-react";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <SpinnerRoundFilled size={100} color={`${mainStyle.pointColor.red}`} />
    </Wrap>
  );
};
