import React from "react";
import styled, { css } from "../../typed-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faComment,
  faCog,
  faBell,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

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

const TopToolFrame = styled.div`
  position: relative;
  float: right;
  top: 10px;
  right: 15px;
  & svg {
    color: #8a8a8a;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const UnderlineButton = styled.div`
  position: relative;
  float: left;
  width: 10px;
  height: 10px;
  top: 3px;
  right: 20px;
  border-bottom: 2px solid #8a8a8a;
  cursor: pointer;
`;

const WindowButton = styled.div`
  position: relative;
  float: left;
  width: 10px;
  height: 10px;
  top: 3px;
  right: 10px;
  border: 2px solid #8a8a8a;
  cursor: pointer;
`;

const TopBtnFrame = styled.div`
  flex: 2;
`;

const Logo = styled.img`
  margin-left: 8px;
  margin-top: 11px;
`;

const TopMenuLogo = styled(NavLink)`
  position: relative;
  float: left;
  cursor: pointer;
  color: #7b736e;
  ${props =>
    props.name === "UserLogo"
      ? css`
          font-size: 25px;
          margin-left: 28px;
          margin-top: 15px;
        `
      : props.name === "CommentLogo"
      ? css`
          font-size: 29px;
          margin-left: 37px;
          margin-top: 12px;
        `
      : props.name === "SettingLogo"
      ? css`
          font-size: 29px;
          margin-left: 30px;
          margin-top: 10px;
        `
      : ""}

  &.active {
    color: white;
  }
`;

const Notification = styled.div`
  position: absolute;
  top: -7px;
  left: 17px;
  min-width: 18px;
  height: 18px;
  border-radius: 15px;
  background: #ff5b49;
  font-size: 13px;
  text-align: center;
  line-height: 1.4;
  color: white;
`;

const TopRightBtnFrame = styled.div`
  position: relative;
  cursor: pointer;
  top: 15px;
  right: 18px;
  float: right;
  text-align: center;
  line-height: 1.9;
`;

const TopRightLogo = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #4c403b;
  font-size: 15px;
  color: #938c87;
`;

const TopBar = () => (
  <Container>
    <LogoFrame>
      <Logo src="//raw.githubusercontent.com/dev4us/source_warehouse/master/images/kakaotalk_list_logo.png" />
      <TopToolFrame>
        <UnderlineButton />
        <WindowButton />
        <FontAwesomeIcon icon={faTimes} />
      </TopToolFrame>
    </LogoFrame>
    <TopBtnFrame>
      <TopMenuLogo name={"UserLogo"} to={"/main/friends"}>
        <FontAwesomeIcon icon={faUser} />
        <Notification>1</Notification>
      </TopMenuLogo>

      <TopMenuLogo name={"CommentLogo"} to={"/main/chats"}>
        <FontAwesomeIcon icon={faComment} />
        <Notification>3</Notification>
      </TopMenuLogo>

      <TopMenuLogo name={"SettingLogo"} to={"/main/setting"}>
        <FontAwesomeIcon icon={faCog} />
      </TopMenuLogo>

      <TopRightBtnFrame>
        <TopRightLogo>
          <FontAwesomeIcon icon={faBell} />
        </TopRightLogo>
      </TopRightBtnFrame>
    </TopBtnFrame>
  </Container>
);

export default TopBar;
