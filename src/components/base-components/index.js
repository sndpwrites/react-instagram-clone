import { BookmarkBorder } from "@styled-icons/material-outlined/BookmarkBorder";
import { MoreHoriz } from "@styled-icons/material-outlined/MoreHoriz";

import styled from "styled-components";

export const ContainerMainFeed = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 5em;
`;

export const ButtonMore = styled(MoreHoriz)`
  size: ${(props) => props.size};
  margin-left: auto;
  align-self: center;
`;
export const Button = styled.button`
  background-color: white;
  border: ${(props) => (props.border ? "outset" : "none")};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const ButtonBookMark = styled(BookmarkBorder)`
  size: ${(props) => props.size};
  margin-left: auto;
  right: 0;
  align-self: center;
`;
export const TextAreaComment = styled.textarea`
  border: none;
  resize: none;
  flex-grow: 1;
  placeholder: ${(props) => props.placeholder};
`;
export const BtnPostComment = styled.button`
  color: blue;
  background-color: white;
  font-size: 1em;
  border: none;
  margin-left: auto;
`;
export const Text = styled.text`
  font-size: ${(props) => props.fontSize};
  text-color: ${(props) => props.textColor};
  margin-top: 5px;
  display: ${(props) => (props.block ? "block" : null)};
  overflow: hidden;
`;
/* white-space: ${(props) => (photoCaption.length > 50 ? "nowrap" : null)}; */
/* text-overflow: ${(props) =>
    photoCaption.length > 50 ? "ellipsis" : null}; */
export const ProfilePhoto = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  margin-right: 0.1rem;
  border: ${(props) => (props.story ? "dashed red" : "none")};
`;

export const UserPhoto = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileName = styled.text`
  color: #000;
  font-weight: bold;
  font-size: 1em;
  align-self: center;
  margin-right: 0.1rem;
`;
