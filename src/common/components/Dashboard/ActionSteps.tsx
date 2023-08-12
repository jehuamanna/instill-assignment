import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NeedsAttention from "../../assets/NeedsAttention.svg";
import styledSC from "styled-components";
import Button from "@mui/material/Button";

const Circle = styledSC.div`
height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
  background-color: #F5F7F9;
`;

const data = [
  {
    sentenceOne: "Psychological Safety Alert on Sales Team",
    sentenceTwo: "Share something vulnerable in your next team meeting.",
  },
  {
    sentenceOne: "You Have a Burnout Alert",
    sentenceTwo:
      "Implement 25 minute meetings for a 5 minute break between calls.",
  },
  {
    sentenceOne: "Inclusion Scores are Trending Down with New Teammates",
    sentenceTwo: "Ask their opinion in next meeting.",
  },
];

const ActionSteps = () => {
  return (
    <Box
      sx={{
        padding: "30px",
        background: "#FFFFFF",
        marginTop: "50px",
        boxShadow:
          "0px 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 5px 0 rgb(0 0 0 / 19%)",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "26px",
            color: "#666666",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
          }}
        >
          Advance your culture with
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "40px",
              lineHeight: "42px",
              color: "#333333",
              marginBottom: "10px",
              marginTop: "20px",
              whiteSpace: "nowrap",
            }}
          >
            Action Steps
          </Typography>
          <Box
            sx={{
              padding: "8px",
              height: "15px",
              borderRadius: "50px",
              background: "#FF3B6B1A",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              width="14px"
              height="auto"
              src={NeedsAttention}
              alt="needs attention"
            />
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "16px",
                color: "#FF3B6B",
                marginLeft: "5px",
                whiteSpace: "nowrap",
              }}
            >
              Needs attention
            </Typography>
          </Box>
        </Box>
      </Box>
      {data.map((item) => (
        <Box
          sx={{
            padding: "10px 20px",
            display: "flex",
            flexDirection: "row",
            borderRadius: "5px",
            boxShadow:
              "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 1px 1px rgb(0 0 0 / 19%)",
          }}
        >
          <Circle />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "25.2px",
                  margin: "10px",
                  color: "#333333",
                  whiteSpace: "nowrap",
                }}
              >
                {item.sentenceOne}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "22.4px",
                  color: "#333333",
                  margin: "10px",

                  whiteSpace: "nowrap",
                }}
              >
                {item.sentenceTwo}
              </Typography>
            </Box>
            <Button
              sx={{
                height: "40px",
                background: "#333333",
                borderRadius: "50px",
              }}
              variant="contained"
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "16.23px",
                  color: "#FFFFFF",
                  margin: "10px",

                  whiteSpace: "nowrap",
                }}
              >
                Take Action
              </Typography>
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ActionSteps;
