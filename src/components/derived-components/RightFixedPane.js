import React from "react";
import styled from "styled-components";
import { ProfilePhoto, ProfileName } from "../base-components";
const ContainerPane = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 4em;
  position: fixed;
  margin-top: 5em;
`;
const UserContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

const FooterContainer = styled.section`
  width: 10em;
  padding: 1px;
  overflow-wrap: normal;
  justify-content: center;
`;
export const RightFixedPane = (props) => {
  return (
    <ContainerPane>
      <UserContainer>
        <ProfilePhoto
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          size="50px"
          alt="profile"
        />
        <ProfileName>Jonas</ProfileName>
      </UserContainer>
      <p>Suggestions For You</p>
      <FooterContainer>
        {/* <a href="#">About</a>
        <a href="#">Help</a>
        <a href="#">Press</a>
        <a href="#">API</a>
        <a href="#">Jobs</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Locations</a>
        <a href="#">Top Accounts</a>
        <a href="#">Hashtags</a>
        <a href="#">Language</a> */}
      </FooterContainer>
    </ContainerPane>
  );
};
