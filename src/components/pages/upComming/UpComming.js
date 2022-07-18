import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { mainStyle } from "../../../styles/globalStyle";
import { imgUrl } from "../../../constants/constant";
import { Link } from "react-router-dom";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";
import { ScrollTop } from "../../../ScrollTop";
import { AOS } from "aos";
import "aos/dist/aos.css";

const Title = styled.div`
  text-align: center;
  font-size: 80px;
  font-weight: 500;
  letter-spacing: 5px;
  margin-top: 200px;
  color: ${mainStyle.color.main};
  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
`;
const Container = styled.div`
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  @media screen and (max-width: 1000px) {
    padding: ${mainStyle.mopadding};
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;
  }
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
  }
`;
const ConWrap = styled.div`
  height: 600px;
  @media screen and (max-width: 1000px) {
    height: 450px;
  }
  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;
const Img = styled.div`
  height: 90%;
`;
const ConTitle = styled.div`
  font-size: 28px;
  margin-top: 20px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
    margin-top: 10px;
  }
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
  return (
    <>
      <PageTitle title={"Up Comming"} />
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          {upComming && (
            <>
              <Title>개봉예정영화</Title>
              <Container>
                {upComming.map((data) => (
                  <ConWrap key={data.id}>
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
      )}
    </>
  );
};
