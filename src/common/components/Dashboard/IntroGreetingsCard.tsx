import React from "react";
import IntroGreetingAppleLogo from "../../assets/IntroGreetingsAppleLogo.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const IntroGreetings = () => {
  return (
    <>
      <Box sx={{ marginLeft: "50px", marginTop: "30px" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: "25px" }}>
          <img
            width="56px"
            height="auto"
            src={IntroGreetingAppleLogo}
            alt="Apple logo"
          />
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
            Apple Culture Dashboard
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "56px",
              lineHeight: "62px",
              color: "#333333",
            }}
          >
            Hi, Tim
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "22.4px",
              color: "#888888",
            }}
          >
            CEO, Apple Inc
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default IntroGreetings;
