import React from "react";

const defaultValue: {
  Component: () => JSX.Element;
  setComponent: React.Dispatch<React.SetStateAction<() => JSX.Element>>;
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
} = {
  Component: () => <></>,
  setComponent: () => {},
  showSideBar: true,
  setShowSideBar: () => {},
};
const MainContext = React.createContext(defaultValue);
export default MainContext;
