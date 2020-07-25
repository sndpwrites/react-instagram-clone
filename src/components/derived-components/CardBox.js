import { FavoriteBorder } from "@styled-icons/material-outlined/FavoriteBorder";
import { ModeComment } from "@styled-icons/material-outlined/ModeComment";
import { Send } from "@styled-icons/material-outlined/Send";
import React from "react";
import styled from "styled-components";
import {
  BtnPostComment,
  ButtonBookMark,
  ButtonMore,
  ProfileName,
  ProfilePhoto,
  Text,
  TextAreaComment,
  UserPhoto,
  Button,
} from "../base-components";
const ContainerCardBox = styled.section`
  width: 30em;
  padding: 0.5em;
  margin: 0.1em;
  box-shadow: 3px 3px 3px grey;
  border: 1px solid #999999;
  margin-bottom: 30px;
  margin-top: 20px;
`;
const ContainerCardHeader = styled.section`
  display: flex;
  flex: row;
  justify-content: flex-start;
`;
const ContainerUserActions = styled.section`
  display: flex;
  flex: row;
  justify-content: flex-start;
`;
const ContainerCommentBox = styled.section`
  display: flex;
  flex: row;
  justify-content: flex-start;
`;

export const CardBox = (props) => {
  return (
    <ContainerCardBox>
      <ContainerCardHeader>
        <ProfilePhoto
          src={props.postData.profileURL}
          size="40px"
          alt="profile"
          story={props.postData.hasStory ? true : null}
          onClick={() => console.log("ProfilePhotoClicked")}
        />
        <ProfileName>{props.postData.username}</ProfileName>
        <Button onClick={() => console.log("pressed")}>
          <ButtonMore size="20" />
        </Button>
      </ContainerCardHeader>
      <div>
        <UserPhoto src={props.postData.postURL} alt="profile"></UserPhoto>
      </div>
      <ContainerUserActions>
        <Button onClick={() => console.log("pressed")}>
          <FavoriteBorder size="30" />
        </Button>
        <Button onClick={() => console.log("pressed")}>
          <ModeComment size="30" />
        </Button>
        <Button onClick={() => console.log("pressed")}>
          <Send size="30" />
        </Button>

        <ButtonBookMark size="30" />
      </ContainerUserActions>

      <Text textColor="black" fontSize="0.8em" fullWidth block>
        {props.postData.numberOfLikes} likes
      </Text>
      {props.postData.commentList.map((objComment, index) => (
        <React.Fragment key={index}>
          <Text textColor="black" fontSize="0.8em" block>
            <ProfileName>{objComment.username}</ProfileName>
            {objComment.comment}
            {objComment.comment.length > 50 ? <span>More</span> : null}
          </Text>
        </React.Fragment>
      ))}

      <Text textColor="grey" fontSize="0.5em" block>
        {props.postData.postCreated}
      </Text>
      <hr />
      <ContainerCommentBox>
        <TextAreaComment placeholder="Add a comment..."></TextAreaComment>
        <BtnPostComment>Post</BtnPostComment>
      </ContainerCommentBox>
    </ContainerCardBox>
  );
};
