import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const MWrap = styled.div`
  transform: translatey(-300px);
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
    <MWrap>
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
    </MWrap>
  );
};
