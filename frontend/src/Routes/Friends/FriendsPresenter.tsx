import React from "react";
import styled, { css } from "../../typed-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Helmet from "react-helmet";

const ContentsFrame = styled.div`
  flex: 1;
  flex-direction: rows;
  width: 100%;

  background: white;
`;

const SearchFrame = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #dcdcdc;
`;

const SearchIcon = styled.div`
  position: relative;

  color: #beb9b9;
  font-size: 18px;
`;

const SearchInput = styled.input`
  width: 50%;
  margin-left: 15px;
  border: none;
  font-size: 14px;
`;

const ListFrame = styled.div`
  width: 100%;
  height: 100%;
`;

const MyProfileFrame = styled.div`
  width: 100%;
  height: 110px;
  border-bottom: 1px solid #dcdcdc;
`;

const SubTitle = styled.div`
  position: relative;
  top: 15px;
  left: 18px;
  letter-spacing: 0px;
  color: #727272;
  font-size: 12px;
  margin-bottom: 13px;
`;

const ProfileObject = styled.div`
  display: flex;
  padding-left: 15px;
  width: 100%;
  flex: 1;
  ${props =>
    props.name === "myProfileObject"
      ? css`
          padding-top: 15px;
        `
      : css`
          padding-top: 10px;
        `}
`;

const ProfilePhoto = styled.img`
  border: 2px solid #dcdcdc;
  border-radius: 20px;
  ${props =>
    props.name === "myProfilePhoto"
      ? css`
          width: 60px;
          height: 60px;
        `
      : css`
          width: 50px;
          height: 50px;
        `}
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding-left: 15px;
`;
const UserName = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
const StatusMsg = styled.div`
  margin-top: 5px;
  font-size: 11px;
`;

const FriendObject = styled.div`
  width: 100%;
  height: 70px;
  cursor: pointer;

  ${props =>
    props.firstChild
      ? css`
          margin-top: 20px;
        `
      : undefined}

  &:hover {
    background: #ececec;
  }
`;

const LoginPresenter = () => (
  <ContentsFrame>
    <Helmet>
      <title>친구 목록 | 카카오톡</title>
    </Helmet>
    <SearchFrame>
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
      <SearchInput />
    </SearchFrame>
    <ListFrame>
      <MyProfileFrame>
        <SubTitle>내 프로필</SubTitle>
        <ProfileObject name={"myProfileObject"}>
          <ProfilePhoto
            name={"myProfilePhoto"}
            src={
              "//footballk.net/w/images/thumb/3/39/%ED%99%8D%EA%B8%B8%EB%8F%99.jpg/300px-%ED%99%8D%EA%B8%B8%EB%8F%99.jpg"
            }
          />
          <ProfileText>
            <UserName>홍길동</UserName>
            <StatusMsg>반가워요. 개발자 홍길동입니다.</StatusMsg>
          </ProfileText>
        </ProfileObject>
      </MyProfileFrame>

      <SubTitle>친구 1</SubTitle>

      <FriendObject firstChild={true}>
        <ProfileObject>
          <ProfilePhoto
            name={"friendProfilePhoto"}
            src={
              "//1.bp.blogspot.com/-fyqr7c2EI-k/UC5fwMypegI/AAAAAAAAAKk/Td46mnDgA_k/s1600/%EA%B9%80%EC%82%BF%EA%B0%93.jpg"
            }
          />
          <ProfileText>
            <UserName>김삿갓</UserName>
            <StatusMsg>긍정적으로 살자</StatusMsg>
          </ProfileText>
        </ProfileObject>
      </FriendObject>

      <FriendObject>
        <ProfileObject>
          <ProfilePhoto
            name={"friendProfilePhoto"}
            src={
              "//1.bp.blogspot.com/-fyqr7c2EI-k/UC5fwMypegI/AAAAAAAAAKk/Td46mnDgA_k/s1600/%EA%B9%80%EC%82%BF%EA%B0%93.jpg"
            }
          />
          <ProfileText>
            <UserName>김삿갓</UserName>
            <StatusMsg>긍정적으로 살자</StatusMsg>
          </ProfileText>
        </ProfileObject>
      </FriendObject>

      <FriendObject>
        <ProfileObject>
          <ProfilePhoto
            name={"friendProfilePhoto"}
            src={
              "//1.bp.blogspot.com/-fyqr7c2EI-k/UC5fwMypegI/AAAAAAAAAKk/Td46mnDgA_k/s1600/%EA%B9%80%EC%82%BF%EA%B0%93.jpg"
            }
          />
          <ProfileText>
            <UserName>김삿갓</UserName>
            <StatusMsg>긍정적으로 살자</StatusMsg>
          </ProfileText>
        </ProfileObject>
      </FriendObject>
    </ListFrame>
  </ContentsFrame>
);

export default LoginPresenter;
