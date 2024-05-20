import React from 'react';
import { Box, Typography } from '@mui/material';
import { categoriesHeroStyles } from './CategoriesHeroStyles';
import hero1 from '../../../../assets/images/categories-page/hero1.jpeg';
import hero2 from '../../../../assets/images/categories-page/hero2.jpeg';

const CategoriesHeroPage: React.FC = () => {
  const classes = categoriesHeroStyles;

  return (
    <Box sx={classes.container}>
      <Box sx={classes.backgroundBox} />
      <Typography sx={classes.rotatedText}>Lorem Ipsum Detor</Typography>
      <img
        src={hero2}
        alt="Main"
        style={classes.mainImage as React.CSSProperties}
      />
      <Box sx={classes.headerTextBox}>
      <Typography sx={classes.headerText}>
        Discover Many Wedding Vendors by their Categories
      </Typography>
      <img
        src={hero1}
        alt="Secondary"
        style={classes.secondaryImage as React.CSSProperties}
      />
      <Typography sx={classes.descriptionText}>
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      </Typography>
      </Box>
    </Box>
  );
};

export default CategoriesHeroPage;
