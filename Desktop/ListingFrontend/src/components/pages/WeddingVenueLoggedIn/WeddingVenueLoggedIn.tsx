// EventsPage.tsx

import React from "react";
import { Box } from "@mui/material";
import EventHeader from "../IndustryPage/EventHeader/EventHeader";
import DisplayImage from "./DisplayImage/DisplayImage";

import EventsBlog from '../../resuableComponents/EventBlogs/EventBlogs'
import VenueSessionOneLI from "../../resuableComponents/venueSesionOne/VenueSessionOneLI";
import VenueSecondSession from "../../resuableComponents/VenueSecondSession/VenueSecondSession";


const VenueLoggedIN: React.FC = () => {
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
        <VenueSessionOneLI />
      </Box>
      <Box>
        <VenueSecondSession />
      </Box>
        
        <Box>
        <EventsBlog/>  
        </Box>
        
 
    </Box>
  );
};

export default VenueLoggedIN;
