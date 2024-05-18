import { SxProps, Theme } from '@mui/material/styles';

export const seventhSessionStyles: Record<string, SxProps<Theme>> = {
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    display: 'flex',
    marginTop: '50px',
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '42px',
    display: 'flex',
  },
  divider: {
    width: '100%',
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
  textCenter: {
    textAlign: 'center',
    color: '#111111',
    fontFamily: 'Lexend Deca',
    wordWrap: 'break-word',
  },
  title: {
    fontSize: '25px',
    fontWeight: '600',
    fontFamily: 'Lexend Deca',
    textTransform: 'uppercase',
    lineHeight: '40px',
  },
  subtitle: {
    fontSize: '15px',
    fontWeight: '400',
    fontFamily: 'Lexend Deca',
    lineHeight: '20px',
  },
  mainContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1194px',
    height: '604px',
    position: 'relative',
    margin: '0 auto',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      height: 'auto',
    },
  },
  leftPanel: {
    width: '100%',
    maxWidth: '969px',
    height: '604px',
    position: 'absolute',
    top: 0,
    right: '190px',
    flex: 1,
    '@media (max-width: 960px)': {
      position: 'relative',
      right: 'auto',
    },
  },
  rotatedBackground: {
    width: '539px',
    height: '327px',
    position: 'absolute',
    top: '539px',
    left: 0,
    transform: 'rotate(-90deg)',
    transformOrigin: '0 0',
    background: 'rgba(192, 150, 83, 0.20)',
    borderRadius: '8px',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  rotatedText: {
    position: 'absolute',
    top: '487.13px',
    left: '4px',
    transform: 'rotate(-90deg)',
    transformOrigin: '0 0',
    color: '#111111',
    fontSize: '25px',
    fontFamily: 'Butterscotch',
    fontWeight: '400',
    textTransform: 'capitalize',
    lineHeight: '86.5px',
    letterSpacing: '1.88px',
    wordWrap: 'break-word',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  image: {
    width: '420px',
    height: '288.61px',
    position: 'absolute',
    top: '36px',
    left: '80px',
    background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
    borderRadius: '12px',
    '@media (max-width: 960px)': {
      position: 'relative',
      width: '100%',
      height: 'auto',
      left: 'auto',
      top: 'auto',
    },
  },
  textBlock1: {
    width: '409px',
    position: 'absolute',
    top: '434px',
    left: '92px',
    color: '#111111',
    fontSize: '12px',
    fontFamily: 'Lexend Deca',
    fontWeight: '300',
    lineHeight: '24px',
    letterSpacing: '0.60px',
    wordWrap: 'break-word',
    '@media (max-width: 960px)': {
      position: 'relative',
      width: '100%',
      top: 'auto',
      left: 'auto',
      padding: '0 16px',
      textAlign: 'center',
    },
  },
  textBlock2: {
    width: '397px',
    height: '70px',
    position: 'absolute',
    top: '347px',
    left: '94px',
    color: '#111111',
    fontSize: '20px',
    fontFamily: 'Lexend Deca',
    fontWeight: '500',
    lineHeight: '30px',
    wordWrap: 'break-word',
    '@media (max-width: 960px)': {
      position: 'relative',
      width: '100%',
      top: 'auto',
      left: 'auto',
      padding: '0 16px',
      textAlign: 'center',
    },
  },
  smallImage: {
    width: '71px',
    height: '14.79px',
    position: 'absolute',
    top: '282px',
    left: '109px',
    '@media (max-width: 960px)': {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      margin: '0 auto',
    },
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 50px',
    '@media (max-width: 960px)': {
      top: 'auto',
      flexDirection: 'column',
      gap: '10px',
      padding: '0 16px',
    },
  },
  button1: {
    width: '127px',
    height: '43px',
    background: '#C09653',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: 'white',
    fontSize: '15px',
    fontFamily: 'Lexend Deca',
    fontWeight: '500',
    textTransform: 'capitalize',
    lineHeight: '22.5px',
    padding: '10px 20px',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      width: '100%',
    },
  },
  button2: {
    width: '140px',
    height: '43px',
    background: '#C09653',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: 'white',
    fontSize: '15px',
    fontFamily: 'Lexend Deca',
    fontWeight: '500',
    textTransform: 'capitalize',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    padding: '10px 20px',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      width: '100%',
    },
  },
  rightPanel: {
    width: '100%',
    maxWidth: '604px',
    height: '523px',
    position: 'relative',
    top: -40,
    left: '290px',
    flex: 1,
    '@media (max-width: 960px)': {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      maxWidth: '100%',
    },
  },
  rightPanelBackground: {
    width: '100%',
    maxWidth: '604px',
    height: '381px',
    position: 'absolute',
    top: '63px',
    background: 'rgba(192, 150, 83, 0.20)',
    borderRadius: '8px',
    '@media (max-width: 960px)': {
      top: 'auto',
      height: 'auto',
    },
  },
  imageGrid: {
    width: '100%',
    maxWidth: '540px',
    height: '523px',
    position: 'absolute',
    top: '0px',
    left: '32px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '23px',
    '@media (max-width: 960px)': {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      maxWidth: '100%',
      gap: '10px',
    },
  },
  gridImage: {
    width: '250px',
    height: '250px',
    background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
    borderRadius: '8px',
    border: '1px rgba(0, 0, 0, 0.14) solid',
    '@media (max-width: 960px)': {
      width: '100%',
      height: 'auto',
    },
  },
};