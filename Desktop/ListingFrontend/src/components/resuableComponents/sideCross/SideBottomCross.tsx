import React from 'react';
import { Box } from '@mui/material';
import { sideCrossBottomStyles } from './SideBottomCrossStyles';

const SideCrossBottom: React.FC = () => {
  const classes = sideCrossBottomStyles;

  return (
    <Box sx={classes.container}>
      <Box sx={classes.verticalLine} />
      <Box sx={classes.horizontalLine} />
    </Box>
  );
};

export default SideCrossBottom;
