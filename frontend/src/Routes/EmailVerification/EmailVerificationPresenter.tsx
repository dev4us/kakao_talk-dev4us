import React from "react";
import { NavLink } from "react-router-dom";
import styled from "../../typed-components";
import Helmet from "react-helmet";

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  width: 100%;
  height: 150px;
  background: #fedb31;
`;

const HeaderLogo = styled.img`
  position: relative;
`;

const Contents = styled.div`
  padding: 25px;
`;

const NavBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 50px;
  background: #fedb31;
  font-size: 15px;
  font-weight: bold;
  margin-top: 25px;
`;

const H1Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContentsText = styled.p`
  line-height: 2;
`;

const EmailVerificationPresenter = () => (
  <div>
    <Helmet>
      <title>카카오톡 계정 | 카카오톡</title>
    </Helmet>
    <Header>
      <HeaderLogo src="//github.com/dev4us/source_warehouse/blob/master/images/KakaoTalk_20190212_115726008.png?raw=true" />
    </Header>
    <Contents>
      <H1Text>환영합니다!</H1Text>
      <ContentsText>
        이메일 인증이 완료되었습니다.
        <br />
        이제 아래 버튼을 눌러 카카오톡을 이용해보세요!
        <br />
        <NavBtn to="/">로그인하러 가기</NavBtn>
      </ContentsText>
    </Contents>
  </div>
);

export default EmailVerificationPresenter;
