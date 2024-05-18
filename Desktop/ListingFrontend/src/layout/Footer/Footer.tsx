import { Box, Typography, Stack, IconButton } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from '../../assets/images/footer/tiktokIcon.png';
import { Link } from 'react-router-dom';
import { footerInternalLink, footerExternalLink, footerContainer, footerInternalContainer } from './FooterStyles';

const socialLinks: any = [
  { icon: FacebookOutlinedIcon, href: 'https://wosom.info', png: false },
  { icon: InstagramIcon, href: 'https://wosom.info', png: false },
  { icon: TwitterIcon, href: 'https://wosom.info', png: false },
  { icon: LinkedInIcon, href: 'https://wosom.info', png: false },
  { icon: YouTubeIcon, href: 'https://wosom.info', png: false },
  { icon: TikTokIcon, href: 'https://wosom.info', png: true },
];

export default function Footer() {
  const links = [
    { text: 'Wosom', href: 'https://wosom.info' },
    { text: 'Support', href: 'https://wosom.info' },
    { text: 'Privacy & Terms', href: 'https://wosom.info' },
  ];

  return (
    <Box sx={footerContainer}>
      <Box sx={footerInternalContainer}>
        <Stack direction="row" gap={'20px'}>
          {links.map((link) => (
            link.text === 'Support' ? (
              <Box key={link.text} sx={footerInternalLink}>
                <Link to='/report-to-wosom'>{link.text}</Link>
              </Box>
            ) : (
              <Typography variant="body1" target="_blank" component="a" href={link.href} key={link.text} sx={footerInternalLink}>
                {link.text === 'Wosom' && <CopyrightIcon />}
                {link.text}
              </Typography>
            )
          ))}
        </Stack>
        <Stack direction="row" gap={'20px'}>
          {socialLinks.map((link: any) => (
            <IconButton key={link.href} href={link.href} target="_blank" sx={footerExternalLink}>
              {link.png ?
                <Box
                  component="img"
                  alt="header logo"
                  src={link.icon}
                />
                :
                <link.icon />
              }
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
