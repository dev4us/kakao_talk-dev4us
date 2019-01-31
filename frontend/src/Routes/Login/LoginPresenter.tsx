import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "../../typed-components";
import Helmet from "react-helmet";

// styling this Component
const ContentsFrame = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #d6c413;
  background: #ffec34;
`;

const LoginFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  padding-top: 30%;
`;

const VectorIcon = styled.img`
  display: block;
  width: 28%;
`;
const LoginInputFrame = styled.div`
  width: 70%;
  margin-top: 10%;
`;
const InputUserId = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #dcdcdc;
  padding: 10px;

  &::placeholder {
    color: #adadad;
  }
`;

const InputUserPw = styled(InputUserId).attrs({
  type: "password"
})`
  width: 100%;
  height: 50px;
  border: 1px solid #dcdcdc;
  padding: 10px;

  &::placeholder {
    color: #adadad;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #9b9b9b;
  ${props =>
    props.isIdMinLength && props.isPasswordMinLength ? LoginBtnActive : ""};
`;

const LoginBtnActive = css`
  background: #423630;
  color: white;
  border: 1px solid #423630;
  cursor: pointer;
`;

const AccountFindFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AccountSpan = styled.span`
  text-align: ${props => (props.right ? "right" : "left")};
  border-right: ${props => (props.right ? "1px solid #b1b1b1" : "")};
  ${props => (props.right ? "padding-right:15px " : "padding-left:15px")};
  font-size: 13px;
  color: #6e6e6e;
  cursor: pointer;
`;

interface IProps {
  inputUserId: string;
  inputUserPw: string;
  isIdMinLength: boolean;
  isPasswordMinLength: boolean;
  onInputchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginPresenter: React.SFC<IProps> = ({
  inputUserId,
  inputUserPw,
  isIdMinLength,
  isPasswordMinLength,
  onInputchange
}) => (
  <ContentsFrame>
    <Helmet>
      <title>로그인 | 카카오톡</title>
    </Helmet>
    <LoginFrame>
      <VectorIcon src="//raw.githubusercontent.com/dev4us/source_warehouse/master/images/kakao_vector.png" />

      <LoginInputFrame>
        <InputUserId
          name={`inputUserId`}
          value={inputUserId}
          onChange={onInputchange}
          placeholder="카카오계정 (이메일 또는 전화번호)"
        />
        <InputUserPw
          name={`inputUserPw`}
          value={inputUserPw}
          onChange={onInputchange}
          placeholder="비밀번호"
        />
        <LoginBtn
          isIdMinLength={isIdMinLength}
          isPasswordMinLength={isPasswordMinLength}
        >
          로그인
        </LoginBtn>
      </LoginInputFrame>
    </LoginFrame>
    <AccountFindFrame>
      <Link to={"/sign-up"}>
        <AccountSpan right={true}>카카오 회원가입</AccountSpan>
      </Link>
      <Link to={"/"}>
        <AccountSpan>비밀번호 재설정</AccountSpan>
      </Link>
    </AccountFindFrame>
  </ContentsFrame>
);

export default LoginPresenter;
