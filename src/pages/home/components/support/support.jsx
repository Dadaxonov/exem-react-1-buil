import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import moshinaSvg from "../../../../assets/imgs/moshina.svg";
const Support = () => {
  return (
    <Grid
      bgcolor={"#5A5AC9"}
      alignItems={"start"}
      padding={"70px"}
      maxWidth={"1000px"}
      margin={"0 auto"}
      container
      spacing={2}
    >
      <Grid item xs={3}>
        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
          <img src={moshinaSvg} alt="img" />
          <Typography variant="p" color={"#fff"}>
            Free Shipping On all orders over $75.00
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
          <img src={moshinaSvg} alt="img" />
          <Typography variant="p" color={"#fff"}>
            Free Shipping On all orders over $75.00
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
          <img src={moshinaSvg} alt="img" />
          <Typography variant="p" color={"#fff"}>
            Free Shipping On all orders over $75.00
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
          <img src={moshinaSvg} alt="img" />
          <Typography variant="p" color={"#fff"}>
            Free Shipping On all orders over $75.00
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Support;
