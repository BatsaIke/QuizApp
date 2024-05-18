// src/components/VenueSecondSession.tsx
import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { venueSecondSessionStyles } from "./VenueSecondSessionStyles";
import { venues } from "../../utils/dummyData";
import messageIcon from "../../../assets/images/wedding-venue/messge.png";
import ratingIcon from "../../../assets/images/wedding-venue/rating.png";
import savedIcon from "../../../assets/images/wedding-venue/Saved.png";
import userIcon from "../../../assets/images/wedding-venue/user.png";
import proIcon from "../../../assets/images/wedding-venue/PRo.png";
import proVerifiedIcon from "../../../assets/images/wedding-venue/ProVerified.png";
import heartIcon from "../../../assets/images/wedding-venue/heart-solid (2) 1.png";
import locationIcon from "../../../assets/images/wedding-venue/location.png";

const VenueSecondSession: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(12);

  const loadMore = () => {
    setVisibleItems((prev) => (prev + 12 <= 40 ? prev + 12 : 40));
  };

  return (
    <Box sx={venueSecondSessionStyles.container}>
      <Box sx={venueSecondSessionStyles.header}>
        <Typography sx={venueSecondSessionStyles.title}>
          We Have the Perfect Venue for Your Unique Wedding Vision
        </Typography>
        <Typography sx={venueSecondSessionStyles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Typography>
      </Box>
      <Box sx={venueSecondSessionStyles.filters}>
        {[
          "All Themes",
          "Bar Wedding",
          "Asian Wedding",
          "Unique Theme",
          "Hotel Wedding",
          "Castle Wedding",
          "Beach Wedding",
          "Country Wedding",
        ].map((theme) => (
          <Button
            key={theme}
            sx={venueSecondSessionStyles.filterButton}
            variant="outlined"
          >
            {theme}
          </Button>
        ))}
      </Box>
      <Grid container spacing={2} sx={venueSecondSessionStyles.venueGrid}>
        {venues.slice(0, visibleItems).map((venue) => (
          <Grid item key={venue.id} xs={12} sm={6} md={3}>
            <Box sx={venueSecondSessionStyles.card}>
              <img
                src={venue.imageUrl}
                alt={venue.name}
                style={{
                  width: "300px",
                  height: "225px",
                  background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
                  borderRadius: "8px",
                }}
              />
              <Box sx={venueSecondSessionStyles.cardContent}>
                <Typography sx={venueSecondSessionStyles.cardTitle}>
                  {venue.name}
                </Typography>
                <Box sx={venueSecondSessionStyles.proContainer}>
                  <img
                    src={venue.verified ? proVerifiedIcon : proIcon}
                    alt={venue.verified ? "PRO Verified" : "PRO"}
                    style={{ width: "114px", height: "25px" }}
                  />
                  <Box sx={venueSecondSessionStyles.footerIcons}>
                    <img
                      src={heartIcon}
                      alt="Heart"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <img
                      src={messageIcon}
                      alt="Message"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <img
                      src={savedIcon}
                      alt="Save"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </Box>
                </Box>
                <Box sx={venueSecondSessionStyles.ratingContainer}>
                  <Box sx={venueSecondSessionStyles.ratingItem}>
                    <img
                      src={ratingIcon}
                      alt="Rating"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 300,
                        lineHeight: "24px",
                        letterSpacing: "0.60px",
                      }}
                    >
                      {venue.rating}
                    </Typography>
                  </Box>
                  <Box sx={venueSecondSessionStyles.ratingItem}>
                    <img
                      src={userIcon}
                      alt="Capacity"
                      style={{ width: "20px", height: "15px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 300,
                        lineHeight: "24px",
                        letterSpacing: "0.60px",
                      }}
                    >
                      {venue.capacity}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={venueSecondSessionStyles.locationContainer}>
                  <img
                    src={locationIcon}
                    alt="Location"
                    style={{ width: "14px", height: "20px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 300,
                      lineHeight: "24px",
                      letterSpacing: "0.60px",
                    }}
                  >
                    {venue.location}
                  </Typography>
                </Box>
                <Button
                  variant="text"
                  sx={venueSecondSessionStyles.requestPricing}
                >
                  Request Pricing
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {visibleItems < 40 && (
        <Button
          variant="contained"
          color="primary"
          sx={venueSecondSessionStyles.loadMoreButton}
          onClick={loadMore}
        >
          Load More
        </Button>
      )}
    </Box>
  );
};

export default VenueSecondSession;
