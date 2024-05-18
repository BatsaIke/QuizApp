import React from "react";
import { Box, Typography } from "@mui/material";
import { eventsHeroStyles } from "./EventHeroStyle";
import image1 from "../../../../assets/images/industry-page/industry1.jpeg";
import image2 from "../../../../assets/images/industry-page/industry2.jpeg";
import "../../../../App.css";

const EventsHero: React.FC = () => {
  const title = "Your Love, Story, Our, Celebration";

  // Splitting the string into an array of parts separated by commas
  const titleParts = title.split(", ");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // height: "100vh",
      }}
    >
      <Box sx={eventsHeroStyles.container}>
        <Box sx={eventsHeroStyles.backdrop} />
        <Typography sx={eventsHeroStyles.verticalText}>
          Crafting your dream wedding
        </Typography>
        <Box
          component="img"
          src={image1}
          alt="Main Event"
          sx={eventsHeroStyles.mainImage}
        />
        <Box sx={eventsHeroStyles.secondaryBackdrop} />
        <Box
          component="img"
          src={image2}
          alt="Secondary Event"
          sx={eventsHeroStyles.secondaryImage}
        />
        <Box sx={eventsHeroStyles.textContainer}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {titleParts.map((part, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#111111",
                  fontSize: 25,
                  fontFamily: "Lexend Deca",
                  fontWeight: "600",
                  lineHeight: "40px",
                  textTransform: "capitalize", 
                }}
              >
                {part}
                {part === "Story" ? "," : ""}
              </Typography>
            ))}
          </Box>
          <Typography
            gutterBottom
            variant="body2"
            sx={{
              color: "#111111",
              fontSize: 12,
              fontFamily: "Lexend Deca",
              fontWeight: "300",
              lineHeight: "24px",
              letterSpacing: "0.60px",
              wordWrap: "break-word",
              maxWidth: "260px",
              mt: 2,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </Typography>
        </Box>
        <Typography sx={eventsHeroStyles.welcomeText}>welcome</Typography>
      </Box>
    </Box>
  );
};

export default EventsHero;
