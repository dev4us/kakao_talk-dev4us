import React from "react";
import styled from "../../typed-components";

const ResponsiveBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #dcdcdc;
`;

const MainFrame = styled.div`
  width: 440px;
  height: 775px;
  border: 1px solid white;
  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
  }
`;

const ResponsiveBoxPresenter: React.SFC<any> = ({ contents }) => (
  <ResponsiveBox>
    <MainFrame>{contents}</MainFrame>
  </ResponsiveBox>
);

export default ResponsiveBoxPresenter;
