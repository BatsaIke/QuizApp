import React from 'react';
import { Box } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { footerStyles } from './FooterStyles';

const SocialIcons: React.FC = () => {
  return (
    <Box sx={footerStyles.footerSocialIcons}>
      <Box sx={footerStyles.footerSocialIcon}>
        <a href="https://wosom.info" target="_blank" rel="noopener noreferrer">
          <FacebookOutlinedIcon sx={{ color: '#000' }} />
        </a>
      </Box>
      <Box sx={footerStyles.footerSocialIcon}>
        <a href="https://wosom.info" target="_blank" rel="noopener noreferrer">
          <TwitterIcon sx={{ color: '#000' }} />
        </a>
      </Box>
      <Box sx={footerStyles.footerSocialIcon}>
        <a href="https://wosom.info" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ color: '#000' }} />
        </a>
      </Box>
    </Box>
  );
};

export default SocialIcons;
