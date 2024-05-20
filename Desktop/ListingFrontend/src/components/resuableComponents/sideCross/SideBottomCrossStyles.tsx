import { SxProps, Theme } from '@mui/material';

export const sideCrossBottomStyles: { [key: string]: SxProps<Theme> } = {
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transform: 'rotate(-180deg)',
    transformOrigin: '0 0',
    marginTop: '20px', // Adjust the value as needed
    marginBottom: '20px', // Adjust the value as needed
  },
  verticalLine: {
    width: 4,
    height: 170,
    position: 'absolute',
    top: 0,
    left: -52,
    transform: 'rotate(-180deg)',
    transformOrigin: '0 0',
    background: '#999999',
    borderRadius: 1006.13,
  },
  horizontalLine: {
    width: 4,
    height: 170,
    position: 'absolute',
    top: -60,
    left: 0,
    transform: 'rotate(90deg)',
    transformOrigin: '0 0',
    background: '#999999',
    borderRadius: 1006.13,
  },
};
