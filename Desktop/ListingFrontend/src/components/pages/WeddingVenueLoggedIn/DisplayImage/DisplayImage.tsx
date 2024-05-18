import React from 'react';
import { Box } from '@mui/material';
import { imageStyles } from './DisplayImageStyles';
import loggedInImage from '../../../../assets/images/wedding-venue/loggedin.png'


const DisplayImage: React.FC = () => {
  return (
    <Box
      component="img"
      sx={imageStyles}
      src={loggedInImage }
      alt="Logged Out"
    />
  );
};

export default DisplayImage;