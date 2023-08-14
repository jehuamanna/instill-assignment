import React from "react";
import IntroGreetingAppleLogo from "../../assets/IntroGreetingsAppleLogo.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TypographyOne: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "26px",
        color: "#333333",
        ml: "10px",
      }}
    >
      {children}
    </Typography>
  );
};

const TypographyTwo: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "56px",
        lineHeight: "62px",
        color: "#333333",
      }}
    >
      {children}
    </Typography>
  );
};

const TypographyThree: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "22.4px",
        color: "#888888",
      }}
    >
      {children}
    </Typography>
  );
};

const IntroGreetings = () => {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: "25px" }}>
          <img
            width="56px"
            height="auto"
            src={IntroGreetingAppleLogo}
            alt="Apple logo"
          />
          <TypographyOne>Apple Culture Dashboard</TypographyOne>
        </Box>
        <Box>
          <TypographyTwo>Hi, Tim</TypographyTwo>
          <TypographyThree>CEO, Apple Inc</TypographyThree>
        </Box>
      </Box>
    </>
  );
};

export default IntroGreetings;
