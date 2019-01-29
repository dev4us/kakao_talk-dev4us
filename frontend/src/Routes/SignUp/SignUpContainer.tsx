import React from "react";
import SignUpPresenter from "./SignUpPresenter";

class SignUpContainer extends React.Component {
  public state = {
    signUpemail: "",
    emailValidation: false
  };
  public render() {
    const { emailValidation } = this.state;
    return (
      <SignUpPresenter
        onInputchange={this.onInputchange}
        emailValidation={emailValidation}
      />
    );
  }
  public onInputchange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;

    const mailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (value.match(mailRegExp) != null) {
      this.setState({
        emailValidation: true
      });
    } else {
      this.setState({
        emailValidation: false
      });
    }

    this.setState({
      [name]: value
    });
  };
}

export default SignUpContainer;
