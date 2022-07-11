import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";
import { Loading } from "../../Loading";

const Wrap = styled.div`
  width: 99vw;
  height: 100vh;
`;
const Bg = styled.div`
  width: 100%;
  height: 80%;
`;
const ConWrap = styled.div`
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
const StarWrap = styled.div`
  font-size: 20px;
  color: yellow;
  margin-top: 20px;
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
  padding-top: 150px;
  letter-spacing: 0px;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 16px;
    color: ${mainStyle.color.sub};
  }
`;

const Mlist = styled.div``;

export const DetailBg = () => {
  const [detailDb, setDetailDb] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const { data } = await movieApi.mDetail(438148);
        setDetailDb(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieDetail();
  }, []);
  console.log(detailDb);
  return (
    <Wrap>
      {loading ? (
        <Loading />
      ) : (
        <Bg
          style={{
            background: `URL(${imgUrl}${detailDb.poster_path}) no-repeat center/cover`,
          }}
        >
          <ConWrap>
            <LeftCon>
              <Title>{detailDb.title}</Title>
              <StarWrap>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </StarWrap>
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
          </ConWrap>
        </Bg>
      )}
    </Wrap>
  );
};
