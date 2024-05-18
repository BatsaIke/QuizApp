import { SxProps, Theme } from '@mui/material/styles';

export const secondComponentStyles: Record<string, SxProps<Theme>> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    p: 4,
  },
  headerText: {
    fontWeight: 600,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  bodyText: {
    textAlign: 'center',
    maxWidth: 'md',
  },
  divider: {
    width: '80%',
    borderBottom: '2px solid #111111',
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
    }
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '500px',
    mt: 2,
  },
  textField: {
    flex: 1,
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      borderRight: '0',
      '& .MuiInputBase-input': {
        fontSize: '12px',
        padding: '15px 14px'
      },
      boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)'
    },
    '&:first-of-type .MuiOutlinedInput-root': {
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '8px',
    },
  },
  iconButton: {
    borderRadius: 0,
    '&:first-of-type': {
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
  },
  arrowiconButton: {
    backgroundColor: "#C09653",
    marginLeft: '-8px',
    borderRadius: 2,
    paddingY: "12px",
    paddingX: 2,
    color: "#FFFFFF",
    '&:hover': {
      backgroundColor: "#af8542",
    },
  },
};
