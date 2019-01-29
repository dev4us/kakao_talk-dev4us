import React from "react";
import styled from "../../typed-components";
import BackArrow from "../BackArrow";

const Container = styled.header`
  background-color: #473430;
  color: white;
  display: flex;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  align-items: center;
  & svg {
    fill: white;
  }
  margin-bottom: 50px;
  padding: 0 10px 0 15px;
`;

const Title = styled.label`
  margin-left: 15px;
`;

interface IProps {
  title: string;
  backTo?: string;
}

const Header: React.SFC<IProps> = ({ title, backTo }) => (
  <Container>
    {backTo && <BackArrow id={"BackArrow"} backTo={backTo} />}
    {backTo ? (
      <Title htmlFor="BackArrow">{title}</Title>
    ) : (
      <Title>{title}</Title>
    )}
  </Container>
);

export default Header;
