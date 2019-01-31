import React from "react";
import styled from "../../typed-components";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import CompleteBtn from "../../Components/CompleteBtn";
import SignUpInput from "../../Components/SignUpInput";

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
const Information = styled.div`
  display: block;
  width: 95%;
  margin: 0 auto;
  margin-top: 15px;
`;
const Noto = styled.p`
  margin-top: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #8f8f8f;
  line-height: 1.3;
`;

const BigNoto = styled(Noto)`
  margin-left: 15px;
  font-size: 18px;
  color: black;
`;

interface IProps {
  onInputchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailValidation: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SignUpPresenter: React.SFC<IProps> = ({
  onInputchange,
  emailValidation,
  onSubmit
}) => (
  <Background>
    <Container>
      <Helmet>
        <title>카카오계정 만들기 | 카카오톡</title>
      </Helmet>
      <Header title={`카카오계정 만들기`} backTo={"/"} />
      <BigNoto>카카오계정으로 사용할 이메일을 입력해주세요.</BigNoto>
      <SignUpInput
        name={"signUpMail"}
        defaultText={"이메일을 입력해주세요"}
        onChange={onInputchange}
      />
      <Information>
        <Noto>· 입력한 이메일로 가입 완료 메일이 발송됩니다.</Noto>
        <Noto>
          · 꼭 실제로 사용중인 이메일주소를 입력해주세요. 비밀번호 분실 시
          이메일을 통해 재설정이 가능합니다.
        </Noto>
      </Information>
      <CompleteBtn complete={emailValidation} onSubmit={onSubmit} />
    </Container>
  </Background>
);

export default SignUpPresenter;
