import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// Background
import ResponsiveBox from "../ResponsiveBox";

// Router Branch (isLoggedIn : false)
import Login from "../../Routes/Login";
import SignUp from "../../Routes/SignUp";
import SetPassword from "../../Routes/SetPassword";
import Friends from "../../Routes/Friends";
import TopBar from "../TopBar";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    <ResponsiveBox
      contents={isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    />
  </BrowserRouter>
);

const LoggedInRoutes = () => (
  <>
    <Route path={"/main"} component={TopBar} />
    <Switch>
      <Route path={"/main/friends"} component={Friends} />
      <Route path={"/main/test"} component={Login} />
    </Switch>
    <Redirect from={"*"} to={"/main/friends"} />
  </>
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
