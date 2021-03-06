import styled from "styled-components";
import { mainStyle } from "../../../styles/globalStyle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

const userDb = {
  dbUsername: "test",
  dbPw: "123123123",
};

const Bg = styled.div`
  background: url(https://image.tmdb.org/t/p/original//nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg)
    center center / cover no-repeat;
`;

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: rgba(29, 29, 29, 0.5);
  backdrop-filter: blur(2px);
`;
const Title = styled.h1`
  font-size: 80px;
  margin-bottom: 50px;
`;
const LogWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  background-color: ${mainStyle.pointColor.red};
  padding: 80px 50px;
  border-radius: 25px;
  @media screen and (max-width: 500px) {
    max-width: 90vw;
    padding: 50px 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    input {
      all: unset;
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 10px;
      background-color: white;
      box-sizing: border-box;
      color: black;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
      &:focus {
        color: black;
      }
    }
  }
`;
const SubTitle = styled.h3`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const ShowPassword = styled.div`
  width: 100%;
  height: 15px;
  color: ${mainStyle.color.p};
  cursor: pointer;
  margin-bottom: 15px;
  display: flex;
  justify-content: right;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  color: white;
  border-radius: 10px;
  transition: 0.5s;
  margin-bottom: 20px;
`;
const Errors = styled.div`
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;
  opacity: 0.8;
`;

const Signup = styled.div`
  all: unset;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  color: white;
  background-color: ${mainStyle.pointColor.green};
  border-radius: 10px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm({ mode: "onChange" });
  const [pwtype, setPwtype] = useState("password");

  const submit = () => {
    const { username, password } = getValues();
    const { dbUsername, dbPw } = userDb;

    if (username !== dbUsername) {
      setError("usernameResult", { message: "???????????? ???????????????." });
    }
    if (password !== dbPw) {
      setError("passwordResult", { message: "??????????????? ???????????????." });
    }
    if (dbUsername === dbUsername && password === dbPw) {
      window.location.replace("https://joo-seongchan.github.io/JMovie/#/");
    }
  };

  return (
    <Bg>
      <Section>
        <Title>J Movie</Title>
        <LogWrap>
          <SubTitle>Login</SubTitle>
          <form onSubmit={handleSubmit(submit)}>
            <input
              {...register("username", {
                required: "???????????? ?????? ?????????.",
                minLength: {
                  value: 3,
                  message: "???????????? 3?????? ?????? ????????? ?????????",
                },
                onChange() {
                  clearErrors("usernameResult");
                },
              })}
              type="text"
              placeholder="ID (test)"
            />
            {errors?.username?.message && (
              <Errors>{errors?.username?.message} </Errors>
            )}
            {errors?.usernameResult?.message && (
              <Errors>{errors?.usernameResult?.message} </Errors>
            )}
            <input
              {...register("password", {
                required: "??????????????? ???????????????.",
                minLength: {
                  value: 8,
                  message: "??????????????? 8?????? ???????????????.",
                },
                onChange() {
                  clearErrors("passwordResult");
                },
              })}
              type={pwtype}
              placeholder="Password (123123123)"
            />

            <ShowPassword
              onClick={() => {
                pwtype === "password"
                  ? setPwtype("text")
                  : setPwtype("password");
              }}
            >
              ???????????? ?????????
            </ShowPassword>
            {errors?.password?.message && (
              <Errors>{errors?.password?.message} </Errors>
            )}
            {errors?.passwordResult?.message && (
              <Errors>{errors?.passwordResult?.message} </Errors>
            )}
            <Button
              style={{
                background: `${
                  isValid ? `${mainStyle.pointColor.green}` : "gray"
                }`,
                cursor: `${isValid ? "pointer" : "auto"}`,
              }}
            >
              LOGIN
            </Button>
            <Signup>
              <Link to={"/signup"}>????????????</Link>
            </Signup>
          </form>
        </LogWrap>
      </Section>
    </Bg>
  );
};
