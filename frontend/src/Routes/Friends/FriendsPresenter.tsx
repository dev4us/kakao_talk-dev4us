import React from "react";
import styled from "../../typed-components";
import Helmet from "react-helmet";

const ContentsFrame = styled.div`
  width: 100%;
  background: pink;
`;

const LoginPresenter = () => (
  <ContentsFrame>
    <Helmet>
      <title>친구 목록 | 카카오톡</title>
    </Helmet>
  </ContentsFrame>
);

export default LoginPresenter;
