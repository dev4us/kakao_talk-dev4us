import React from "react";
import SignUpPresenter from "./SignUpPresenter";

class SignUpContainer extends React.Component {
  public render() {
    return <SignUpPresenter onInputchange={this.onInputchange} />;
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

export default SignUpContainer;
