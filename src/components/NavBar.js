import React from "react";
import styled from "styled-components";
import { Home } from "@styled-icons/material-outlined/Home";
import { Send } from "@styled-icons/material-outlined/Send";
import { Explore } from "@styled-icons/material-outlined/Explore";
import { FavoriteBorder } from "@styled-icons/material-outlined/FavoriteBorder";
import { ProfilePhoto, Button } from "./base-components";
const NavBarContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1em;
  padding-right: 1em;
  height: 40px;
  width: 100%;
  top: 0;
  margin-top: 0;
  margin-bottom: 40px;
  background-color: #e9e9e9;
  position: fixed;
  z-index: 1;
`;
const SearchBar = styled.input`
  margin-right: auto;
  text-align: center;
  border: none;
`;
const MenuActionsContainer = styled.section`
  margin: 5px;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const NavBar = (props) => {
  return (
    <NavBarContainer>
      <div style={{ flexGrow: 1, marginLeft: 0 }}>
        <h3>Instagram</h3>
      </div>
      <div style={{ flexGrow: 1 }}>
        <SearchBar type="text" placeholder="Search"></SearchBar>
      </div>
      <MenuActionsContainer>
        <Button onClick={() => console.log("clicked")}>
          <Home size="30" />
        </Button>
        <Button onClick={() => console.log("clicked")}>
          <Send size="30" />
        </Button>
        <Button onClick={() => console.log("clicked")}>
          <Explore size="30" />
        </Button>
        <Button onClick={() => console.log("clicked")}>
          <FavoriteBorder size="30" />
        </Button>
        <ProfilePhoto
          src={props.profilePhotoURL}
          size="30px"
          alt="profile"
          onClick={() => console.log("profile")}
        />
      </MenuActionsContainer>
    </NavBarContainer>
  );
};
