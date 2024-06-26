import React from 'react';
import { Box } from '@mui/material';
import { imageStyles } from './DisplayImageStyles';
import loggedOutImage from '../../../../assets/images/wedding-venue/notLoggedin.png';

const DisplayImage: React.FC = () => {
  return (
    <Box
      component="img"
      sx={imageStyles}
      src={loggedOutImage}
      alt="Logged Out"
    />
  );
};

export default DisplayImage;
