import styled from "styled-components";
import { mainStyle } from "../../../styles/globalStyle";
import { useForm } from "react-hook-form";
import { useState } from "react";

const userDb = {
  dbUsername: "test",
  dbPw: "123123123",
};

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
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
`;
const Errors = styled.div`
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;
  opacity: 0.8;
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
      setError("usernameResult", { message: "아이디가 틀렸습니다." });
    }
    if (password !== dbPw) {
      setError("passwordResult", { message: "비밀번호가 틀렸습니다." });
    }
    if (dbUsername === dbUsername && password === dbPw) {
      window.location.replace("https://joo-seongchan.github.io/JMovie/#/");
    }
  };

  return (
    <Section>
      <Title>J Movie</Title>
      <LogWrap>
        <SubTitle>Login</SubTitle>
        <form onSubmit={handleSubmit(submit)}>
          <input
            {...register("username", {
              required: "아이디는 필수 입니다.",
              minLength: {
                value: 3,
                message: "아이디는 3자리 이상 작성해 주세요",
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
              required: "패스워드는 필수입니다.",
              minLength: {
                value: 8,
                message: "패스워드는 8자리 이상입니다.",
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
              pwtype === "password" ? setPwtype("text") : setPwtype("password");
            }}
          >
            비밀번호 보이기
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
        </form>
      </LogWrap>
    </Section>
  );
};
