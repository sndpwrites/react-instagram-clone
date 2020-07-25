import { Settings } from "@styled-icons/material-outlined/Settings";
import React from "react";
import styled from "styled-components";
import {
  Button,
  ContainerMainFeed,
  ProfilePhoto,
  Text,
} from "../base-components";
import { myProfileDetails } from "../constants";
import { ProfilePostDisplay } from "../derived-components/";
import { ProfilePage } from "../page-containers";
const ContainerProfileHeader = styled.section`
  display: flex;
  width: 50em;
  height: auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;
const ContainerUserPost = styled.section`
  display: flex;
  width: max-content;
  justify-content: center;
  height: auto;
`;
const ContainerColumn = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
const ContainerRow = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;
export const ScreenProfilePage = (props) => {
  return (
    <ProfilePage>
      <ContainerMainFeed>
        <ContainerProfileHeader>
          <ProfilePhoto
            src={myProfileDetails.profileURL}
            size="150px"
            alt="profile"
            story
            onClick={() => console.log("profilephoto")}
          />
          <ContainerColumn>
            <ContainerRow>
              <Text fontSize="32px" textColor="grey">
                {myProfileDetails.username}
              </Text>
              <Button border onClick={() => alert("Edit Profile")}>
                Edit Profile
              </Button>
              <Settings size="30" />
            </ContainerRow>
            <ContainerRow>
              <p>
                <b>{myProfileDetails.posts}</b> posts
              </p>
              <p>
                <b>{myProfileDetails.followers}</b> followers
              </p>
              <p>
                <b>{myProfileDetails.following}</b> following
              </p>
            </ContainerRow>
            <ContainerColumn>
              <p>{myProfileDetails.profileName}</p>
              <p>{myProfileDetails.profileDescription}</p>
            </ContainerColumn>
          </ContainerColumn>
        </ContainerProfileHeader>
        <ContainerUserPost>
          <ProfilePostDisplay postList={myProfileDetails.postDetails} />
        </ContainerUserPost>
      </ContainerMainFeed>
    </ProfilePage>
  );
};
