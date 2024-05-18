import { SxProps, Theme } from '@mui/material';

export const eventHeaderStyles: { [key: string]: SxProps<Theme> } = {
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white',
    },
    contentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1,
        height: '50px',  
        padding: { xs: '0 10px', sm: '0 15px', md: '0 20px' },
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.10)',
        borderRight: '1px solid transparent', 
        borderBottom: '1px solid #ddd',
        borderTop: '1px solid #ddd',
        marginRight: { xs: '10px', sm: '15px', md: '20px' }, 
    },
    eventLabel: {
        color: '#111111',
        fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
        fontFamily: 'Lexend Deca',
        fontWeight: '500',
        textTransform: 'capitalize',
        lineHeight: '25px',
        marginLeft: { xs: '20px', sm: '50px', md: '100px', lg: '150px' },
    },
    rightIcons: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: { xs: '10px', sm: '15px', md: '20px', lg: '25px' }, 
        '& > img': {
            marginLeft: { xs: '10px', sm: '15px', md: '20px' },
        }
    }
};
