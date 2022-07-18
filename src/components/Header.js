import {
  faBars,
  faClose,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import { Logdata } from "./pages/login/Logdata";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: ${mainStyle.padding};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
    height: 60px;
  }
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
    font-size: 28px;
    font-weight: 700;
  }
  @media screen and (max-width: 500px) {
    a {
      font-size: 24px;
    }
  }
`;
const MenuWrap = styled.ul`
  display: flex;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;
const Menu = styled.li`
  margin-left: 100px;
  &:first-child {
    margin-left: 0;
  }
  a {
    font-size: 18px;
    &:hover {
      color: ${mainStyle.pointColor.red};
    }
  }
`;
const Icon = styled.div`
  font-size: 22px;
  a {
    margin-left: 50px;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      color: ${mainStyle.pointColor.red};
    }
  }
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const MoMenuWrap = styled.div`
  display: none;
  @media screen and (max-width: 1080px) {
    display: block;
  }
`;

const MOIcon = styled.div`
  font-size: 28px;
`;

const MoMenus = styled.ul`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const MoCloseIcon = styled.div`
  font-size: 28px;
  position: absolute;
  top: 20px;
  right: 30px;
`;

const MoMenu = styled.li`
  width: 90%;
  height: 15%;
  font-size: 32px;
  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Header = () => {
  const [momenu, setMomenu] = useState("none");
  return (
    <SHeader>
      <Wrap>
        <Logo>
          <Link to={"/"}>J MOVIE</Link>
        </Logo>
        <MenuWrap>
          <Menu>
            <Link to={"/"}>HOME</Link>
          </Menu>
          <Menu>
            <Link to={"/detailMovie"}>MOVIES</Link>
          </Menu>
          <Menu>
            <Link to={"/detailTv"}>TV SHOWS</Link>
          </Menu>
          <Menu>
            <Link to={"/upComming"}>UP COMMING</Link>
          </Menu>
        </MenuWrap>
        <Icon>
          <Link to={"/search"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link to={"/login"}>Login</Link>
        </Icon>
        <MoMenuWrap>
          <MOIcon
            onClick={() => {
              setMomenu("flex");
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </MOIcon>
          <MoMenus style={{ display: `${momenu}` }}>
            <MoCloseIcon
              onClick={() => {
                setMomenu("none");
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </MoCloseIcon>
            <MoMenu
              onClick={() => {
                setMomenu("none");
              }}
            >
              <Link to={"/detailMovie"}>Movies</Link>
            </MoMenu>
            <MoMenu
              onClick={() => {
                setMomenu("none");
              }}
            >
              <Link to={"/detailTv"}>TV Shows</Link>
            </MoMenu>
            <MoMenu
              onClick={() => {
                setMomenu("none");
              }}
            >
              <Link to={"/upComming"}>Up Comming</Link>
            </MoMenu>
            <MoMenu
              onClick={() => {
                setMomenu("none");
              }}
            >
              <Link to={"/search"}>Search</Link>
            </MoMenu>
            <MoMenu
              onClick={() => {
                setMomenu("none");
              }}
            >
              <Link to={"/login"}>Login</Link>
            </MoMenu>
          </MoMenus>
        </MoMenuWrap>
      </Wrap>
    </SHeader>
  );
};
