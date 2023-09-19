import { Grid } from "@mui/material";
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}></Grid>
      <Grid item xs={6} md={4}></Grid>
      <Grid item xs={6} md={4}></Grid>
      <Grid item xs={6} md={8}></Grid>
    </Grid>
  );
};
