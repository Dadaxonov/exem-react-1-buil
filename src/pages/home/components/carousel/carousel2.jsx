import { Stack, Typography, Button } from "@mui/material";
import { Carousel } from "antd";
import img1 from "../../../../assets/imgs/carousel2-1.svg";
import img2 from "../../../../assets/imgs/carousel2-2.svg";
import img3 from "../../../../assets/imgs/carousel2-3.svg";
import img4 from "../../../../assets/imgs/carousel2-4.svg";
import img5 from "../../../../assets/imgs/carousel2-5.svg";

import React from "react";

export default function Carousel2() {
  return (
    <Stack sx={{ maxWidth: "1200px", margin: "0 auto", padding: "100px" }}>
      <Carousel
        pauseOnHover={false}
        pauseOnDotsHover={false}
        autoplay
        effect="scrolly"
        draggable
      >
        <div>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <img src={img1} alt="img1" />
            <img src={img2} alt="img1" />
            <img src={img3} alt="img1" />
            <img src={img4} alt="img1" />
            <img src={img5} alt="img1" />
          </Stack>
        </div>
        <div>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <img src={img3} alt="img1" />
            <img src={img2} alt="img1" />
            <img src={img1} alt="img1" />
            <img src={img4} alt="img1" />
            <img src={img5} alt="img1" />
          </Stack>
        </div>
        <div>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <img src={img1} alt="img1" />
            <img src={img3} alt="img1" />
            <img src={img5} alt="img1" />
            <img src={img4} alt="img1" />
            <img src={img2} alt="img1" />
          </Stack>
        </div>
        <div>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <img src={img5} alt="img1" />
            <img src={img4} alt="img1" />
            <img src={img3} alt="img1" />
            <img src={img2} alt="img1" />
            <img src={img1} alt="img1" />
          </Stack>
        </div>
      </Carousel>
    </Stack>
  );
}
