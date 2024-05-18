import React from 'react';
import { Box, Typography } from '@mui/material';
import { footerStyles } from './FooterStyles';

const FooterContent: React.FC = () => {
  return (
    <Box sx={footerStyles.footerContent}>
      <Box sx={footerStyles.footerColumn}>
        <Typography sx={footerStyles.footerTitle}>Navigation</Typography>
        <Typography sx={footerStyles.footerText}>
          Sign up for free<br />My Profile<br />Task List<br />Business Listing
        </Typography>
      </Box>
      <Box sx={footerStyles.footerColumn}>
        <Typography sx={footerStyles.footerTitle}>Support Centre</Typography>
        <Typography sx={footerStyles.footerText}>
          My Account<br />Professional Account<br />Privacy & Terms<br />Contact Us
        </Typography>
      </Box>
      <Box sx={footerStyles.footerColumn}>
        <Typography sx={footerStyles.footerTitle}>For Business</Typography>
        <Typography sx={footerStyles.footerText}>
          Free Listing<br />Step Into The Spotlight<br />Plans & Pricing<br />FAQ
        </Typography>
      </Box>
      <Box sx={footerStyles.footerColumn}>
        <Typography sx={footerStyles.footerTitle}>About WoSom</Typography>
        <Typography sx={footerStyles.footerText}>
          The Team<br />Job Opportunities<br />Wedding Day Advisors<br />Leadership with a Vision
        </Typography>
      </Box>
      <Box sx={footerStyles.footerColumn}>
        <Typography sx={footerStyles.footerTitle}>Talk to Us</Typography>
        <Typography sx={footerStyles.footerText}>
          support@wosom.com<br />+35799256256<br />Contact Us<br />Facebook<br />LinkedIn<br />Twitter
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterContent;
