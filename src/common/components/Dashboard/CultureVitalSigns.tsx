import React from "react";
import IntroGreetings from "./IntroGreetingsCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";
const data = [
  { name: "Inculsion", valueOne: 25, valueTwo: -25 },
  { name: "Trust", valueOne: 85, valueTwo: 15 },
  { name: "Psychological Safety", valueOne: 60, valueTwo: -5 },
  { name: "Innovation", valueOne: 75, valueTwo: 22 },
  { name: "Burnout", valueOne: 38, valueTwo: -25 },
];

const CultureVitalSigns = () => {
  return (
    <>
      <Box
        sx={{
          padding: "30px",
          marginTop: "30px",
          borderRadius: "3px",
          background: "#FFFFFF",
          boxShadow:
            "0px 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 5px 0 rgb(0 0 0 / 19%)",
        }}
      >
        <Box
          sx={{
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "26px",
              color: "#666666",
            }}
          >
            THIS MONTH
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "40px",
              lineHeight: "42px",
              color: "#333333",
            }}
          >
            Culture Vital Signs
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {data.map((item) => (
            <Box
              key={item.name}
              style={{
                width: "150px",
                display: "flex",
                flexDirection: "column",
                margin: "15px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "16px",
                  color: "#333333",
                  marginBottom: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </Typography>
              <Box
                key={item.name}
                style={{
                  width: "100px",
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px",
                }}
              >
                <CircularProgressbar
                  styles={buildStyles({
                    textColor: "#333333",
                    pathColor: "#333333",
                    trailColor: "#DFDFDF",
                  })}
                  value={item.valueOne}
                  text={`${item.valueOne} %`}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "14px",
                  color: item.valueTwo > 0 ? "#6ED29C" : "#FF3B6B",
                  marginBottom: "10px",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {Math.abs(item.valueTwo)}%
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CultureVitalSigns;
