import { LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";

export const Text = ({ title, subTitle }) => {
  return (
    <Stack
      maxWidth={"1200px"}
      margin={"0 auto"}
      textAlign={"center"}
      alignItems={"center"}
    >
      <Typography style={{ padding: "15px" }} variant="h5">
        {title}
      </Typography>
      <span
        style={{
          backgroundColor: "#5A5AC9",
          height: "2px",
          width: "60px",
        }}
      ></span>
      <Typography style={{ padding: "15px" }} variant="p">
        {subTitle}
      </Typography>
    </Stack>
  );
};
