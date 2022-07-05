import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  bgColor: "#1d1d1d",
  color: {
    main: "rgba(255,255,255,1)",
    sub: "rgba(255,255,255,0.7)",
    p: "rgba(255,255,255,0.5)",
  },
  mainColor: "#DC143C",
  padding: "0 100px",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
    background-color: ${mainStyle.bgColor};
    color:${mainStyle.color.main};
    letter-spacing: -1px;
    word-break: keep-all;
}
a{
    text-decoration: none;
    color: white;
}
`;
