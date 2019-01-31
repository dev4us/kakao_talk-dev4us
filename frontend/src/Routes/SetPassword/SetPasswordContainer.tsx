import React from "react";
import { RouteComponentProps } from "react-router-dom";
import SetPasswordPresenter from "./SetPasswordPresenter";

interface IProps extends RouteComponentProps<any> {}
interface IState {
  setUserMail: string;
  setPassword: string;
  confirmPassword: string;
  passwordValidation: boolean;
}

class SetPasswordContainer extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    if (!props.location.state) {
      props.history.push("/");
    }

    this.state = {
      setUserMail: props.location.state && props.location.state.signUpMail,
      setPassword: "",
      confirmPassword: "",
      passwordValidation: false
    };
  }
  public render() {
    const { passwordValidation } = this.state;
    return (
      <SetPasswordPresenter
        onInputchange={this.onInputchange}
        passwordValidation={passwordValidation}
      />
    );
  }
  public onInputchange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;

    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}/;

    this.setState(
      {
        [name]: value
      } as any,
      () => {
        const { setPassword, confirmPassword } = this.state;

        if (
          setPassword.match(passwordRegExp) != null &&
          setPassword === confirmPassword
        ) {
          this.setState({
            passwordValidation: true
          });
        } else {
          this.setState({
            passwordValidation: false
          });
        }
      }
    );
  };
}

export default SetPasswordContainer;
