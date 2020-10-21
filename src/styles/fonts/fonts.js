import { createGlobalStyle } from "styled-components"
import NationalWeb from "./national/National2Web-Regular.woff"
import NationalWeb2 from "./national/National2Web-Regular.woff2"
import NationalWebBold from "./national/National2Web-Bold.woff2"
import NationalWebBold2 from "./national/National2Web-Bold.woff2"
import TiemposText from "./tiempos/TiemposTextWeb-Regular.woff"
import TiemposText2 from "./tiempos/TiemposTextWeb-Regular.woff2"
import TiemposHeadline from "./tiempos/TiemposHeadlineWeb-Regular.woff"
import TiemposHeadline2 from "./tiempos/TiemposHeadlineWeb-Regular.woff2"

export default createGlobalStyle`
  @font-face {
    font-family: "National 2 Web";
    src: url(${NationalWeb}) format("woff"), url(${NationalWeb2}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "National 2 Web Bold";
    src: url(${NationalWebBold}) format("woff"), url(${NationalWebBold2}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Tiempos Headline";
    src: url(${TiemposHeadline}) format("woff), url(${TiemposHeadline2}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Tiempos Text";
    src: url(${TiemposText}) format("woff), url(${TiemposText2}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`
