import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: ${mainStyle.padding};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
  a {
    color: ${mainStyle.pointColor.red};
    font-size: 38px;
    font-weight: 700;
  }
`;
const MenuWrap = styled.ul`
  display: flex;
`;
const Menu = styled.li`
  margin-left: 100px;
  &:first-child {
    margin-left: 0;
  }
  a {
    font-size: 20px;
    &:hover {
      color: ${mainStyle.pointColor.red};
      font-weight: 700;
    }
  }
`;
const Icon = styled.div`
  font-size: 24px;
  a {
    &:hover {
      color: ${mainStyle.pointColor.red};
    }
  }
`;

export const Header = () => {
  // const [homecolor, setHomecolor] = useState(`${mainStyle.pointColor.red}`);
  // const [moviecolor, setMoviecolor] = useState(`${mainStyle.color.sub}`);
  // const [tvcolor, setTvcolor] = useState(`${mainStyle.color.sub}`);
  // const [searchcolor, setSearchcolor] = useState(`${mainStyle.color.sub}`);
  // const [upcommingcolor, setUpcommingcolor] = useState(
  //   `${mainStyle.color.sub}`
  // );

  // const homeClick = () => {
  //   setHomecolor(`${mainStyle.pointColor.red}`);
  //   setMoviecolor(`${mainStyle.color.sub}`);
  //   setTvcolor(`${mainStyle.color.sub}`);
  //   setSearchcolor(`${mainStyle.color.sub}`);
  //   setUpcommingcolor(`${mainStyle.color.sub}`);
  // };
  // const movieClick = () => {
  //   setHomecolor(`${mainStyle.color.sub}`);
  //   setMoviecolor(`${mainStyle.pointColor.red}`);
  //   setTvcolor(`${mainStyle.color.sub}`);
  //   setSearchcolor(`${mainStyle.color.sub}`);
  //   setUpcommingcolor(`${mainStyle.color.sub}`);
  // };
  // const tvClick = () => {
  //   setHomecolor(`${mainStyle.color.sub}`);
  //   setMoviecolor(`${mainStyle.color.sub}`);
  //   setTvcolor(`${mainStyle.pointColor.red}`);
  //   setSearchcolor(`${mainStyle.color.sub}`);
  //   setUpcommingcolor(`${mainStyle.color.sub}`);
  // };
  // const searchClick = () => {
  //   setHomecolor(`${mainStyle.color.sub}`);
  //   setMoviecolor(`${mainStyle.color.sub}`);
  //   setTvcolor(`${mainStyle.color.sub}`);
  //   setSearchcolor(`${mainStyle.pointColor.red}`);
  //   setUpcommingcolor(`${mainStyle.color.sub}`);
  // };
  // const upcommingClick = () => {
  //   setHomecolor(`${mainStyle.color.sub}`);
  //   setMoviecolor(`${mainStyle.color.sub}`);
  //   setTvcolor(`${mainStyle.color.sub}`);
  //   setSearchcolor(`${mainStyle.color.sub}`);
  //   setUpcommingcolor(`${mainStyle.pointColor.red}`);
  // };
  return (
    <SHeader>
      <Wrap>
        <Logo>
          <Link to={"/"}>J Movie</Link>
        </Logo>
        <MenuWrap>
          <Menu>
            <Link to={"/"}>Home</Link>
          </Menu>
          <Menu>
            <Link to={"/detailMovie"}>Movies</Link>
          </Menu>
          <Menu>
            <Link to={"/detailTv"}>TV Shows</Link>
          </Menu>
          <Menu>
            <Link to={"/upComming"}>Up Comming</Link>
          </Menu>
        </MenuWrap>
        <Icon>
          <Link to={"/search"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </Icon>
      </Wrap>
    </SHeader>
  );
};
