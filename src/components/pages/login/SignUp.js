import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../../styles/globalStyle";

const userDb = {
  dbUsername: "test",
};

const Section = styled.div`
  width: 100%;
  min-height: 100vh;

  background: url("https://image.tmdb.org/t/p/original//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg")
    center center / cover no-repeat;
`;
const BgCover = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 100px 0;
  background-color: rgba(29, 29, 29, 0.8);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignUpWrap = styled.div`
  flex-direction: column;
  width: 400px;
  background-color: ${mainStyle.pointColor.red};
  padding: 80px 50px;
  border-radius: 25px;

  @media screen and (max-width: 500px) {
    max-width: 90vw;
    padding: 50px 20px;
  }
`;

const SubTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
  text-align: center;
`;

const UserNameWrp = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
`;
const UserName = styled.input`
  all: unset;
  width: 100%;
  padding: 10px;
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
`;
const SameCheck = styled.div`
  padding: 10px;
  background-color: ${(props) => props.bg};
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
  transition: 0.5s;
`;
const PasswordWrap = styled.div`
  margin-bottom: 15px;
  position: relative;
`;
const Password = styled.input`
  all: unset;
  width: 100%;
  padding: 10px;
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
`;
const Showpassword = styled.div`
  padding: 10px 15px;
  background-color: ${mainStyle.pointColor.green};
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px;
  height: 100%;
  display: felx;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
`;
const CheckPassword = styled.input`
  all: unset;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  color: black;
  margin-bottom: 15px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
  &:focus {
    color: black;
  }
`;
const Name = styled.input`
  all: unset;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  color: black;
  margin-bottom: 15px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
  &:focus {
    color: black;
  }
`;
const PhoneNumber = styled.input`
  all: unset;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  color: black;
  margin-bottom: 15px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
  &:focus {
    color: black;
  }
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

const WelcomeWrap = styled.div`
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${mainStyle.pointColor.red};
  padding: 80px 30px;
  h1 {
    font-size: 50px;
    line-height: 70px;
    text-align: center;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 500px) {
    max-width: 90vw;
    padding: 50px 20px;
    h1 {
      font-size: 30px;
      line-height: 40px;
    }
  }
`;
const User = styled.div`
  font-size: 80px;
  font-weight: 700;
  color: gold;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
