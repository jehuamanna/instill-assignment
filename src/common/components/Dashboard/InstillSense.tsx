import React from "react";
import CultureVitalSigns from "./CultureVitalSigns";
import IntroGreetings from "./IntroGreetingsCard";
import Box from "@mui/material/Box";
import InstillSenseLogo from "../../assets/InstillSenseLogo.svg";
import SafeAndSecure from "../../assets/SafeAndSecure.svg";
import Typography from "@mui/material/Typography";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";
const instillSenseDataOne = [
  {
    name: "Upcoming Meetings",
    value: "12",
  },
  { name: "New Summaries", value: "03" },
];

const meetingSentiments = [
  {
    sentiment: "positive",
    value: 62,
    color: "#6ED29C",
  },
  {
    sentiment: "neutral",
    value: 30,
    color: "#FBBF24",
  },
  {
    sentiment: "negative",
    value: 8,
    color: "#FF3B6B",
  },
];

const InstillSense = () => {
  return (
    <Box
      sx={{
        padding: "30px",
        width: "42%",
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 5px 0 rgb(0 0 0 / 19%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            width="64"
            height="auto"
            src={InstillSenseLogo}
            alt="instillSenseLogo"
          />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "26px",
              color: "#333333",
              marginBottom: "20px",
              marginTop: "20px",
              whiteSpace: "nowrap",
            }}
          >
            Instill Sense
          </Typography>
        </Box>
        <img src={SafeAndSecure} alt="safe and secure" />
      </Box>
      <Box
        sx={{
          borderRadius: "5px",
          display: "flex",
          padding: "0px 30px",
          flexDirection: "row",
          justifyContent: "space-between",
          boxShadow:
            "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 1px 1px rgb(0 0 0 / 19%)",
        }}
      >
        {instillSenseDataOne.map((item) => (
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#333333",
                marginBottom: "10px",
                marginTop: "20px",
                whiteSpace: "nowrap",
              }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "40px",
                lineHeight: "60px",
                color: "#333333",
                marginBottom: "10px",
                marginTop: "20px",
                whiteSpace: "nowrap",
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          borderRadius: "5px",
          display: "flex",
          padding: "0px 30px",
          flexDirection: "column",
          marginTop: "30px",
          justifyContent: "space-between",
          boxShadow:
            "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 1px 1px rgb(0 0 0 / 19%)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#333333",
            marginBottom: "10px",
            marginTop: "20px",
            whiteSpace: "nowrap",
          }}
        >
          Meetings Sentiments
        </Typography>
        <Box sx={{ display: "flex" }}>
          {meetingSentiments.map((item) => (
            <Box
              key={item.sentiment}
              style={{
                width: "100px",
                display: "flex",
                flexDirection: "column",
                margin: "15px",
              }}
            >
              <CircularProgressbar
                strokeWidth={4}
                styles={buildStyles({
                  textColor: "#333333",
                  pathColor: item.color,

                  trailColor: "#DFDFDF",
                })}
                value={item.value}
                text={`${item.value} %`}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "22.4px",
                  color: "#333333",
                  marginTop: "10px",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {item.sentiment}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InstillSense;
