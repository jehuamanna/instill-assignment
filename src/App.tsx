import React from "react";
import "./App.css";
import Header from "./common/components/Header";
import SideBar from "./common/components/SideBar";
import styled from "styled-components";
import MainContext from "./common/context/mainContext";
import { useMediaQuery } from "usehooks-ts";

const Main = styled.div`
  display: flex;
  position: relative;
`;

const RightArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

function App() {
  const initialValue = () => () => <>loading</>;
  const matches = useMediaQuery("(min-width: 480px)");

  const [Component, setComponent] = React.useState(initialValue);
  const [showSideBar, setShowSideBar] = React.useState(matches);
  return (
    <MainContext.Provider
      value={{ setShowSideBar, showSideBar, Component, setComponent }}
    >
      <Main>
        <SideBar />
        <RightArea>
          <Header />
          <Component />
        </RightArea>
      </Main>
    </MainContext.Provider>
  );
}

export default App;
