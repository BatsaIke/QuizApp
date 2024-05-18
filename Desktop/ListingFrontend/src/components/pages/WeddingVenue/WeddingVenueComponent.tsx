// EventsPage.tsx

import React from "react";
import { Box } from "@mui/material";
import DisplayImage from "./DisplayImage/DisplayImage";
import VenueSessionOne from "./venueSessionone/VenueSessionOne";
import VenueSessionOneLI from "../../resuableComponents/venueSesionOne/VenueSessionOneLI";
import VenueSecondSession from "../../resuableComponents/VenueSecondSession/VenueSecondSession";
import EventsBlog from "../../resuableComponents/EventBlogs/EventBlogs";

const EventsPage: React.FC = () => {
  return (
    <Box>
     
      <DisplayImage />
      <Box>
        <VenueSessionOne />
      </Box>
      <Box>
        <VenueSessionOneLI />
      </Box>
      <Box>
        <VenueSecondSession />
      </Box>
      <Box>
        <EventsBlog />
      </Box>
    </Box>
  );
};

export default EventsPage;
