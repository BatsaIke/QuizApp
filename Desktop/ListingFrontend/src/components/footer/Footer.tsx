import React from 'react';
import { Box } from '@mui/material';
import { footerStyles } from './FooterStyles';
import FooterContent from './FooterContent';
import CountrySelector from './CountrySelector';
import SocialIcons from './SocialIcons';

import footer1 from '../../assets/images/footer/footer1.png';
import footer2 from '../../assets/images/footer/footer2.png';
import footer3 from '../../assets/images/footer/footer3.png';
import footer4 from '../../assets/images/footer/footer4.png';
import footer5 from '../../assets/images/footer/footer5.png';
import footer6 from '../../assets/images/footer/footer6.png';
import footer7 from '../../assets/images/footer/footer7.png';
import footer8 from '../../assets/images/footer/footer9.png';
import logo from '../../assets/images/footer/logo.png';

const Footer: React.FC = () => {
  const footerImages = [
    footer1, footer2, footer3, footer4, 
    footer5, footer6, footer7, footer8,
  ];

  return (
    <Box sx={footerStyles.container}>
      <FooterContent />
      <Box sx={footerStyles.footerDivider} />
      <Box sx={footerStyles.footerLogoContainer}>
        <Box sx={footerStyles.footerBottom}>
          <Box component="img" sx={footerStyles.footerLogo} src={logo} />
          © WoSom. All Rights Reserved.
        </Box>
        <CountrySelector />
        <SocialIcons />
      </Box>
      <Box sx={footerStyles.imagesContainer}>
        {footerImages.map((src, index) => (
          <Box 
            key={index} 
            component="img" 
            sx={footerStyles.image} 
            src={src} 
          />
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
