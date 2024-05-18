import React from 'react';
import { Box } from '@mui/material';
import { imageStyles } from './DisplayImageStyles';
import loggedOutImage from '../../../../assets/images/wedding-venue/notLoggedin.png';
import loggedInImage from '../../../../assets/images/wedding-venue/loggedin.png'


interface DisplayImageProps {
  isLoggedIn?: boolean; // Make isLoggedIn optional
}

const DisplayImage: React.FC<DisplayImageProps> = ({ isLoggedIn = false }) => {
  return (
    <Box
      component="img"
      sx={imageStyles}
      src={isLoggedIn ? loggedInImage : loggedOutImage}
      alt={isLoggedIn ? "Logged In" : "Logged Out"}
    />
  );
};

export default DisplayImage;
