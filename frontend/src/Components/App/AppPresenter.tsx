import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Router Branch (isLoggedIn : false)
import Login from "../../Routes/Login";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedInRoutes = () => (
  <Switch>
    <Route />
  </Switch>
);
const LoggedOutRoutes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Login} />
  </Switch>
);

export default AppPresenter;
