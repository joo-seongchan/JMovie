import {
  faArrowRight,
  faPlay,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { tvApi } from "../../../api";
import { imgUrl, videoUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";
import { Loading } from "../../Loading";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const Section = styled.section`
  height: 980px;
  position: relative;
`;
const Wrap = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  @media screen and (max-width: 1000px) {
    height: 59.5%;
  }
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
    rgba(29, 29, 29, 0.8),
    rgba(29, 29, 29, 0),
    rgba(29, 29, 29, 0.8)
  );

  @media screen and (max-width: 1000px) {
    padding: ${mainStyle.mopadding};
    padding-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      to right,

      rgba(29, 29, 29, 0.8),
      rgba(29, 29, 29, 0),
      rgba(29, 29, 29, 0.8)
    );
  }
`;

const LeftCon = styled.div`
  max-width: 700px;
  @media screen and (max-width: 1000px) {
    width: 100%;
    max-width: none;
    padding-bottom: 40px;
  }
`;
const Title = styled.div`
  max-height: 200px;
  display: flex;
  align-items: center;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 70px;

  @media screen and (max-width: 500px) {
    font-size: 36px;
    line-height: 50px;
    width: 100%;
    margin-bottom: 20px;
  }
`;
const PointWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 200px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Point = styled.div`
  font-size: 20px;
  color: ${mainStyle.color.sub};
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
  span {
    &::after {
      content: "|";
      margin: 0 10px;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const PlayWrap = styled.div`
  margin-top: 30px;
  display: flex;
  @media screen and (max-width: 1000px) {
    margin-bottom: 30px;
  }
`;
const More = styled.div`
  width: 80px;
  height: 40px;

  z-index: 9998;
  border: 1px solid white;
  transition: 0.3s;
  opacity: 0.8;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  &:hover {
    background-color: ${mainStyle.pointColor.green};
    border: 1px solid ${mainStyle.pointColor.green};
    opacity: 1;
  }
`;
const Trailer = styled.div`
  width: 80px;
  height: 40px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  z-index: 9998;
  cursor: pointer;
  margin-left: 20px;

  transition: 0.3s;
  opacity: 0.8;
  &:hover {
    background-color: ${mainStyle.pointColor.green};
    border: 1px solid ${mainStyle.pointColor.green};
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
    padding: 5px 15px;
    bottom: 10px;
    right: 20px;
  }
`;
const Overview = styled.div`
  max-width: 500px;
  padding-top: 30px;
  letter-spacing: 0px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  p {
    width: 100%;
    height: 100%;
    font-size: 16px;
    word-break: normal;
    color: ${mainStyle.color.sub};
    background: linear-gradient(
      to bottom,

      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.3)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(-150px);
  @media screen and (max-width: 1000px) {
    transform: translateY(-45px);
  }
`;
const MenuBox = styled.ul`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  padding: 10px;
  width: 500px;
  /* margin-left: 100px; */
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    margin-right: 0;
  }
`;
const Menu = styled.li`
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${mainStyle.color.main};
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const MWrap = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;
const Mlist = styled.div`
  height: 400px;
  transition: 0.5s;
`;
const ConWrap = styled.div`
  height: 350px;
  cursor: pointer;
  margin-top: 20px;
`;
const MImg = styled.div`
  width: 100%;
  height: 80%;
  transition: 0.5s;
  &:hover {
    height: 90%;
  }
`;
const MTitle = styled.div`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
`;
const Popup = styled.div`
  width: 90vw;
  height: 75vh;
  position: fixed;
  top: 120px;
  left: 5vw;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 9999;
  @media screen and (max-width: 1000px) {
    top: 60px;
  }
`;

const Button = styled.div`
  font-size: 32px;
  width: 30px;
  height: 30px;
  background-color: black;
  color: ${mainStyle.color.sub};
  position: absolute;
  top: -30px;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TDetailBg = ({ db, db2, db3 }) => {
  const [detailDb, setDetailDb] = useState();
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState("0px");
  const [bgId, setBgid] = useState("37854");
  const [videosDb, setVideoDb] = useState();
  const [popup, setPopup] = useState("none");
  const [latemenu, setLatemenu] = useState(`${mainStyle.color.main}`);
  const [popmenu, setPopmenu] = useState(`${mainStyle.color.p}`);
  const [highmenu, setHighmenu] = useState(`${mainStyle.color.p}`);

  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3.2,
        spaceBetween: 25,
      },
      1080: {
        slidesPerView: 6.2,
        spaceBetween: 25,
      },
      1400: {
        slidesPerView: 8.2,
        spaceBetween: 25,
      },
    },
  };

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const { data } = await tvApi.tDetail(`${bgId}`);
        setDetailDb(data);
        const {
          data: { results },
        } = await tvApi.tVideo(`${bgId}`);
        setVideoDb(results.length === 0 ? false : results[0].key);
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
                background: `URL(${
                  detailDb.backdrop_path
                    ? `${imgUrl}${detailDb.backdrop_path}`
                    : "https://www.airi-ip.com/en/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                }) no-repeat center/cover`,
              }}
            >
              <ConWrap1>
                <LeftCon>
                  <Title>{detailDb.name}</Title>
                  <Overview>
                    <p>{detailDb.overview.slice(0, 110)} . . .</p>
                  </Overview>
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
                      <span key={genre.id}>{genre.name}</span>
                    ))}
                  </Genres>
                  <PlayWrap>
                    <More>
                      <Link to={`/tsubpage/${detailDb.id}`}>더보기 +</Link>
                    </More>

                    <Trailer
                      onClick={() => {
                        setPopup("block");
                      }}
                    >
                      예고편
                    </Trailer>
                  </PlayWrap>
                </LeftCon>
              </ConWrap1>
            </Bg>
          </Wrap>
          <Container>
            <MenuBox>
              <Menu
                onClick={() => {
                  setMenu("0");
                  setLatemenu(`${mainStyle.color.main}`);
                  setHighmenu(`${mainStyle.color.p}`);
                  setPopmenu(`${mainStyle.color.p}`);
                }}
                style={{ color: `${latemenu}` }}
              >
                최신영화
              </Menu>
              <Menu
                onClick={() => {
                  setMenu("-400px");
                  setLatemenu(`${mainStyle.color.p}`);
                  setHighmenu(`${mainStyle.color.p}`);
                  setPopmenu(`${mainStyle.color.main}`);
                }}
                style={{ color: `${popmenu}` }}
              >
                인기영화
              </Menu>
              <Menu
                onClick={() => {
                  setMenu("-800px");
                  setLatemenu(`${mainStyle.color.p}`);
                  setHighmenu(`${mainStyle.color.main}`);
                  setPopmenu(`${mainStyle.color.p}`);
                }}
                style={{ color: `${highmenu}` }}
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
                          const { data: a } = await tvApi.tDetail(db.id);
                          setDetailDb(a);
                          const {
                            data: { results: b },
                          } = await tvApi.tVideo(db.id);
                          setVideoDb(b.length === 0 ? false : b[0].key);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <MImg
                          style={{
                            background: `url(${imgUrl}${db.poster_path}) no-repeat center/cover`,
                          }}
                        ></MImg>
                        <MTitle>{db.name}</MTitle>
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
                          const { data: a } = await tvApi.tDetail(db2.id);
                          setDetailDb(a);
                          const {
                            data: { results: b },
                          } = await tvApi.tVideo(db2.id);
                          setVideoDb(b.length === 0 ? false : b[0].key);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <MImg
                          style={{
                            background: `url(${imgUrl}${db2.poster_path}) no-repeat center/cover`,
                          }}
                        ></MImg>
                        <MTitle>{db2.name}</MTitle>
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
                          const { data: a } = await tvApi.tDetail(db3.id);
                          setDetailDb(a);
                          const {
                            data: { results: b },
                          } = await tvApi.tVideo(db3.id);
                          setVideoDb(b.length === 0 ? false : b[0].key);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <MImg
                          style={{
                            background: `url(${imgUrl}${db3.poster_path}) no-repeat center/cover`,
                          }}
                        ></MImg>
                        <MTitle>{db3.name}</MTitle>
                      </ConWrap>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Mlist>
            </MWrap>
          </Container>
          <Popup style={{ display: `${popup}` }}>
            <Button
              onClick={() => {
                setPopup("none");
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Button>
            {videosDb ? (
              <iframe
                width="100%"
                height="100%"
                src={`${videoUrl}${videosDb}`}
                allowfullscreen
              ></iframe>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "url(https://cdn-icons-png.flaticon.com/512/5301/5301987.png) no-repeat center/contain",
                }}
              ></div>
            )}
          </Popup>
        </Section>
      )}
    </>
  );
};
