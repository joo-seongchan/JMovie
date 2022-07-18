import { useState, useEffect } from "react";
import styled from "styled-components";
import { tvApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Loading } from "../../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { mainStyle } from "../../../styles/globalStyle";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Wrap = styled.div`
  padding: 50px 100px;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const SeasonWrap = styled.div`
  width: 100%;
  column-gap: 30px;
  row-gap: 20px;
`;
const SeasonTitle = styled.div`
  font-size: 70px;
  margin-bottom: 30px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;
const Season = styled.div`
  width: 100%;
  height: 400px;
  cursor: pointer;
`;
const Poster = styled.div`
  width: 100%;
  height: 85%;
`;
const SeasonConTitle = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
`;
const EpTitle = styled.div`
  font-size: 34px;
  margin: 50px 0;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
`;
const EpWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 30px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 50px;
  }
`;
const Ep = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    .img {
      .imgcover {
        opacity: 0.5;
      }
    }
  }
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const StillPath = styled.div`
  width: 40%;
  height: 100%;
  @media screen and (max-width: 1000px) {
    width: 55%;
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 70%;
    margin-bottom: 15px;
  }
`;
const StilPathCover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  background-color: black;
  opacity: 0;
`;
const EpTextWrap = styled.div`
  width: 55%;
  @media screen and (max-width: 1000px) {
    width: 40%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const EpConTitle = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;
const EpOverview = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
  font-weight: 300;
  color: ${mainStyle.color.sub};
  @media screen and (max-width: 1180px) {
    display: none;
  }
`;
const AirDate = styled.div`
  color: ${mainStyle.color.p};
  @media screen and (max-width: 500px) {
    font-size: 14px;
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

const PlayPopUp = styled.div`
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
const PlayTextWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const PlayTitle = styled.div`
  font-size: 70px;
  margin-bottom: 100px;
  @media screen and (max-width: 1000px) {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;
const LoginBox = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${mainStyle.pointColor.green};
  a {
    width: 100%;
    height: 100%;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 50px;
    a {
      font-size: 24px;
    }
  }
`;

export const TEpisodeGroup = ({ id, detailDb }) => {
  const [seasonDb, setSeasonDb] = useState(detailDb.seasons);
  const [seasonDetailDb, setSeasonDetaildb] = useState("");
  const [loading, setLoading] = useState(true);
  const [playpopup, setPlaypopup] = useState("none");

  useEffect(() => {
    const epdata = async () => {
      try {
        const { data } = await tvApi.tSeason(id, seasonDb[0].season_number);
        setSeasonDetaildb(data);
        setLoading(false);
        AOS.init();
      } catch (error) {
        console.log(error);
      }
    };
    epdata();
  }, []);

  const params = {
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 25,
      },
      1080: {
        slidesPerView: 5.2,
        spaceBetween: 25,
      },
    },
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Wrap>
            <SeasonTitle data-aos="fade-up">Season</SeasonTitle>
            <Swiper modules={[Navigation]} {...params}>
              <SeasonWrap>
                {seasonDb.map((data) => (
                  <SwiperSlide>
                    <Season
                      data-aos="fade-up"
                      onClick={async () => {
                        const { data: a } = await tvApi.tSeason(
                          id,
                          data.season_number
                        );
                        setSeasonDetaildb(a);
                        const eptitle = document.querySelector(".eptitle");
                        const seasontitleplace = eptitle.offsetTop;
                        window.scrollTo({
                          top: seasontitleplace * 0.8,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      key={data.id}
                    >
                      <Poster
                        style={{
                          background: `url(${
                            data.poster_path
                              ? `${imgUrl}${data.poster_path}`
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPBdCYi2v2gXSJfvkxRbNbJPTULS9PG8dJw&usqp=CAU"
                          }) no-repeat center/cover `,
                        }}
                      ></Poster>
                      <SeasonConTitle
                        style={{
                          color: `${
                            data.name === seasonDetailDb.name
                              ? `${mainStyle.pointColor.red}`
                              : "white"
                          }`,
                          fontWeight: `${
                            data.name === seasonDetailDb.name ? "700" : "400"
                          }`,
                        }}
                      >
                        {data.name}
                      </SeasonConTitle>
                    </Season>
                  </SwiperSlide>
                ))}
              </SeasonWrap>
            </Swiper>
            <EpTitle data-aos="fade-up" className="eptitle">
              {seasonDetailDb.name}
            </EpTitle>
            <EpWrap>
              {seasonDetailDb && (
                <>
                  {seasonDetailDb.episodes.map((db) => (
                    <Ep
                      data-aos="fade-up"
                      onClick={() => {
                        setPlaypopup("block");
                      }}
                    >
                      <StillPath
                        className="img"
                        style={{
                          background: `url(${
                            db.still_path
                              ? `${imgUrl}${db.still_path}`
                              : `${
                                  detailDb.backdrop_path
                                    ? `${imgUrl}${detailDb.backdrop_path}`
                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPBdCYi2v2gXSJfvkxRbNbJPTULS9PG8dJw&usqp=CAU"
                                }`
                          }) no-repeat top/cover`,
                        }}
                      >
                        <StilPathCover className="imgcover">
                          <FontAwesomeIcon icon={faPlay} />
                        </StilPathCover>
                      </StillPath>
                      <EpTextWrap>
                        <EpConTitle>{db.name}</EpConTitle>
                        <EpOverview>
                          {db.overview.slice(0, 180)}{" "}
                          {db.overview.length > 180 ? "..." : ""}
                        </EpOverview>
                        <AirDate>{db.air_date}</AirDate>
                      </EpTextWrap>
                    </Ep>
                  ))}
                </>
              )}
            </EpWrap>
            <PlayPopUp style={{ display: `${playpopup}` }}>
              <Button
                onClick={() => {
                  setPlaypopup("none");
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </Button>
              <PlayTextWrap>
                <PlayTitle>로그인 후 이용해주세요</PlayTitle>
                <LoginBox>
                  <Link to="/login">로그인</Link>
                </LoginBox>
              </PlayTextWrap>
            </PlayPopUp>
          </Wrap>
        </>
      )}
    </>
  );
};
