// EventsPage.tsx

import React from "react";
import { Box } from "@mui/material";
import EventHeader from "../IndustryPage/EventHeader/EventHeader";
import DisplayImage from "./DisplayImage/DisplayImage";
import VenueSessionOne from "./venueSessionone/VenueSessionOne";
import VenueSessionOneLI from "./venueSessionone/VenueSessionOneLI";
import VenueSecondSession from "./VenueSecondSession/VenueSecondSession";
import EventsBlog from '../../resuableComponents/EventBlogs/EventBlogs'


const EventsPage: React.FC = () => {
  return (
    <Box
    >
      <EventHeader />
      <Box
        sx={{
          width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      
        }}
      >
         <DisplayImage/>
        </Box>
        <Box>
            <VenueSessionOne />
        </Box>
        <Box>
            <VenueSessionOneLI />
        </Box>
        <Box>
            <VenueSecondSession/>
        </Box>
        <Box>
        <EventsBlog/>  
        </Box>
        
 
    </Box>
  );
};

export default EventsPage;
