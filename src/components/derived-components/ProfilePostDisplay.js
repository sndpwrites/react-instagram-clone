import React from "react";
import styled from "styled-components";
import * as _ from "lodash";
const GridContainer = styled.section`
  border: 0 solid #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
`;

const GridColumnContainer = styled.section`
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
`;
export const ProfilePostDisplay = (props) => {
  var splitPostList = _.chunk(props.postList, 3);
  return (
    <GridContainer>
      {splitPostList.map((postListRow, idx) => (
        <GridColumnContainer key={idx}>
          {postListRow.map((post, idx) => (
            <img
              key={idx}
              width="320"
              height="320"
              alt="people"
              style={{ objectFit: "cover", margin: "10px" }}
              src={post.post_url}
              onClick={() => alert("image")}
            ></img>
          ))}
        </GridColumnContainer>
      ))}
    </GridContainer>
  );
};
