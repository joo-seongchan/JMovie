import { useEffect, useState } from "react";
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
  form {
    margin-bottom: 50px;
  }
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
  margin-bottom: 20px;
  &::placeholder {
    font-size: 22px;
  }
  @media screen and (max-width: 500px) {
    margin: 50px 0;
  }
`;
const SearchErrors = styled.div`
  font-size: 18px;
  margin-left: 20px;
  color: ${mainStyle.color.sub};
`;

const MainTitle = styled.div`
  width: 100%;
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
const Merror = styled.div`
  width: 200%;
  font-size: 36px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const Terrors = styled.div`
  width: 200%;
  font-size: 36px;
  @media screen and (max-width: 1000px) {
    width: 100%;
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
    mode: "onChange",
  });

  const searchData = async () => {
    const { search: term } = getValues();
    setLoading(true);
    setTitleloading(true);
    try {
      setMsearchterm(null);
      const {
        data: { results: mdata },
      } = await movieApi.search(term);

      if (mdata.length <= 0) {
        setError("mresult", {
          message: "영화가 없어요...!",
        });
      } else {
        setMsearchterm(mdata);
      }
      setTsearchterm(null);
      const {
        data: { results: tdata },
      } = await tvApi.search(term);

      if (tdata.length <= 0) {
        setError("tresult", {
          message: "TV Show가 없어요...!",
        });
      } else {
        setTsearchterm(tdata);
      }
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
              clearErrors();
            },
          })}
          type="text"
          placeholder="영화 검색..."
        />
        <SearchErrors>
          {errors?.search?.message}
          {errors?.mresult?.message}
          {errors?.tresult?.message}
        </SearchErrors>
      </form>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Section>
            <Container2>
              {titleloading ? <MainTitle>Movies</MainTitle> : ""}

              <Wrap>
                {msearchterm ? (
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
                ) : (
                  <>{titleloading ? <Merror>영화가 없어요...!</Merror> : ""}</>
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
                {tsearchterm ? (
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
                ) : (
                  <>
                    {titleloading ? (
                      <Terrors>TV Show가 없어요...!</Terrors>
                    ) : (
                      ""
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
