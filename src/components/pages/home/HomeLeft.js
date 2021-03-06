import { Link } from "react-router-dom";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";

const Wrap = styled.div`
  width: 65vw;
  height: 100vh;
  display: flex;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 50vh;
  }
  a {
    width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const HomeLeft = ({ img1, img2 }) => {
  return (
    <Wrap>
      <Link to={`msubpage/${img1.id}`}>
        <img src={`${imgUrl}${img1.poster_path}`} />
      </Link>
      <Link to={`msubpage/${img2.id}`}>
        <img src={`${imgUrl}${img2.poster_path}`} />
      </Link>
    </Wrap>
  );
};
