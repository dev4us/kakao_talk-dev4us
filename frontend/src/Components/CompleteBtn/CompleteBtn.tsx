import React from "react";
import styled, { css } from "../../typed-components";

const Container = styled.button`
  display: block;
  width: 80%;
  height: 60px;
  background: #9b9b9b;

  margin: 0 auto;
  margin-top: 40px;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  ${props => (props.complete ? BtnActive : "")};
`;

const BtnActive = css`
  background: #ffec34;
  border: 1px solid #eddb2d;
  cursor: pointer;
`;

interface IProps {
  complete: boolean;
}

const Header: React.SFC<IProps> = ({ complete }) => (
  <Container complete={complete}>다음</Container>
);

export default Header;
