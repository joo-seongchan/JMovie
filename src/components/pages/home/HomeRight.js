import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";

const RightWrap = styled.div`
  width: 35vw;
  min-width: 300px;
  height: 100vh;
  @media screen and (max-width: 500px) {
    width: 100vw;
    min-width: 0px;
  }
`;

const TvImgWrap = styled.div`
  width: 100%;
  height: 50%;
  img {
    width: 50%;
    height: 100%;
  }
`;

const MenuWrap = styled.div`
  width: 100%;
  height: 50%;
  padding: 5px;
`;

const MainMenuWrap = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

const MainBox = styled.div`
  width: 50%;
  height: 100%;
  transition: 0.5s;
  background-color: ${mainStyle.bgColor};
  border: 3px solid ${mainStyle.pointColor.red};
  transform: scale(0.95);
  &:nth-child(2) {
    border: 3px solid ${mainStyle.pointColor.green};
  }

  span {
    font-size: 16px;
    margin-top: 10px;
    transition: 0.5s;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    letter-spacing: -1px;
    font-size: 36px;
    font-weight: 700;
    line-height: 35px;
    transition: 0.5s;
    @media screen and (max-width: 1000px) {
      font-size: 28px;
    }
  }
  &:hover {
    background-color: ${mainStyle.pointColor.red};
    transform: scale(1);
    span {
      font-size: 18px;
      text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    a {
      font-size: 38px;
      text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    &:nth-child(2) {
      background-color: ${mainStyle.pointColor.green};
    }
  }
`;

const SubMenuWrap = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  a {
    width: 25%;
    height: 100%;
    display: block;
    &:nth-child(1) {
      div {
        border: 3px solid ${mainStyle.pointColor.red};
        &:hover {
          background-color: ${mainStyle.pointColor.red};
        }
      }
    }
    &:nth-child(2) {
      div {
        border: 3px solid ${mainStyle.pointColor.red};
        &:hover {
          background-color: ${mainStyle.pointColor.red};
        }
      }
    }
  }
`;

const SubMenu = styled.div`
  transform: scale(0.9);
  transition: 0.5s;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${mainStyle.pointColor.green};
  flex-direction: column;
  font-size: 20px;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
  &:hover {
    transform: scale(1);
    border: 3px solid ${mainStyle.bgColor};
    background-color: ${mainStyle.pointColor.green};

    font-size: 22px;
  }
`;

const TitleMenuWrap = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  a {
    display: block;
    width: 100%;
    height: 100%;
    &:nth-child(2) {
      div {
        border: 3px solid ${mainStyle.pointColor.green};
        &:hover {
          border: 3px solid ${mainStyle.bgColor};
          background-color: ${mainStyle.pointColor.green};
        }
      }
    }
  }
`;
const TitleMenu = styled.div`
  width: 100%;
  height: 100%;
  transform: scale(0.95);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  border: 3px solid ${mainStyle.pointColor.red};
  &:hover {
    transform: scale(1);
    border: 3px solid ${mainStyle.bgColor};
    background-color: ${mainStyle.pointColor.red};
    font-size: 28px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const HomeRight = ({ img1, img2 }) => {
  return (
    <RightWrap>
      <TvImgWrap>
        <Link to={`/tsubpage/${img1.id}`}>
          <img src={`${imgUrl}${img1.poster_path}`} />
        </Link>
        <Link to={`/tsubpage/${img2.id}`}>
          <img src={`${imgUrl}${img2.poster_path}`} />
        </Link>
      </TvImgWrap>
      <MenuWrap>
        <MainMenuWrap>
          <MainBox>
            <Link to="/detailMovie">
              Movies
              <br />
              <span>
                더 보기 <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </MainBox>
          <MainBox>
            <Link to="/detailTv">
              TV Shows
              <br />
              <span>
                더 보기 <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </MainBox>
        </MainMenuWrap>

        <SubMenuWrap>
          <Link to="/detailMovie">
            <SubMenu>인기영화</SubMenu>
          </Link>
          <Link to="detailMovie">
            <SubMenu>최신영화</SubMenu>
          </Link>
          <Link to="/detailTv">
            <SubMenu>인기방송</SubMenu>
          </Link>
          <Link to="/detailTv">
            <SubMenu>최신방송</SubMenu>
          </Link>
        </SubMenuWrap>
        <TitleMenuWrap>
          <Link to="/upComming">
            <TitleMenu>개봉예정영화</TitleMenu>
          </Link>
          <Link to="/search">
            <TitleMenu>
              <FontAwesomeIcon
                style={{ marginRight: "20px" }}
                icon={faSearch}
              />
              검색
            </TitleMenu>
          </Link>
        </TitleMenuWrap>
      </MenuWrap>
    </RightWrap>
  );
};
