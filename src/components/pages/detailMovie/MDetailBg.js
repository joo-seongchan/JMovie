import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";
import { Loading } from "../../Loading";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Section = styled.section`
  height: 100vh;
  position: relative;
`;
const Wrap = styled.div`
  width: 99vw;
  height: 80vh;
`;
const Bg = styled.div`
  width: 100%;
  height: 100%;
`;
const ConWrap1 = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 100px;
  padding-top: 120px;
  background: linear-gradient(
    to right,
    rgba(29, 29, 29, 1),
    rgba(29, 29, 29, 0),
    rgba(29, 29, 29, 1)
  );
  display: flex;
  justify-content: space-between;
`;

const LeftCon = styled.div`
  max-width: 700px;
`;
const Title = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 70px;
`;
const PointWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 200px;
`;

const Point = styled.div`
  font-size: 20px;
`;

const StarBox = styled.div`
  width: 114px;
  overflow: hidden;
  transform: translateX(-${(props) => (10 - props.point) * 11.4}px);
`;

const StarWrap = styled.div`
  font-size: 20px;
  color: yellow;
  transform: translateX(${(props) => (10 - props.point) * 11.4}px);
`;
const Genres = styled.div`
  font-size: 20px;
  margin-top: 20px;
  color: ${mainStyle.color.sub};
`;
const PlayWrap = styled.div`
  margin-top: 30px;
  display: flex;
`;
const Play = styled.div`
  width: 100px;
  height: 70px;
  background-color: rgba(187, 22, 55, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
`;
const Trailer = styled.div`
  width: 100px;
  height: 70px;
  background-color: rgba(238, 18, 62, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
const RightCon = styled.div`
  max-width: 400px;
  padding-top: 50px;
  letter-spacing: 0px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 16px;
    color: ${mainStyle.color.sub};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  top: -250px;
  left: 0;
`;
const MenuBox = styled.ul`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  padding: 10px;
  width: 500px;
  margin-right: 100px;
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

export const MDetailBg = ({ db, db2, db3 }) => {
  const [detailDb, setDetailDb] = useState();
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState("0px");
  const [bgId, setBgid] = useState("168259");

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

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const { data } = await movieApi.mDetail(`${bgId}`);
        setDetailDb(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieDetail();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Section>
          <Wrap>
            <Bg
              style={{
                background: `URL(${imgUrl}${detailDb.backdrop_path}) no-repeat center/cover`,
              }}
            >
              <ConWrap1>
                <LeftCon>
                  <Title>{detailDb.title}</Title>
                  <PointWrap>
                    <StarBox point={detailDb.vote_average}>
                      <StarWrap point={detailDb.vote_average}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </StarWrap>
                    </StarBox>
                    <Point>{detailDb.vote_average} 점</Point>
                  </PointWrap>
                  <Genres>
                    {detailDb.genres.map((genre) => (
                      <span key={genre.id}>{genre.name} | </span>
                    ))}
                  </Genres>
                  <PlayWrap>
                    <Play>
                      <FontAwesomeIcon icon={faPlay} />
                    </Play>
                    <Trailer>예고편</Trailer>
                  </PlayWrap>
                </LeftCon>
                <RightCon>
                  <p>{detailDb.overview}</p>
                </RightCon>
              </ConWrap1>
            </Bg>
          </Wrap>
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
                        onClick={async () => {
                          const { data: a } = await movieApi.mDetail(db.id);
                          setDetailDb(a);
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
                        onClick={async () => {
                          const { data: a } = await movieApi.mDetail(db2.id);
                          setDetailDb(a);
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
                        onClick={async () => {
                          const { data: a } = await movieApi.mDetail(db3.id);
                          setDetailDb(a);
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
        </Section>
      )}
    </>
  );
};
