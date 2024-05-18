import React from 'react';
import { Box, Typography } from '@mui/material';
import { seventhSessionStyles } from './SeventhSessionStyles';
import seven1 from '../../../../assets/images/industry-page/seven1.png'
import seven2 from '../../../../assets/images/industry-page/seven2.png'
import seven3 from '../../../../assets/images/industry-page/seven3.png'
import seven4 from '../../../../assets/images/industry-page/seven4.png'
import seven5 from '../../../../assets/images/industry-page/seven5.png'


const SeventhSession: React.FC = () => {
  return (
    <Box sx={seventhSessionStyles.container}>
      <Box sx={seventhSessionStyles.divider} />
      <Box sx={seventhSessionStyles.headerContainer}>
        <Box sx={{ ...seventhSessionStyles.textCenter, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
          <Typography sx={seventhSessionStyles.title}>
            Design Your Dreamy Wedding Website with WoSom
          </Typography>
          <Typography sx={seventhSessionStyles.subtitle}>
            Your Unique Wedding Story Begins Here, Craft the Unforgettable Saga of Your Love
          </Typography>
        </Box>
      </Box>

      <Box sx={seventhSessionStyles.mainContent}>
        <Box sx={seventhSessionStyles.leftPanel}>
          <Box sx={seventhSessionStyles.rotatedBackground}></Box>
          <Typography sx={seventhSessionStyles.rotatedText}>
            Craft your dream wedding website
          </Typography>
          <Box component="img" sx={seventhSessionStyles.image} src={seven1} />
          <Typography sx={seventhSessionStyles.textBlock1}>
            Share your love story with a personal touch, all with a little help from us at WoSom. Craft a beautiful and unique wedding website
          </Typography>
          <Typography sx={seventhSessionStyles.textBlock2}>
            Create your unique story with WoSom wedding website tool
          </Typography>
          <Box component="img" sx={seventhSessionStyles.smallImage} src="https://via.placeholder.com/71x15" />
        </Box>

        <Box sx={seventhSessionStyles.rightPanel}>
          <Box sx={seventhSessionStyles.rightPanelBackground}></Box>
          <Box sx={seventhSessionStyles.imageGrid}>
            <Box component="img" sx={seventhSessionStyles.gridImage} src={seven2} />
            <Box component="img" sx={seventhSessionStyles.gridImage} src={seven3} />
            <Box component="img" sx={seventhSessionStyles.gridImage} src={seven4} />
            <Box component="img" sx={seventhSessionStyles.gridImage} src={seven5} />
          </Box>
        </Box>
      </Box>

      <Box sx={seventhSessionStyles.buttonsContainer}>
        <Box sx={seventhSessionStyles.button1}>
          <Typography>Get Started</Typography>
        </Box>
        <Box sx={seventhSessionStyles.button2}>
          <Typography>More Designs</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SeventhSession;
