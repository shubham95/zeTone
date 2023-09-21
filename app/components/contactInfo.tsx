"use client";
import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ContactInfo: React.FC = () => {
  const TitleContent: React.FC<any> = ({
    title = "",
    content = "",
    titleClass = "",
    titleStyle = {},
    contentClass = "",
    contentStyle = {},
    cardClass = "",
    cardStyle = {},
  }) => {
    return (
      <div className={cardClass} style={cardStyle}>
        <div className={titleClass} style={titleStyle}>
          {title}
        </div>
        <div className={contentClass} style={contentStyle}>
          {content}
        </div>
      </div>
    );
  };
  return (
    <Box
      sx={{
        p: 2,
        borderTop: "3px solid #008080",
        borderBottom: "3px solid #008080",
        height: "100%",
      }}
    >
      <Grid container rowSpacing={2} sx={{ color: "text.primary" }}>
        <Grid item xs={2} md={2}>
          <LocationOnIcon fontSize="large" />
        </Grid>
        <Grid item xs={10} md={10}>
          <TitleContent
            title={<p>Location:</p>}
            content={<p>Marathahalli, Bangalore</p>}
            titleClass="text-lg font-bold"
            titleStyle={{ color: "#7a6960" }}
            contentClass="text-base mb-2.5"
            contentStyle={{ color: "#ab9d95" }}
          />
        </Grid>
        <Grid item xs={2} md={2}>
          <EmailIcon fontSize="large" />
        </Grid>
        <Grid item xs={10} md={10}>
          <TitleContent
            title={<p>Email:</p>}
            content={<p>info@zetone.in</p>}
            titleClass="text-lg font-bold"
            titleStyle={{ color: "#7a6960" }}
            contentClass="text-base mb-2.5"
            contentStyle={{ color: "#ab9d95" }}
          />
        </Grid>
        <Grid item xs={2} md={2}>
          <LocalPhoneIcon fontSize="large" />
        </Grid>
        <Grid item xs={10} md={10}>
          <TitleContent
            title={<p>Call:</p>}
            content={
              <>
                <p>+91-777-1081-666</p>
                <p>+91-777-1087-666</p>
              </>
            }
            titleClass="text-lg font-bold"
            titleStyle={{ color: "#7a6960" }}
            contentClass="text-base mb-2.5"
            contentStyle={{ color: "#ab9d95" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
