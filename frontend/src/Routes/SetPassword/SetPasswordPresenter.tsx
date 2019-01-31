import React from "react";
import styled from "../../typed-components";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import CompleteBtn from "../../Components/CompleteBtn";

// styling this Component
const ContentsFrame = styled.div`
  width: 100%;
  height: 100%;
  background: #ececec;
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

const InputUserPassword = styled.input.attrs({
  type: "password"
})`
  width: 100%;
  height: 50px;
  border-top: 2px solid #dcdcdc;
  border-bottom: 2px solid #dcdcdc;
  border-left: none;
  border-right: none;
  font-size: 18px;
  padding-left: 20px;
  &::placeholder {
    font-size: 15px;
    color: #dcdcdc;
  }
  margin-top: ${props => (props.firstChild ? "20px" : "-6px")};
`;

interface IProps {
  onInputchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordValidation: boolean;
}

const SetPasswordPresenter: React.SFC<IProps> = ({
  onInputchange,
  passwordValidation
}) => (
  <ContentsFrame>
    <Helmet>
      <title>카카오계정 만들기 | 카카오톡</title>
    </Helmet>
    <Header title={`카카오계정 만들기`} backTo={"/"} />
    <BigNoto>비밀번호를 입력해주세요.</BigNoto>
    <InputUserPassword
      name={"setPassword"}
      placeholder={"비밀번호를 입력해주세요"}
      onChange={onInputchange}
      firstChild={true}
    />
    <InputUserPassword
      name={"confirmPassword"}
      placeholder={"비밀번호를 한번 더 입력해주세요"}
      onChange={onInputchange}
    />
    <Information>
      <Noto>
        · 비밀번호는 8 ~ 16 자의 영문 대소문자, 숫자, 특수문자를 조합하여
        설정해주세요.
      </Noto>
      <Noto>
        · 다른 사이트에서 사용하는 것과 통일하거나 쉬운 비밀번호는 사용하지
        마세요.
      </Noto>
      <Noto>· 안전한 계정 사용을 위해 비밀번호는 주기적으로 변경해주세요.</Noto>
    </Information>
    <CompleteBtn complete={passwordValidation} />
  </ContentsFrame>
);

export default SetPasswordPresenter;
