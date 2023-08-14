import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NeedsAttention from "../../assets/NeedsAttention.svg";
import styledSC from "styled-components";
import Button from "@mui/material/Button";
import { useMediaQuery } from "usehooks-ts";

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

const Cards: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "max-content",
        padding: "30px",
        background: "#FFFFFF",
        marginTop: "50px",
        boxShadow:
          "0px 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 5px 0 rgb(0 0 0 / 19%)",
      }}
    >
      {children}
    </Box>
  );
};

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
        color: "#666666",
        whiteSpace: "nowrap",
        textTransform: "uppercase",
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
        fontSize: "40px",
        lineHeight: "42px",
        color: "#333333",
        marginBottom: "10px",
        marginTop: "20px",
        whiteSpace: "nowrap",
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
        lineHeight: "16px",
        color: "#FF3B6B",
        marginLeft: "5px",
        whiteSpace: "nowrap",
      }}
    >
      Needs attention
    </Typography>
  );
};

const WrapperOne: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const matches = useMediaQuery("(min-width: 480px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: matches ? "row" : "column",
        alignItems: "baseline",
      }}
    >
      {children}
    </Box>
  );
};

const WrapperTwo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
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
      {children}
    </Box>
  );
};

const ActionWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      sx={{
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        flexDirection: matches ? "row" : "column",
        borderRadius: "5px",
        marginTop: "10px",
        boxShadow:
          "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 1px 1px rgb(0 0 0 / 19%)",
      }}
    >
      {children}
    </Box>
  );
};

const ActionTypographyWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: matches ? "row" : "column",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

const ActionTypographyOne: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "25.2px",
        margin: "10px",
        color: "#333333",
        wordWrap: "break-word",
      }}
    >
      {children}
    </Typography>
  );
};

const ActionTypographyTwo: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "22.4px",
        color: "#333333",
        margin: "10px",
        wordWrap: "break-word",
      }}
    >
      {children}
    </Typography>
  );
};

const ActionButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Button
      sx={{
        height: "40px",
        background: "#333333",
        borderRadius: "50px",
        width: "180px",
      }}
      break-word
      variant="contained"
    >
      {children}
    </Button>
  );
};

const NeedsAttentionImg: React.FC<{}> = () => {
  return (
    <img
      width="14px"
      height="auto"
      src={NeedsAttention}
      alt="needs attention"
    />
  );
};

const ActionSteps = () => {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <Cards>
      <Box>
        <TypographyOne>Advance your culture with</TypographyOne>
        <WrapperOne>
          <TypographyTwo>Action Steps</TypographyTwo>
          <WrapperTwo>
            <NeedsAttentionImg />
            <TypographyThree>Needs attention</TypographyThree>
          </WrapperTwo>
        </WrapperOne>
      </Box>
      {data.map((item) => (
        <ActionWrapper>
          <Circle />
          <ActionTypographyWrapper>
            <Box sx={{ width: !matches ? "200px" : "100%" }}>
              <ActionTypographyOne>{item.sentenceOne}</ActionTypographyOne>
              <ActionTypographyTwo>{item.sentenceTwo}</ActionTypographyTwo>
            </Box>
            <ActionButton>
              <Typography>Take Action</Typography>
            </ActionButton>
          </ActionTypographyWrapper>
        </ActionWrapper>
      ))}
    </Cards>
  );
};

export default ActionSteps;
