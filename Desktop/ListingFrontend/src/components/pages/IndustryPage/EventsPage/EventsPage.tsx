// EventsPage.tsx

import React from "react";
import EventHeader from "../EventHeader/EventHeader";
import { Box } from "@mui/material";
import EventsHero from "../EventHero/EventHero";
import SecondComponent from "../2ndSession/SecondSession";
import ThirdSession from "../3rdSession/ThirdSession";
import FourthSession from "../forthSession/FourthSession";
import SixthSession from "../SixthSession/SixthSession";
import SeventhSession from "../seventhSession/SeventhSession";
import EventsBlog from '../../../resuableComponents/EventBlogs/EventBlogs'


const EventsPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EventHeader />
      <Box
        component="section"
        sx={{
          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          mt:6
        }}
      >
        <EventsHero />
        <Box>
        <SecondComponent/>  
        </Box>
        <Box>
        <ThirdSession/>  
        </Box>
        <Box>
        <FourthSession/>  
        </Box>
        <Box>
        <EventsBlog/>  
        </Box>
        <Box>
        <SixthSession/>  
        </Box>
        <Box>
        <SeventhSession/>  
        </Box>
      </Box>
    </Box>
  );
};

export default EventsPage;
