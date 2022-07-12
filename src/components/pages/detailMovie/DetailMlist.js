import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { mainStyle } from "../../../styles/globalStyle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transform: translateY(-230px);
`;
const MenuBox = styled.ul`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  padding: 10px;
  width: 500px;
  /* margin-right: 100px; */
`;
const Menu = styled.li`
  font-size: 24px;
  color: ${mainStyle.color.p};
  cursor: pointer;
  &:hover {
    color: ${mainStyle.color.main};
  }
`;

const MWrap = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 20px;
  overflow: hidden;
`;
const Mlist = styled.div`
  height: 400px;
`;
const ConWrap = styled.div`
  transition: 0.5s;
  height: 350px;
  cursor: pointer;
  margin-top: 50px;
  &:hover {
    transform-origin: bottom;
    height: 400px;
    margin-top: 0;
  }
`;
const MImg = styled.div`
  width: 100%;
  height: 80%;
`;
const MTitle = styled.div`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
`;

export const DetailMlist = ({ db, db2, db3 }) => {
  const [menu, setMenu] = useState("0px");
  const [bgId, setBgid] = useState("");
  console.log(bgId);
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 8.2,
        spaceBetween: 25,
      },
    },
  };
  return (
    <Container>
      <MenuBox>
        <Menu
          onClick={() => {
            setMenu("0");
          }}
        >
          최신영화
        </Menu>
        <Menu
          onClick={() => {
            setMenu("-400px");
          }}
        >
          인기영화
        </Menu>
        <Menu
          onClick={() => {
            setMenu("-800px");
          }}
        >
          추천영화
        </Menu>
      </MenuBox>
      <MWrap>
        <Mlist style={{ transform: `translatey(${menu})` }}>
          <Swiper modules={[Navigation]} {...params}>
            {db.map((db) => (
              <SwiperSlide key={db.id}>
                <ConWrap
                  onClick={() => {
                    setBgid(db.id);
                  }}
                >
                  <MImg
                    style={{
                      background: `url(${imgUrl}${db.poster_path}) no-repeat center/cover`,
                    }}
                  ></MImg>
                  <MTitle>{db.title}</MTitle>
                </ConWrap>
              </SwiperSlide>
            ))}
          </Swiper>
        </Mlist>

        <Mlist style={{ transform: `translatey(${menu})` }}>
          <Swiper modules={[Navigation]} {...params}>
            {db2.map((db2) => (
              <SwiperSlide key={db2.id}>
                <ConWrap
                  onClick={() => {
                    setBgid(db2.id);
                  }}
                >
                  <MImg
                    style={{
                      background: `url(${imgUrl}${db2.poster_path}) no-repeat center/cover`,
                    }}
                  ></MImg>
                  <MTitle>{db2.title}</MTitle>
                </ConWrap>
              </SwiperSlide>
            ))}
          </Swiper>
        </Mlist>
        <Mlist style={{ transform: `translatey(${menu})` }}>
          <Swiper modules={[Navigation]} {...params}>
            {db3.map((db3) => (
              <SwiperSlide key={db3.id}>
                <ConWrap
                  onClick={() => {
                    setBgid(db3.id);
                  }}
                >
                  <MImg
                    style={{
                      background: `url(${imgUrl}${db3.poster_path}) no-repeat center/cover`,
                    }}
                  ></MImg>
                  <MTitle>{db3.title}</MTitle>
                </ConWrap>
              </SwiperSlide>
            ))}
          </Swiper>
        </Mlist>
      </MWrap>
    </Container>
  );
};
