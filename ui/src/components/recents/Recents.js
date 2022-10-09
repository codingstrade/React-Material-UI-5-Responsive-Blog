import React from "react";
import cardImage from "../../static/image5.jpg";
import postImage2 from "../../static/image2.jpg";
import postImage1 from "../../static/image1.jpg";
import postImage3 from "../../static/image3.jpg";
import postImage4 from "../../static/image4.jpg";
import { Box, Grid } from "@mui/material";
import Card from "../card/Card";
const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item>
          <Card cardImage={postImage3} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage1} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage2} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage4} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={cardImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
