import React from 'react';
import { Box } from '@mui/material';
import { sideCrossStyles } from './SideTopCrossStyles';

const SideTopCross: React.FC = () => {
  const classes = sideCrossStyles;

  return (
    <Box sx={classes.container}>
      <Box sx={classes.verticalLine} />
      <Box sx={classes.horizontalLine} />
    </Box>
  );
};

export default SideTopCross;
