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
  transform: translateY(-170px);
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
  height: 300px;
  margin-top: 20px;
  overflow: hidden;
`;
const Mlist = styled.div`
  height: 300px;
`;
const MImg = styled.div`
  width: 200px;
  height: 250px;
`;
const MTitle = styled.div`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
`;

export const DetailMlist = ({ db, db2, db3 }) => {
  const [menu, setMenu] = useState("0px");
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
            setMenu("-300px");
          }}
        >
          인기영화
        </Menu>
        <Menu
          onClick={() => {
            setMenu("-600px");
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
                <MImg
                  style={{
                    background: `url(${imgUrl}${db.poster_path}) no-repeat center/cover`,
                  }}
                ></MImg>
                <MTitle>{db.title}</MTitle>
              </SwiperSlide>
            ))}
          </Swiper>
        </Mlist>

        <Mlist style={{ transform: `translatey(${menu})` }}>
          <Swiper modules={[Navigation]} {...params}>
            {db2.map((db2) => (
              <SwiperSlide key={db2.id}>
                <MImg
                  style={{
                    background: `url(${imgUrl}${db2.poster_path}) no-repeat center/cover`,
                  }}
                ></MImg>
                <MTitle>{db2.title}</MTitle>
              </SwiperSlide>
            ))}
          </Swiper>
        </Mlist>
        <Mlist style={{ transform: `translatey(${menu})` }}>
          <Swiper modules={[Navigation]} {...params}>
            {db3.map((db3) => (
              <SwiperSlide key={db3.id}>
                <MImg
                  style={{
                    background: `url(${imgUrl}${db3.poster_path}) no-repeat center/cover`,
                  }}
                ></MImg>
                <MTitle>{db3.title}</MTitle>
              </SwiperSlide>
            ))}
          </Swiper>
        </Mlist>
      </MWrap>
    </Container>
  );
};
