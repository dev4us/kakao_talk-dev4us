import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "../../typed-components";
import Helmet from "react-helmet";
import Header from "../../Components/Header";

// styling this Component
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #dcdcdc;
`;

const Container = styled.div`
  width: 440px;
  height: 775px;
  background: #ececec;

  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
  }
`;

const H2 = styled.h2`
  margin-left: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
`;

const InputUserEmail = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-top: 2px solid #dcdcdc;
  border-bottom: 2px solid #dcdcdc;
  border-left: none;
  border-right: none;
  font-size: 20px;
  padding-left: 20px;
`;

interface IProps extends RouteComponentProps<any> {
  onInputchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpPresenter: React.SFC<IProps> = ({ onInputchange }) => (
  <Background>
    <Container>
      <Helmet>
        <title>카카오계정 만들기 | 카카오톡</title>
      </Helmet>
      <Header title={`카카오계정 만들기`} backTo={"/"} />
      <H2>카카오계정으로 사용할 이메일을 입력해주세요.</H2>
      <InputUserEmail />
    </Container>
  </Background>
);

export default SignUpPresenter;
