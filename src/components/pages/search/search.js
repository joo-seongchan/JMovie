import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi, tvApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { ScrollTop } from "../../../ScrollTop";
import { mainStyle } from "../../../styles/globalStyle";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";

const Container = styled.div`
  padding: 0 100px;
  min-height: 90vh;
  @media screen and (max-width: 1000px) {
    padding: ${mainStyle.mopadding};
  }
`;

const Title = styled.div`
  font-size: 100px;
  color: ${mainStyle.color.main};
  text-align: center;
  padding-top: 150px;
  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border: 1px solid ${mainStyle.color.sub};
  font-size: 20px;
  border-radius: 50px;
  margin: 100px 0;
  margin-bottom: 50px;
  &::placeholder {
    font-size: 22px;
  }
  @media screen and (max-width: 500px) {
    margin: 50px 0;
  }
`;

const MainTitle = styled.div`
  width: 50%;
  font-size: 36px;
  padding-left: 15px;
  margin: 30px 0;
  color: ${mainStyle.pointColor.red};
`;

const Section = styled.section`
  display: flex;
  margin-bottom: 100px;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const Container2 = styled.div`
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 450px;
  column-gap: 10px;
  row-gap: 30px;
  margin-right: 10px;
  padding: 10px;
  &:nth-child(2) {
    margin-right: 0;
    margin-left: 10px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const Con = styled.div`
  a {
    display: block;
    width: 100%;
  }
`;

const Bg = styled.div`
  width: 100%;
  height: 400px;
`;

const ConTitle = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: 10px;
  text-align: center;
`;
const MError = styled.div`
  font-size: 48px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Search = () => {
  const [msearchterm, setMsearchterm] = useState();
  const [tsearchterm, setTsearchterm] = useState();
  const [loading, setLoading] = useState();
  const [titleloading, setTitleloading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onSubmit",
  });

  const searchData = async () => {
    const { search: term } = getValues();
    setLoading(true);
    setTitleloading(true);
    try {
      const {
        data: { results: mdata },
      } = await movieApi.search(term);

      if (mdata.length <= 0) {
        setError("result", {
          massage: "영화가 없어요...!",
        });
      } else {
        setMsearchterm(mdata);
      }

      const {
        data: { results: tdata },
      } = await tvApi.search(term);

      if (tdata.length <= 0) {
        setError("result", {
          massage: "TV Show가 없어요...!",
        });
      } else {
        setTsearchterm(tdata);
      }
      console.log(msearchterm);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <PageTitle title={"Search"} />
      <ScrollTop />
      <Title>J MOVIE</Title>
      <form onSubmit={handleSubmit(searchData)}>
        <Input
          {...register("search", {
            required: "내용은 필수 입니다.",
            onChange() {
              clearErrors("result");
            },
          })}
          type="text"
          placeholder="영화 검색..."
        />
      </form>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Section>
            <Container2>
              {titleloading ? <MainTitle>Movies</MainTitle> : ""}

              <Wrap>
                {msearchterm && (
                  <>
                    {msearchterm.length <= 0 ? (
                      <MError>검색된 영화가 없습니다.</MError>
                    ) : (
                      <>
                        {msearchterm.map((term) => (
                          <Con key={term.id}>
                            <Link to={`/msubpage/${term.id}`}>
                              <Bg
                                style={{
                                  background: `url(${
                                    term.poster_path
                                      ? `${imgUrl}${term.poster_path}`
                                      : "https://www.airi-ip.com/en/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                                  }) no-repeat center/cover `,
                                }}
                              />
                              <ConTitle>{term.title}</ConTitle>
                            </Link>
                          </Con>
                        ))}
                      </>
                    )}
                  </>
                )}
              </Wrap>
            </Container2>
            <Container2>
              {titleloading ? (
                <MainTitle style={{ color: `${mainStyle.pointColor.green}` }}>
                  Tv Showes
                </MainTitle>
              ) : (
                ""
              )}
              <Wrap>
                {tsearchterm && (
                  <>
                    {tsearchterm.length <= 0 ? (
                      <MError>검색 된 TV Show가 없습니다.</MError>
                    ) : (
                      <>
                        {tsearchterm.map((term) => (
                          <Con key={term.id}>
                            <Link to={`/tsubpage/${term.id}`}>
                              <Bg
                                style={{
                                  background: `url(${
                                    term.poster_path
                                      ? `${imgUrl}${term.poster_path}`
                                      : "https://www.airi-ip.com/en/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                                  }) no-repeat center/cover `,
                                }}
                              />
                              <ConTitle>{term.name}</ConTitle>
                            </Link>
                          </Con>
                        ))}
                      </>
                    )}
                  </>
                )}
              </Wrap>
            </Container2>
          </Section>
        </>
      )}
    </Container>
  );
};
