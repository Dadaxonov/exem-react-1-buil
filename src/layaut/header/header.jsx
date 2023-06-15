import React from "react";
import logo from "../../assets/imgs/logo.svg";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./style.css";
import {
  Meta,
  Twiter,
  YouTobe,
  Insta,
  Call,
  SearchIcon,
  Shuffile,
  Favarite,
  Bag,
} from "../../assets/icons/icon";
import { Link } from "react-router-dom";
export const Header = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <>
      <div className="headerTopBox">
        <div className="headerTopContainer">
          <div className="headerTopIcon">
            <Meta />
            <Twiter />
            <YouTobe />
            <Insta />
            <Call />
            <Typography color={"#fff"} variant="p">
              (+123)4567890
            </Typography>
          </div>
          <div className="headerTopText">
            <Typography color={"#fff"} variant="p">
              Setting
            </Typography>
            <Typography color={"#fff"} variant="p">
              USD $
            </Typography>
            <Typography color={"#fff"} variant="p">
              English
            </Typography>
          </div>
        </div>
      </div>
      <Stack
        paddingTop={"20px"}
        direction={"row"}
        maxWidth={"1200px"}
        margin={"0 auto"}
        justifyContent={"space-between"}
      >
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <Stack color={"#111111"} direction={"row"} gap={"50px"}>
          <Link to="/">
            <h3>Home Page</h3>
          </Link>
          <Link to="/card">
            <h3>Card Page</h3>
          </Link>
          <Link to="/admin">
            <h3>Admin Page</h3>
          </Link>
        </Stack>
        <Stack direction={"row"} gap={"40px"}>
          <SearchIcon />
          <Shuffile />
          <Stack style={{ position: "relative" }}>
            <Favarite />
            <span
              style={{
                position: "absolute",
                top: "-30%",
                right: "-50%",
                backgroundColor: "red",
                padding: "3px",
                borderRadius: "100px",
                color: "#fff",
              }}
            >
              {products.length}
            </span>
          </Stack>
          <Link to="/card">
            <Stack style={{ position: "relative" }}>
              <Bag />
              <span
                style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-50%",
                  backgroundColor: "red",
                  padding: "3px",
                  borderRadius: "100px",
                  color: "#fff",
                }}
              >
                {products.length}
              </span>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};
