import * as React from "react";
import * as ReactDOM from "react-dom";
// import { ApolloProvider } from "react-apollo";
import App from "./Components/App";

ReactDOM.render(<App data={false} />, document.getElementById(
  "root"
) as HTMLElement);
