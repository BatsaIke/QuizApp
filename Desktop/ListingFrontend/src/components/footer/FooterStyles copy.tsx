import { SxProps, Theme } from '@mui/material/styles';

export const footerStyles: Record<string, SxProps<Theme>> = {
  container: {
    width: '100%',
    position: 'relative',
    background: 'rgba(192, 150, 83, 0.20)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    marginTop: '50px',
  },
  imagesContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
    height: '300px',
    '@media (max-width: 768px)': {
      flexWrap: 'wrap',
      height: 'auto',
    },
  },
  image: {
    width: '215px',
    height: '300px',
    objectFit: 'cover',
    background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
    '@media (max-width: 768px)': {
      width: '100%',
      height: 'auto',
    },
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1920px',
    padding: '0 20px',
    flexWrap: 'wrap',
    gap: '30px',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: 'Lexend Deca',
    gap: '10px',
    margin: '10px',
    '@media (max-width: 768px)': {
      alignItems: 'center',
    },
  },
  footerTitle: {
    color: '#111111',
    fontSize: '16px',
    fontFamily: 'Lexend Deca',
    fontWeight: '500',
    textTransform: 'uppercase',
    lineHeight: '24px',
    wordWrap: 'break-word',
  },
  footerText: {
    color: '#111111',
    fontSize: '15px',
    fontFamily: 'Lexend Deca',
    fontWeight: '400',
    lineHeight: '30px',
    opacity: '0.80',
    wordWrap: 'break-word',
  },
  footerBottom: {
    display: 'flex',
    alignItems: "flex-end",
    gap: '10px',
    flexDirection: 'column',
  },
  footerDivider: {
    width: '53%',
    borderBottom: '1.6px solid #111111',
    marginBottom: '20px',
    marginTop: '20px',
    position: 'relative',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '-4px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#111111',
    },
    '&::before': {
      left: '0',
    },
    '&::after': {
      right: '0',
    },
  },
  footerLogoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '963px',
    margin: '0 auto',
    marginBottom: '70px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '20px',
    },
  },
  footerLogo: {
    width: '171px',
    height: '35.62px',
  },
  footerCountrySelector: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  footerCountryFlag: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '1px solid white',
  },
  footerCountryName: {
    color: '#111111',
    fontSize: '15.18px',
    fontFamily: 'Lexend Deca',
    fontWeight: '400',
    textTransform: 'capitalize',
    lineHeight: '20px',
    letterSpacing: '0.80px',
    wordWrap: 'break-word',
  },
  footerSocialIcons: {
    display: 'flex',
    gap: '20px',
    '@media (max-width: 768px)': {
      justifyContent: 'center',
    },
  },
  footerSocialIcon: {
    width: '39px',
    height: '39px',
    color: '#111',
    borderRadius: '50%',
    border: '1px solid #111111',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectCountryContainer: {
    width: '200px',
  },
  selectCountryInnerTextfield: {
    color: '#111',
    fontFamily: 'Lexend Deca',
    fontSize: '15px',
    fontWeight: '400',
    letterSpacing: '0.8px',
    textTransform: 'capitalize',
  },
  selectCountryTextfieldStyle: {
    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
  },
  selectCountryDropdownStyles: {
    width: '20em',
    backgroundColor: 'white',
    border: 'none',
    boxShadow: 'none',
    right: 45,
    position: 'relative',
  },
};
