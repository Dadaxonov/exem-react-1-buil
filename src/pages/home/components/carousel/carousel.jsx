import { Stack, Typography, Button } from "@mui/material";
import { Carousel } from "antd";

import React from "react";
import "./style.css";

export default function StaticCarousel() {
  return (
    <Stack sx={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "20px" }}>
      <Carousel
        pauseOnHover={false}
        pauseOnDotsHover={false}
        autoplay
        effect="scrolly"
        draggable
      >
        <div style={{ display: "flex" }} className="carousel-box">
          <div className="carousel-box__text">
            <Typography variant="h6">Face Makeup Brush</Typography>
            <Typography variant="h3">Skincare Brush Set</Typography>
            <Typography variant="h3">Sale 30% Off</Typography>
            <Button variant="outlined">
              <a href="#idShop">Shop Now</a>
            </Button>
          </div>
        </div>
        <div style={{ display: "flex" }} className="carousel-box">
          <div className="carousel-box__text">
            <Typography variant="h6">Face Makeup Brush</Typography>
            <Typography variant="h3">Skincare Brush Set</Typography>
            <Typography variant="h3">Sale 30% Off</Typography>
            <Button variant="outlined">
              <a href="#idShop">Shop Now</a>
            </Button>
          </div>
        </div>
        <div
          style={{ display: "flex", position: "relative" }}
          className="carousel-box"
        >
          <div className="carousel-box__text">
            <Typography variant="h6">Face Makeup Brush</Typography>
            <Typography variant="h3">Skincare Brush Set</Typography>
            <Typography variant="h3">Sale 30% Off</Typography>
            <Button variant="outlined">
              <a href="#idShop">Shop Now</a>
            </Button>
          </div>
        </div>
      </Carousel>
    </Stack>
  );
}
