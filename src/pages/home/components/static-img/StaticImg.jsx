import React from "react";
import { Grid } from "@mui/material";
import img1 from "../../../../assets/imgs/static-img-1.svg";
import img2 from "../../../../assets/imgs/static-img-2.svg";

export const StaticImg = () => {
  return (
    <Grid maxWidth={"1200px"} m={"0 auto"} container spacing={4}>
      <Grid width={"580px"} item>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={img1}
          alt="img1"
        />
      </Grid>
      <Grid width={"290px"} item>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={img2}
          alt="img2"
        />
      </Grid>
      <Grid width={"290px"} item>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={img2}
          alt="img3"
        />
      </Grid>
    </Grid>
  );
};
