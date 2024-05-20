import { SxProps, Theme } from '@mui/material';

export const categoriesSessionTwoStyles: { [key: string]: SxProps<Theme> } = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px', 
    padding: '50px 0',
    position: 'relative',
  },
  categoryContainer: {
    width: '1075px',
    height: '498px',
    display: 'flex',
  
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '27px',
    marginRight: '285px',
    marginLeft: '285px',
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '27px', // Adjusted gap for columns
  },
  categoryBox: {
    width: 203,
    height: 78,
    position: 'relative',
    background: 'rgba(192, 150, 83, 0.10)',
    borderRadius: '8px',
    border: '1px rgba(192, 150, 83, 0.12) solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      border: '1px rgba(192, 150, 83, 0.12) solid',
    },
  },
  categoryText: {
    textAlign: 'center',
    color: '#111111',
    fontSize: 14,
    fontFamily: 'Lexend Deca',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '19.98px',
    wordWrap: 'break-word',
  },
};
