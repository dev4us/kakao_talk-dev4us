import React from "react";
import styled from "../../typed-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95px;
  background: #423630;
`;

const LogoFrame = styled.div`
  flex: 1;
`;

const TopBtnFrame = styled.div`
  flex: 2;
`;

const Logo = styled.img`
  margin-left: 8px;
  margin-top: 11px;
`;

const UserLogo = styled.div`
  position: relative;
  float: left;
  color: white;
  font-size: 30px;
  margin-left: 28px;
  margin-top: 10px;
`;

const CommentLogo = styled.div`
  position: relative;
  float: left;
  color: white;
  font-size: 35px;
  margin-left: 37px;
  margin-top: 7px;
`;

const TopBar = () => (
  <Container>
    <LogoFrame>
      <Logo src="//raw.githubusercontent.com/dev4us/source_warehouse/master/images/kakaotalk_list_logo.png" />
    </LogoFrame>
    <TopBtnFrame>
      <UserLogo>
        <FontAwesomeIcon icon={faUser} />
      </UserLogo>
      <CommentLogo>
        <FontAwesomeIcon icon={faComment} />
      </CommentLogo>
    </TopBtnFrame>
  </Container>
);

export default TopBar;
