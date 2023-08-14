import React from "react";
import Box from "@mui/material/Box";
import InstillSenseLogo from "../../assets/InstillSenseLogo.svg";
import SafeAndSecure from "../../assets/SafeAndSecure.svg";
import Typography from "@mui/material/Typography";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";
import { useMediaQuery } from "usehooks-ts";

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

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "max-content",
        padding: "30px",
        // width: "42%",
        background: "#FFFFFF",
        marginTop: "50px",
        marginRight: "50px",
        boxShadow:
          "0px 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 5px 0 rgb(0 0 0 / 19%)",
      }}
    >
      {children}
    </Box>
  );
};

const InstillSenseLogoImg: React.FC<{
  width: string;
  src: string;
  alt: string;
}> = ({ width, src, alt }) => {
  return <img width={width} height="auto" src={src} alt={alt} />;
};

const TypographyOne: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
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
      {children}
    </Typography>
  );
};

const IntellisenseDataTypographyOne: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
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
      {children}
    </Typography>
  );
};

const IntellisenseDataTypographyTwo: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
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
      {children}
    </Typography>
  );
};

const MeetingSentimentsTypographyOne: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
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
      {children}
    </Typography>
  );
};

const MeetingSentimentsTypographyTwo: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
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
      {children}
    </Typography>
  );
};

const MeetingSentimentsCircularProgress: React.FC<{
  item: { sentiment: string; color: string; value: number };
}> = ({ item }) => {
  return (
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
      <MeetingSentimentsTypographyTwo>
        {item.sentiment}
      </MeetingSentimentsTypographyTwo>
    </Box>
  );
};

const MeetingSentimentsWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
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
      {children}
    </Box>
  );
};

const IntellisenseDataWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      sx={{
        borderRadius: "5px",
        display: "flex",
        padding: "0px 30px",
        flexDirection: matches ? "row" : "column",
        justifyContent: "space-between",
        boxShadow:
          "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 1px 1px rgb(0 0 0 / 19%)",
      }}
    >
      {children}
    </Box>
  );
};

const WrapperOne: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
};

const WrapperTwo: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

const InstillSense = () => {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <Card>
      <WrapperOne>
        <WrapperTwo>
          <InstillSenseLogoImg
            width="64"
            src={InstillSenseLogo}
            alt="instillSenseLogo"
          />
          <TypographyOne>Instill Sense</TypographyOne>
        </WrapperTwo>
        <InstillSenseLogoImg
          width="128"
          src={SafeAndSecure}
          alt="safe and secure"
        />
      </WrapperOne>
      <IntellisenseDataWrapper>
        {instillSenseDataOne.map((item) => (
          <Box>
            <IntellisenseDataTypographyOne>
              {item.name}
            </IntellisenseDataTypographyOne>
            <IntellisenseDataTypographyTwo>
              {item.value}
            </IntellisenseDataTypographyTwo>
          </Box>
        ))}
      </IntellisenseDataWrapper>
      <MeetingSentimentsWrapper>
        <MeetingSentimentsTypographyOne>
          Meetings Sentiments
        </MeetingSentimentsTypographyOne>

        <Box
          sx={{ display: "flex", flexDirection: matches ? "row" : "column" }}
        >
          {meetingSentiments.map((item) => (
            <MeetingSentimentsCircularProgress item={item} />
          ))}
        </Box>
      </MeetingSentimentsWrapper>
    </Card>
  );
};

export default InstillSense;
