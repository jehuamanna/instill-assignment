import React from "react";
import CultureVitalSigns from "./CultureVitalSigns";
import IntroGreetings from "./IntroGreetingsCard";
import Box from "@mui/material/Box";
import InstillSense from "./InstillSense";
import PulseSurvey from "./PulseSurvery";
import ActionSteps from "./ActionSteps";

const Dashboard = () => {
  return (
    <Box
      sx={{
        // margin: "auto",
        padding: "30px",
        marginBottom: "50px",
      }}
    >
      <IntroGreetings />
      <CultureVitalSigns />
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",
        }}
      >
        <InstillSense />
        <PulseSurvey />
      </Box>
      <ActionSteps />
    </Box>
  );
};

export default Dashboard;
