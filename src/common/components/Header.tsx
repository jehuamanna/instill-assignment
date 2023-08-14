import React from "react";
import SearchBar from "./SearchBar";
import styledSC from "styled-components";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "usehooks-ts";
import MenuIcon from "@mui/icons-material/Menu";
import MainContext from "../context/mainContext";

const HeaderWrapper = styledSC.div`
  background: #FFFFFF;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSearchBar = styled(SearchBar)(() => ({
  margin: "20px 0 20px 0",
  background: "red",
}));

export const Circle = styledSC.div`
height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
  background-color: #F5F7F9;
`;

const UserNameWithCircle = () => {
  const matches = useMediaQuery("(min-width: 580px)");

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {matches ? (
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "34px",
            textAlign: "right",
            color: "#333333",
          }}
        >
          Tim Cook
        </Typography>
      ) : null}
      <Circle />
    </Box>
  );
};

const Header = () => {
  const { showSideBar, setShowSideBar } = React.useContext(MainContext);

  return (
    <Box sx={{ display: "flex" }}>
      {!showSideBar ? (
        <MenuIcon
          sx={{ margin: "auto" }}
          onClick={() => setShowSideBar(!showSideBar)}
        />
      ) : (
        <MenuIcon
          sx={{ visibility: "hidden" }}
          onClick={() => setShowSideBar(!showSideBar)}
        />
      )}
      <HeaderWrapper>
        <StyledSearchBar />
        <UserNameWithCircle />
      </HeaderWrapper>
    </Box>
  );
};

export default Header;