`;

const GoHome = styled.div`
  width: 80%;
  height: 50px;
  background-color: ${mainStyle.pointColor.green};
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
`;

export const SignUp = () => {
  const [eye, setEye] = useState("password");
  const [usernameCheck, setUsernameCheck] = useState("");
  const [same, setSame] = useState(false);
  const { dbUsername } = userDb;
  const [swdisplay, setSwdisplay] = useState("flex");
  const [username1, setUsername1] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm({ mode: "onChange" });

  const none = () => {};

  const sameClick = () => {
    const { username } = getValues();
    clearErrors("usernameResult");
    if (username === dbUsername) {
      setError("usernameResult", { message: "????????? ????????? ?????????." });
    } else {
      setSame(true);
    }
  };

  const submit = () => {
    const { username, password, passwordcheck, name, phonenumber } =
      getValues();
    if (username === dbUsername) {
      setError("usernameResult", { message: "????????? ??????????????? ????????????" });
    }
    if (password !== passwordcheck) {
      setError("passwordcheckResult", {
        message: "??????????????? ???????????? ????????????.",
      });
    }
    if (username !== dbUsername && password === passwordcheck) {
      setUsername1(username);
      setSwdisplay("none");
    }
  };

  return (
    <Section>
      <BgCover>
        <SignUpWrap style={{ display: `${swdisplay}` }}>
          <SubTitle>????????????</SubTitle>
          <form onSubmit={handleSubmit(submit)}>
            <UserNameWrp>
              <UserName
                {...register("username", {
                  required: "???????????? ?????? ?????????.",
                  minLength: {
                    value: 3,
                    message: "???????????? 3?????? ?????? ????????? ?????????",
                  },
                  onChange() {
                    const { username } = getValues();
                    setUsernameCheck(username);
                    setSame(false);
                    clearErrors("usernameResult");
                  },
                })}
                type="text"
                placeholder="ID (??????????????? : test)"
              ></UserName>

              <SameCheck
                onClick={
                  errors?.username?.message || usernameCheck.length === 0
                    ? none
                    : sameClick
                }
                opacity={
                  errors?.username?.message || usernameCheck.length === 0
                    ? 0.5
                    : 1
                }
                bg={
                  errors?.username?.message || usernameCheck.length === 0
                    ? "gray"
                    : `${mainStyle.pointColor.green}`
                }
                cursor={
                  errors?.username?.message || usernameCheck.length === 0
                    ? "auto"
                    : "pointer"
                }
              >
                ????????????
              </SameCheck>
            </UserNameWrp>
            {errors?.username?.message && (
              <Errors>{errors?.username?.message} </Errors>
            )}
            {errors?.usernameResult?.message && (
              <Errors>{errors?.usernameResult?.message} </Errors>
            )}
            {same ? (
              <Errors
                style={{
                  fontWeight: 700,
                }}
              >
                ?????? ????????? ????????? ?????????.{" "}
              </Errors>
            ) : (
              ""
            )}
            <PasswordWrap>
              <Password
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
                type={eye}
                placeholder="Password"
              ></Password>
              <Showpassword
                onClick={() => {
                  eye === "password" ? setEye("text") : setEye("password");
                }}
              >
                {eye === "password" ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </Showpassword>
            </PasswordWrap>
            {errors?.password?.message && (
              <Errors>{errors?.password?.message} </Errors>
            )}
            <CheckPassword
              {...register("passwordcheck", {
                required: "??????????????? ???????????????.",
                minLength: {
                  value: 8,
                  message: "??????????????? 8?????? ???????????????.",
                },
                onChange() {
                  clearErrors("passwordcheckResult");
                },
              })}
              type={eye}
              placeholder="Password ??????"
            ></CheckPassword>
            {errors?.passwordcheck?.message && (
              <Errors>{errors?.passwordcheck?.message} </Errors>
            )}
            {errors?.passwordcheckResult?.message && (
              <Errors>{errors?.passwordcheckResult?.message} </Errors>
            )}
            <Name
              {...register("name", {
                required: "????????? ?????? ?????????.",
                minLength: {
                  value: 2,
                  message: "????????? 2?????? ?????? ?????????.",
                },
                pattern: {
                  value: /^[???-???a-zA-Z]+$/,
                  message: "????????? ??????????????????",
                },
                onChange() {
                  clearErrors("nameResult");
                },
              })}
              type="text"
              placeholder="?????? ex)?????????"
            ></Name>
            {errors?.name?.message && <Errors>{errors?.name?.message} </Errors>}
            <PhoneNumber
              {...register("phonenumber", {
                required: "?????????????????? ?????? ?????????.",
                minLength: {
                  value: 11,
                  message: "?????????????????? ??????????????????",
                },
                maxLength: {
                  value: 13,
                  message: "?????????????????? ??????????????????",
                },
                pattern: {
                  value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                  message: "??????????????? ??????????????????",
                },
                onChange() {
                  clearErrors("phonenumberResult");
                },
              })}
              type="text"
              placeholder="????????????"
            ></PhoneNumber>
            {errors?.phonenumber?.message && (
              <Errors>{errors?.phonenumber?.message} </Errors>
            )}
            <Button
              style={{
                background: `${
                  isValid ? `${mainStyle.pointColor.green}` : "gray"
                }`,
                cursor: `${isValid ? "pointer" : "auto"}`,
              }}
            >
              ????????????
            </Button>
          </form>
        </SignUpWrap>
        <WelcomeWrap
          style={{ display: `${swdisplay === "flex" ? "none" : "flex"}` }}
        >
          <User>{username1} ???</User>
          <h1>J Movie ????????? ???????????????.</h1>
          <GoHome>
            <Link to={"/"}>Home</Link>
          </GoHome>
        </WelcomeWrap>
      </BgCover>
    </Section>
  );
};
