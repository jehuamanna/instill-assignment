import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";
import { useMediaQuery } from "usehooks-ts";

const ComponentWrapperTwo: React.FC<{
  children: React.ReactNode;
  danger: boolean;
}> = ({ children, danger }) => {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: "5px",
        width: matches ? "38%" : "75%",
        marginTop: "10px",
        background: danger ? "#FF6E6E0F" : "inherit",

        boxShadow:
          "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 1px 1px rgb(0 0 0 / 19%)",
      }}
    >
      {children}
    </Box>
  );
};

const TypographyRemarks: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "19.6px",
        color: "#666666",
        marginBottom: "10px",
        whiteSpace: "nowrap",
        display: "inline-flex",
      }}
    >
      {children}
    </Typography>
  );
};

const ComponentOne = ({
  name,
  remarks,
  value,
}: {
  name: string;
  remarks: JSX.Element;
  value: number;
}) => {
  return (
    <ComponentWrapperTwo danger={value < 5}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "22.4px",
            wordWrap: "wrap",

            color: value < 5 ? "#FF3B6B" : "#111111",
            marginBottom: "10px",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            width: "60px",
            display: "flex",
            flexDirection: "column",
            margin: "15px",
          }}
        >
          <CircularProgressbar
            value={Number(value)}
            text={`${value}%`}
            circleRatio={0.5}
            strokeWidth={12}
            styles={buildStyles({
              rotation: 0.75,
              strokeLinecap: "butt",
              trailColor: "#eee",
              pathColor: "#6ED29C",
            })}
          />
        </Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "19.6px",
            color: value < 5 ? "#FF3B6B" : "#111111",
            marginBottom: "10px",
            whiteSpace: "nowrap",
          }}
        >
          {remarks}
        </Typography>
      </Box>
    </ComponentWrapperTwo>
  );
};

const ComponentTwo = ({
  name,
  remarks,
  value,
}: {
  name: string;
  remarks: JSX.Element;
  value: number;
}) => {
  return (
    <ComponentWrapperTwo danger={value < 5}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            wordWrap: "break-word",

            lineHeight: "22.4px",
            color: "#111111",
            marginBottom: "10px",
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "40px",
              lineHeight: "60px",
              color: value < 5 ? "#FF3B6B" : "#111111",
              marginBottom: "10px",
              whiteSpace: "nowrap",
            }}
          >
            {value.toString()}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "60px",
              color: "#111111",
              whiteSpace: "nowrap",
            }}
          >
            /10
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "19.6px",
            color: "#111111",
            marginBottom: "10px",
            whiteSpace: "nowrap",
          }}
        >
          {remarks}
        </Typography>
      </Box>
    </ComponentWrapperTwo>
  );
};

const ComponentThree = ({
  name,
  remarks,
  value,
}: {
  name: string;
  remarks: JSX.Element;
  value: number;
}) => {
  return (
    <ComponentWrapperTwo danger={value < 5}>
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            wordWrap: "break-word",

            lineHeight: "22.4px",
            color: value < 5 ? "#FF3B6B" : "#111111",
            marginBottom: "10px",
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "40px",
              lineHeight: "60px",
              color: "#111111",
              marginBottom: "10px",
              whiteSpace: "nowrap",
            }}
          >
            {value.toString()}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "64px",
              color: "#111111",
              marginTop: "20px",
              whiteSpace: "nowrap",
            }}
          >
            %
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "19.6px",
            color: value < 5 ? "#FF3B6B" : "#111111",
            marginBottom: "10px",
            whiteSpace: "nowrap",
          }}
        >
          {remarks}
        </Typography>
      </Box>
    </ComponentWrapperTwo>
  );
};

const data = [
  {
    name: "eNPS Score",
    value: 54,
    remarks: (
      <>
        Score is <TypographyRemarks>&nbsp; excellent</TypographyRemarks>
      </>
    ),
    Component: ComponentOne,
  },
  {
    name: "Support from Manager",
    value: 7.5,
    remarks: (
      <>
        Score &#62; 7 is a <TypographyRemarks>&nbsp;Good one</TypographyRemarks>
      </>
    ),
    Component: ComponentTwo,
  },
  {
    name: "Mission & Values Alignment",
    value: 60,
    remarks: (
      <>
        Score is <TypographyRemarks>&nbsp;Average</TypographyRemarks>{" "}
      </>
    ),
    Component: ComponentThree,
  },
  {
    name: "Performance Feedback",
    value: 4.5,
    remarks: (
      <>
        <TypographyRemarks>Need focus&nbsp;</TypographyRemarks> on this
      </>
    ),
    Component: ComponentTwo,
  },
];

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "30px",
        // width: "42%",
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

const WrapperOne: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
};

const WrapperTwo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      sx={{
        display: "flex",

        flexDirection: matches ? "row" : "column",
        justifyContent: "space-between",
        width: "100%",
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
        marginBottom: "10px",
        whiteSpace: "nowrap",
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
        marginTop: "10px",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Typography>
  );
};

const PulseSurvey = () => {
  return (
    <Card>
      <TypographyOne>This month</TypographyOne>
      <TypographyTwo>Pulse Survey</TypographyTwo>

      <WrapperOne>
        <WrapperTwo>
          {data.slice(0, 2).map((item) => {
            const { Component } = item;
            return (
              <Component
                name={item.name}
                remarks={item.remarks}
                value={item.value}
              />
            );
          })}
        </WrapperTwo>
        <WrapperTwo>
          {data.slice(2).map((item) => {
            const { Component } = item;
            return (
              <Component
                name={item.name}
                remarks={item.remarks}
                value={item.value}
              />
            );
          })}
        </WrapperTwo>
      </WrapperOne>
    </Card>
  );
};

export default PulseSurvey;
