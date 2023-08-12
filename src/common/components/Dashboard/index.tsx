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
        margin: "auto",
        marginBottom: "50px",
      }}
    >
      <IntroGreetings />
      <CultureVitalSigns />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
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
