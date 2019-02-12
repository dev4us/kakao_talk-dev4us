import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// Background
import ResponsiveBox from "../ResponsiveBox";

// Public Router
import EmailVerification from "../../Routes/EmailVerification";

// Router Branch (isLoggedIn : false)
import Login from "../../Routes/Login";
import SignUp from "../../Routes/SignUp";
import SetPassword from "../../Routes/SetPassword";

// Router Branch (isLoggedIn : true)
import TopBar from "../TopBar";
import Friends from "../../Routes/Friends";
import Chats from "../../Routes/Chats";
import Setting from "../../Routes/Setting";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    <Switch>
      <Route
        path={"/emailVerification/:userId/:verificationCode"}
        exact={true}
        component={EmailVerification}
      />
      <ResponsiveBox
        contents={isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
      />
    </Switch>
  </BrowserRouter>
);

const LoggedInRoutes = () => (
  <>
    <Route component={TopBar} />
    <Switch>
      <Route path={"/main/friends"} component={Friends} />
      <Route path={"/main/chats"} component={Chats} />
      <Route path={"/main/setting"} component={Setting} />
      <Redirect from={"*"} to={"/main/friends"} />
    </Switch>
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
