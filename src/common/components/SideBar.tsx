import React from "react";
import styled from "styled-components";
import DashboardLogo from "../assets/DashboardLogo.svg";
import CompanyLogo from "../assets/CompanyLogo.png";
import Group_49 from "../assets/Group_49.svg";
import Group_50 from "../assets/Group_50.png";
import Group_51 from "../assets/Group_51.svg";
import Group_52 from "../assets/Group_52.svg";
import { useContext } from "react";
import MainContext from "../context/mainContext";
import { useMediaQuery } from "usehooks-ts";
import Dashboard from "./Dashboard";
import ClickAwayListener from "react-click-away-listener";
import Box from "@mui/material/Box";

const logos = [
  {
    logo: DashboardLogo,
    component: Dashboard,
    alt: "alternate_text1",
  },
  { logo: Group_49, component: () => <>Group_49</>, alt: "alternate_text2" },
  { logo: Group_50, component: () => <>Group_50</>, alt: "alternate_text3" },
  { logo: Group_51, component: () => <>Group_51</>, alt: "alternate_text4" },
];

const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  margin: 10px 0px 0px 0px;
`;

const IconLists = styled.div`
  width: 50px;
  height: 100vh;
  background: #111111;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SingleIcon = styled.div`
  width: 50px;
  height: 40px;
  background: #111111;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SideBar = () => {
  const { setComponent, showSideBar, setShowSideBar } = useContext(MainContext);
  const matches = useMediaQuery("(min-width: 480px)");
  console.log("Matches", matches);
  React.useEffect(() => {
    setComponent(() => logos[0].component);
  }, []);

  React.useEffect(() => {
    setShowSideBar(matches);
  }, [matches]);

  return (
    <Box sx={{ position: !matches ? "absolute" : "relative" }}>
      {showSideBar ? (
        <ClickAwayListener
          onClickAway={() => !matches && setShowSideBar(!showSideBar)}
        >
          <IconLists>
            <LogosContainer>
              <LogoWrapper
                onClick={() => !matches && setShowSideBar(!showSideBar)}
              >
                <img
                  width="50px"
                  height="auto"
                  src={CompanyLogo}
                  alt={"alternate_text6"}
                />
              </LogoWrapper>
              {logos.map((logo) => (
                <LogoWrapper key={logo.alt}>
                  <img
                    width="50px"
                    height="auto"
                    src={logo.logo}
                    alt={logo.alt}
                  />
                </LogoWrapper>
              ))}
            </LogosContainer>
            <LogoWrapper>
              <img
                width="50px"
                height="auto"
                src={Group_52}
                alt={"alternate_text5"}
              />
            </LogoWrapper>
          </IconLists>
        </ClickAwayListener>
      ) : null}
    </Box>
  );
};

export default SideBar;
