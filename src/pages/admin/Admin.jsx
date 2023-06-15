import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Strelka } from "../../assets/icons/strelka";
import { Post } from "./components/post";
import { Updata } from "./components/updata";
import { Del } from "./components/del";
import React from "react";

export const Admin = () => {
  return (
    <Stack style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Stack
        style={{ padding: "110px", backgroundColor: "#F6F6F6" }}
        alignItems={"center"}
      >
        <Typography variant="h4" paddingBottom={"22px"}>
          <Link to="/admin">Admin Pages</Link>
        </Typography>
        <span
          style={{
            backgroundColor: "#5A5AC9",
            height: "2px",
            width: "60px",
          }}
        ></span>
        <Typography paddingTop={"22px"} variant="p">
          <Link to="/">Home</Link>
        </Typography>
        <Strelka />
        <Typography variant="p">
          <Link to="/admin">
            <p style={{ color: "#5A5AC9" }}>Admin Pages</p>
          </Link>
        </Typography>
      </Stack>
      <Post />
      <Updata />
      <Del />
    </Stack>
  );
};
