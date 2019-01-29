import React from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends React.Component {
  public state = {
    isMinLength: false,
    inputUserId: "",
    inputUserPw: ""
  };
  public render() {
    const { inputUserId, inputUserPw, isMinLength } = this.state;
    return (
      <LoginPresenter
        inputUserId={inputUserId}
        inputUserPw={inputUserPw}
        isMinLength={isMinLength}
        onInputchange={this.onInputchange}
      />
    );
  }
  public onInputchange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;

    if (name === "inputUserPw") {
      console.log(event);
      if (value.length >= 8) {
        this.setState({
          isMinLength: true
        });
      } else {
        this.setState({
          isMinLength: false
        });
      }
    }

    this.setState({
      [name]: value
    });
  };
}

export default LoginContainer;
