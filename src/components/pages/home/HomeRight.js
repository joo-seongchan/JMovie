import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";

const RightWrap = styled.div`
  width: 40vw;
  min-width: 400px;
  height: 100vh;
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
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;
  background-color: ${mainStyle.pointColor.red};
  border: 5px solid ${mainStyle.bgColor};
  &:nth-child(2) {
    background-color: ${mainStyle.pointColor.green};
  }
  span {
    font-size: 24px;
    margin-top: 10px;
  }
`;

const SubMenuWrap = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  margin-top: 5px;
  a {
    width: 25%;
    height: 100%;
    display: block;
    &:nth-child(1) {
      div {
        background-color: ${mainStyle.pointColor.red};
      }
    }
    &:nth-child(2) {
      div {
        background-color: ${mainStyle.pointColor.red};
      }
    }
  }
`;

const SubMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${mainStyle.pointColor.green};
  border: 5px solid ${mainStyle.bgColor};
  flex-direction: column;
  font-size: 20px;
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
        background-color: ${mainStyle.pointColor.green};
      }
    }
  }
`;
const TitleMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  border: 5px solid ${mainStyle.bgColor};
  background-color: ${mainStyle.pointColor.red};
`;

export const HomeRight = ({ img1, img2 }) => {
  return (
    <RightWrap>
      <TvImgWrap>
        <Link to="#">
          <img src={`${imgUrl}${img1}`} />
        </Link>
        <Link to="#">
          <img src={`${imgUrl}${img2}`} />
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
