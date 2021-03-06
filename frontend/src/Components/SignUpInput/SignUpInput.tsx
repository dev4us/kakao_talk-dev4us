import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 20px;
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
`;

interface IProps {
  defaultText: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.SFC<IProps> = ({ defaultText, onChange, name }) =>
  defaultText ? (
    <Container name={name} placeholder={defaultText} onChange={onChange} />
  ) : (
    <Container name={name} onChange={onChange} />
  );

export default Header;
