import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Router Branch (isLoggedIn : false)
import Login from "../../Routes/Login";
import SignUp from "../../Routes/SignUp";
import SetPassword from "../../Routes/SetPassword";

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
    <Route path={"/sign-up"} component={SignUp} />
    <Route path={"/set-password"} component={SetPassword} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default AppPresenter;
