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
  width: 99vw;
  height: 100vh;
`;

const BgCover = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(29, 29, 29, 1),
    rgba(29, 29, 29, 0),
    rgba(29, 29, 29, 1)
  );
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Section = styled.div`
  width: 99vw;
  padding: 0 100px;
  padding-top: 350px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    position: relative;
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
    text-align: center;
  }
`;
const Title = styled.div`
  font-size: 70px;
  min-height: 150px;
  max-height: 300px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

const PointWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media screen and (max-width: 500px) {
    margin-top: 0;
  }
`;
const StarWrap = styled.div`
  overflow: hidden;
`;
const Stars = styled.div`
  width: 169px;
  color: yellow;
  font-size: 30px;
`;
const Point = styled.div`
  font-size: 30px;
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;
const Genres = styled.div`
  margin-top: 20px;
  span {
    font-size: 24px;
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
  width: 250px;
  height: 100px;
  margin-top: 50px;
  display: flex;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Play = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(27, 151, 137, 1);
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Trailer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${mainStyle.pointColor.green};
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const RightCon = styled.div`
  padding-top: 100px;
  @media screen and (max-width: 500px) {
    padding-top: 50px;
    width: 100%;
  }
`;
const Tagline = styled.div`
  max-width: 500px;
  font-size: 40px;
  color: ${mainStyle.color.sub};
  @media screen and (max-width: 500px) {
    font-size: 28px;
    max-width: 100%;
  }
`;
const Text = styled.div`
  max-width: 500px;
  margin-top: 30px;
  color: ${mainStyle.color.p};
  line-height: 30px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    max-width: 100%;
    margin-bottom: 50px;
  }
`;
const Popup = styled.div`
  width: 90vw;
  height: 85vh;
  position: fixed;
  top: 120px;
  left: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  @media screen and (max-width: 1000px) {
    left: 20px;
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
  // console.log(detailDb);
  console.log(videosDb);
  return (
    <>
      <PageTitle title={"TV Show Detail"} />
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
              <PointWrap>
                <StarWrap
                  style={{ width: `${detailDb.vote_average * 16.9}px` }}
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
            <RightCon>
              <Tagline>{detailDb.tagline}</Tagline>
              <Text>{detailDb.overview}</Text>
            </RightCon>
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
