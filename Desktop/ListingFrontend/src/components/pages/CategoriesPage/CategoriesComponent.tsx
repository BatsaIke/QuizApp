// EventsPage.tsx

import React from "react";
import { Box } from "@mui/material";
import EventHeader from "../IndustryPage/EventHeader/EventHeader";
import CategoriesHeroPage from "./CategoriesHero/CategoriesHeroPage";

import CategoriesSessionTwo from "./CategoriesSessionTwo/CategoriesSessionTwo";



const CategoriesComponent: React.FC = () => {
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
         <CategoriesHeroPage/>
        </Box>
       
        
        <Box
        sx={{
         
        display: "flex",
       marginTop: "50px",
       marginBottom: "50px",

      
        }}
      >
        <CategoriesSessionTwo/>

        </Box>
        
 
    </Box>
  );
};

export default CategoriesComponent;
