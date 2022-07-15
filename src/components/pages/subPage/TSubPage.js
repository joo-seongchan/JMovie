import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { tvApi } from "../../../api";
import { Loading } from "../../Loading";
import { imgUrl, videoUrl } from "../../../constants/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { mainStyle } from "../../../styles/globalStyle";
import { PageTitle } from "../../PageTitle";
import { ScrollTop } from "../../../ScrollTop";

const Bg = styled.div`
  width: 100vw;
  height: 900px;
  @media screen and (max-width: 1000px) {
    height: 60vh;
  }
`;

const BgCover = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(29, 29, 29, 1),
    rgba(29, 29, 29, 0.8),
    rgba(29, 29, 29, 0),
    rgba(29, 29, 29, 0.8)
  );
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Section = styled.div`
  width: 100vw;
  padding: 0 100px;
  padding-top: 150px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    position: unset;
    padding: ${mainStyle.mopadding};
    padding-top: 20px;
    justify-content: start;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftCon = styled.div`
  max-width: 600px;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.div`
  font-size: 70px;
  /* min-height: 150px; */
  max-height: 300px;
  display: flex;
  line-height: 90px;
  align-items: center;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    line-height: 50px;
  }
`;
const RightCon = styled.div`
  /* padding-top: 50px; */
  @media screen and (max-width: 500px) {
    width: 100%;
    padding-top: 0;
  }
`;

const Text = styled.div`
  max-width: 500px;
  margin-top: 30px;
  color: ${mainStyle.color.p};
  line-height: 30px;
  font-size: 16px;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

const PointWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;
const StarWrap = styled.div`
  overflow: hidden;
`;
const Stars = styled.div`
  width: 112.5px;
  color: yellow;
  font-size: 20px;
`;
const Point = styled.div`
  font-size: 20px;
  color: ${mainStyle.color.sub};
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
const Genres = styled.div`
  margin-top: 20px;
  line-height: 30px;
  span {
    font-size: 20px;
    color: ${mainStyle.color.sub};
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
`;

const BoxWrap = styled.div`
  width: 200px;
  height: 60px;
  margin-top: 30px;
  display: flex;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const Play = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(22, 151, 135, 1);
  font-size: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(22, 151, 135, 0.8);
    font-size: 42px;
  }
`;

const Trailer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${mainStyle.pointColor.green};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(22, 197, 177, 0.8);
    font-size: 26px;
  }
`;

const Popup = styled.div`
  width: 90vw;
  height: 75vh;
  position: fixed;
  top: 120px;
  left: 5vw;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  @media screen and (max-width: 1000px) {
    left: 5vw;
    height: 50vh;
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

export const TSubPage = () => {
  const [detailDb, setDtaildb] = useState();
  const [videosDb, setVideoDb] = useState();
  const [popup, setPopup] = useState("none");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const detaildb = async () => {
      try {
        const { data } = await tvApi.tDetail(id);
        setDtaildb(data);
        const {
          data: { results },
        } = await tvApi.tVideo(id);
        setVideoDb(results.length === 0 ? false : results[0].key);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    detaildb();
  }, []);
  return (
    <>
      <PageTitle title={"Movie Detail"} />
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Bg
            style={{
              background: `url(${
                detailDb.backdrop_path
                  ? `${imgUrl}${detailDb.backdrop_path}`
                  : "https://www.airi-ip.com/en/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
              }) no-repeat center/cover`,
            }}
          >
            <BgCover></BgCover>
          </Bg>
          <Section>
            <LeftCon>
              <Title>{detailDb.name}</Title>
              <RightCon>
                <Text>{detailDb.overview}</Text>
              </RightCon>
              <PointWrap>
                <StarWrap
                  style={{ width: `${detailDb.vote_average * 11.25}px` }}
                >
                  <Stars>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </Stars>
                </StarWrap>
                <Point>{detailDb.vote_average}점</Point>
              </PointWrap>
              <Genres>
                {detailDb.genres.map((db) => (
                  <span key={db.id}>{db.name}</span>
                ))}
              </Genres>
              <BoxWrap>
                <Play>
                  <FontAwesomeIcon icon={faPlay} />
                </Play>
                <Trailer
                  onClick={() => {
                    setPopup(`block`);
                  }}
                >
                  예고편
                </Trailer>
              </BoxWrap>
            </LeftCon>
          </Section>
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
        </>
      )}
    </>
  );
};
