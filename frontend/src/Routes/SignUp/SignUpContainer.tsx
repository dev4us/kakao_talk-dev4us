import React from "react";
import SignUpPresenter from "./SignUpPresenter";
import { RouteComponentProps } from "react-router-dom";

interface IState {
  signUpMail: string;
  emailValidation: boolean;
}

class SignUpContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    signUpMail: "",
    emailValidation: false
  };
  public render() {
    const { emailValidation } = this.state;
    return (
      <SignUpPresenter
        onInputchange={this.onInputchange}
        emailValidation={emailValidation}
        onSubmit={this.onSubmit}
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
    } as any);
  };

  public onSubmit = () => {
    const { history } = this.props;
    const { signUpMail } = this.state;

    history.push({
      pathname: "/set-password",
      state: {
        signUpMail
      }
    });
  };
}

export default SignUpContainer;
