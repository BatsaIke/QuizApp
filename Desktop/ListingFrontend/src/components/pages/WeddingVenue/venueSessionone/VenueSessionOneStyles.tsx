import { SxProps, Theme } from '@mui/material';

export const venueSession1Styles: { [key: string]: SxProps<Theme> } = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4, // Adjusted gap for better spacing
        padding: 2, // Add padding to the container
    },
    contentContainer: {
        width: '80%', // Adjust width to center the content better
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 3, // Adjusted gap for better spacing
    },
    headerText: {
        textAlign: 'center',
        color: '#111111',
        fontSize: 25,
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        textTransform: 'uppercase',
        lineHeight: '40px',
        wordWrap: 'break-word',
    },
    subText: {
        width: '100%',
        maxWidth: 799, 
        textAlign: 'center',
        color: '#111111',
        fontSize: 15,
        fontFamily: 'Lexend Deca',
        fontWeight: 400,
        lineHeight: '20px',
        wordWrap: 'break-word',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2, 
    },
    button: {
        width: 150,
        height: 45,
        background: '#C09653',
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Lexend Deca',
        fontWeight: 500,
        textTransform: 'capitalize',
        lineHeight: '22.5px',
        wordWrap: 'break-word',
        textAlign: 'center',
        '&:hover': {
            background: '#b08445',
        },
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap', 
        gap: 3, 
    },
    card: {
        width: 225,
        maxWidth: 225,
        height: 200, 
        padding: '19px 24px 24px 24px',
        background: 'white',
        boxShadow: '0px 6px 21px #D4D8E4',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 2, 
        overflow: 'hidden',
    },
    cardIconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        marginBottom: 2, 
    },
    cardIcon: {
        width: 48,
        height: 48,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        width: '100%',
        color: '#545454',
        fontSize: 13,
        fontFamily: 'Lexend Deca',
        fontWeight: 500,
        lineHeight: '21px',
        textAlign: 'left', // Align text to the left within cards
        wordWrap: 'break-word',
        overflow: 'hidden', // Ensure text does not overflow the card
        textOverflow: 'ellipsis', // Add ellipsis to overflow text
    },
};
