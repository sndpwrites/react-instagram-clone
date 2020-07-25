import styled from "styled-components";
import React from "react";
import { CardBox, UserStory, RightFixedPane } from "../derived-components";
import { ContainerMainFeed } from "../base-components";
import { userPostsList, userStoryList } from "../constants";
import { HomePage } from "../page-containers";
const ContainerStoryFeed = styled.section`
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 30em;
`;

export const ScreenHomePage = (props) => {
  return (
    <HomePage>
      <div>
        <ContainerMainFeed>
          <ContainerStoryFeed>
            {userStoryList.map((userStory, index) => (
              <UserStory
                onClick={() => console.log("UserStory")}
                key={index}
                username={userStory.username}
                profileURL={userStory.profileURL}
              />
            ))}
          </ContainerStoryFeed>
          {userPostsList.map((userPost, index) => (
            <CardBox key={index} postData={userPost} />
          ))}
        </ContainerMainFeed>
      </div>
      <div>
        <RightFixedPane />
      </div>
    </HomePage>
  );
};
