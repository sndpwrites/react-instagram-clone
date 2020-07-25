import React from "react";
import styled from "styled-components";
import { ProfilePhoto } from "../base-components";
export const TextUserName = styled.text`
  font-size: ${(props) => props.fontSize};
  text-color: ${(props) => props.textColor};
  margin-top: 5px;
  display: ${(props) => (props.block ? "block" : null)};
`;
const ContainerUserStory = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-right: 10px;
  height: auto;
`;
export const UserStory = (props) => {
  return (
    <ContainerUserStory>
      <ProfilePhoto
        src={props.profileURL}
        size="50px"
        alt="profile"
        story
        onClick={() => console.log("profilephoto")}
      />
      <TextUserName
        textColor="grey"
        fontSize="0.75em"
        fullWidth
        onClick={() => console.log("profileuser")}
      >
        {props.username}
      </TextUserName>
    </ContainerUserStory>
  );
};
