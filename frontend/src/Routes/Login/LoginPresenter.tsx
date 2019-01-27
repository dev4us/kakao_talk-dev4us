import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "../../typed-components";

// styling this Component
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #ffec34;
`;

const MainFrame = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid black;
  border-bottom: 1px solid #dcdcdc;
`;

const LoginFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 20%;
`;
const AccountFound = styled.div`
  width: 100%;
`;

const VectorIcon = styled.img`
  display: block;
  width: 35%;
  height: 23%;
`;
const LoginInputFrame = styled.div`
  margin-top: 5%;
`;
const LoginInput = styled.input`
  width: 100%;
  height: 5%;
  border: 1px solid #dcdcdc;
`;

interface IProps extends RouteComponentProps<any> {}

const LoginPresenter: React.SFC<IProps> = () => (
  <Container>
    <MainFrame>
      <LoginFrame>
        <VectorIcon src="//t1.daumcdn.net/cfile/tistory/246E224B56FFF86305" />

        <LoginInputFrame>
          <LoginInput />
          <LoginInput />
        </LoginInputFrame>
      </LoginFrame>
      <AccountFound />
    </MainFrame>
  </Container>
);

export default LoginPresenter;
