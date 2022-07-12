import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { mainStyle } from "../../../styles/globalStyle";
import { imgUrl } from "../../../constants/constant";
import { Link } from "react-router-dom";
import { Loading } from "../../Loading";

const Title = styled.div`
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 5px;
  margin-top: 100px;
  color: ${mainStyle.pointColor.red};
`;
const Container = styled.div`
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;
const ConWrap = styled.div`
  height: 600px;
`;
const Img = styled.div`
  height: 90%;
`;
const ConTitle = styled.div`
  font-size: 24px;
  margin-top: 20px;
  text-align: center;
`;

export const UpComming = () => {
  const [upComming, setUpComming] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const {
          data: { results },
        } = await movieApi.mUpComming();
        setUpComming(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieDetail();
  }, []);
  console.log(upComming);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>개봉예정영화</Title>
          <Container>
            {upComming.map((data) => (
              <ConWrap>
                <Link to={`/msubpage/${data.id}`}>
                  <Img
                    style={{
                      background: `url( ${imgUrl}${data.poster_path} ) no-repeat center/cover`,
                    }}
                  />
                  <ConTitle>{data.title}</ConTitle>
                </Link>
              </ConWrap>
            ))}
          </Container>
        </>
      )}
    </>
  );
};
