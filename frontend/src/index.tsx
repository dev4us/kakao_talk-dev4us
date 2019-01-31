import * as React from "react";
import * as ReactDOM from "react-dom";
// import { ApolloProvider } from "react-apollo";
import App from "./Components/App";
import Favicon from "react-favicon";
import GlobalStyle from "./global-styles";

ReactDOM.render(
  <>
    <App data={true} />
    <Favicon url="//raw.githubusercontent.com/dev4us/source_warehouse/master/images/kakaolink_btn_small.ico" />
    <GlobalStyle />
  </>,
  document.getElementById("root") as HTMLElement
);
