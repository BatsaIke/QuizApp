import React from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { secondComponentStyles } from './SecondSessionStyles';

const SecondComponent: React.FC = () => {
  return (
    <Box sx={secondComponentStyles.container}>
        <Box sx={secondComponentStyles.divider}/>
      <Typography variant="h5" sx={secondComponentStyles.headerText}>
        Crafting Your perfect wedding, Hand in Hand
      </Typography>
      
      <Typography variant="body1" sx={secondComponentStyles.bodyText}>
        Explore thousands of professionals with Wosom, where couples like you find their wedding planning made a breeze.
      </Typography>
      <Box sx={secondComponentStyles.searchContainer}>
        
        <TextField
          variant="outlined"
          placeholder="Wedding Venues"
          size="small"
          sx={secondComponentStyles.textField}
          InputProps={{
            startAdornment: (
              <IconButton sx={secondComponentStyles.iconButton}>
                
                <SearchIcon />
              </IconButton>
            )
          }}
        />
        <TextField
          variant="outlined"
          placeholder="in location (e.g. Cyprus)"
          size="small"
          sx={secondComponentStyles.textField}
          InputProps={{
            startAdornment: (
              <IconButton sx={secondComponentStyles.iconButton}>
                
                <LocationOnIcon />
              </IconButton>
            )
          }}
        />
        <IconButton sx={secondComponentStyles.arrowiconButton}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SecondComponent;
