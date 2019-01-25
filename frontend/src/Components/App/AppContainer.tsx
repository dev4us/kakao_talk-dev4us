import React from "react";
import AppPresenter from "./AppPresenter";

const AppContainer = ({ data }) => (
  <React.Fragment>
    <AppPresenter isLoggedIn={data} />
  </React.Fragment>
);

export default AppContainer;
