import React from "react";
import "./App.css";
import styled from "styled-components";
import { NavBar } from "./components/NavBar";
import { ScreenProfilePage, ScreenHomePage } from "./components/screens/";
const Body = styled.section`
  display: flex;
  justify-content: center;
`;
function App() {
  return (
    <div>
      <NavBar profilePhotoURL="https://randomuser.me/api/portraits/lego/1.jpg" />
      <Body>
        <ScreenHomePage />
        {/* <ScreenProfilePage /> */}
      </Body>
    </div>
  );
}

export default App;
