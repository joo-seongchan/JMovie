import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { Loading } from "../../Loading";
import { imgUrl } from "../../../constants/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { mainStyle } from "../../../styles/globalStyle";

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
`;

const Section = styled.div`
  width: 99vw;
  height: 100vh;
  padding: 0 100px;
  padding-top: 350px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`;

const LeftCon = styled.div`
  max-width: 600px;
`;
const Title = styled.div`
  font-size: 70px;
  max-height: 300px;
  display: flex;
  align-items: center;
`;

const PointWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
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
`;
const Genres = styled.div`
  margin-top: 20px;
  span {
    font-size: 28px;
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
`;

const Play = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(187, 22, 55, 1);
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Trailer = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(238, 18, 62, 1);
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightCon = styled.div`
  padding-top: 100px;
`;
const Tagline = styled.div`
  max-width: 500px;
  font-size: 40px;
  color: ${mainStyle.color.sub};
`;
const Text = styled.div`
  max-width: 500px;
  margin-top: 30px;
  color: ${mainStyle.color.p};
  line-height: 30px;
`;

export const MSubPage = () => {
  const [detailDb, setDtaildb] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const detaildb = async () => {
      try {
        const { data } = await movieApi.mDetail(id);
        setDtaildb(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    detaildb();
  }, []);
  console.log(detailDb);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Bg
            style={{
              background: `url(${imgUrl}${detailDb.backdrop_path}) no-repeat center/cover`,
            }}
          >
            <BgCover></BgCover>
          </Bg>
          <Section>
            <LeftCon>
              <Title>{detailDb.title}</Title>
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
                  <span>{db.name}</span>
                ))}
              </Genres>
              <BoxWrap>
                <Play>
                  <FontAwesomeIcon icon={faPlay} />
                </Play>
                <Trailer>예고편</Trailer>
              </BoxWrap>
            </LeftCon>
            <RightCon>
              <Tagline>{detailDb.tagline}</Tagline>
              <Text>{detailDb.overview}</Text>
            </RightCon>
          </Section>
        </>
      )}
    </>
  );
};
