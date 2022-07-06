import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";

const Wrap = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;

  img {
    width: 50%;
    height: 100%;
  }
`;

export const HomeLeft = ({ img1, img2 }) => {
  return (
    <Wrap>
      <img src={`${imgUrl}${img1}`} />
      <img src={`${imgUrl}${img2}`} />
    </Wrap>
  );
};
