import React from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends React.Component {
  public state = {
    isIdMinLength: false,
    isPasswordMinLength: false,
    inputUserId: "",
    inputUserPw: ""
  };
  public render() {
    const {
      inputUserId,
      inputUserPw,
      isIdMinLength,
      isPasswordMinLength
    } = this.state;
    return (
      <LoginPresenter
        inputUserId={inputUserId}
        inputUserPw={inputUserPw}
        isIdMinLength={isIdMinLength}
        isPasswordMinLength={isPasswordMinLength}
        onInputchange={this.onInputchange}
      />
    );
  }
  public onInputchange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;
    if (name === "inputUserId") {
      if (value.length > 0) {
        this.setState({
          isIdMinLength: true
        });
      } else {
        this.setState({
          isIdMinLength: false
        });
      }
    }
    if (name === "inputUserPw") {
      if (value.length >= 8) {
        this.setState({
          isPasswordMinLength: true
        });
      } else {
        this.setState({
          isPasswordMinLength: false
        });
      }
    }

    this.setState({
      [name]: value
    });
  };
}

export default LoginContainer;
