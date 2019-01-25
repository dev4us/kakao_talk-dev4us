import * as React from "react";
import * as ReactDOM from "react-dom";
// import { ApolloProvider } from "react-apollo";
import App from "./Components/App";
import GlobalStyle from "./global-styles";

ReactDOM.render(
  <>
    <App data={false} />
    <GlobalStyle />
  </>,
  document.getElementById("root") as HTMLElement
);
