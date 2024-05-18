
export const containerStyles = {
    display: 'flex',
    width: '80%',
    justifyContent: 'center',
    gap: {
        xs: '10px',
        sm: '20px',
        md: '25px',
        lg: '30px',
        xl: '44px'
    },
    maxHeight: '500px',
    height: {
        xs: '30vh',
        sm: '36vh',
        md: '45vh',
        lg: '70vh',
        xl: '70vh'
    }
};

export const sliderContainer = {
    maxWidth: '700px',
    width: {
        xl: '40%',
        lg: '45%',
        md: '55%',
        xs: '55%'
    },
    height: {
        xs: '100%'
    }
};

export const sliderStyles = (index: any, currentSlide: any) => ({
    display: index === currentSlide ? 'block' : 'none',
    objectFit: 'cover',
    borderRadius: '12px',
    width: "100%",
    height: "100%"
});

export const textAreaContainer = {
    width: {
        xs: '40%',
        sm: '42%',
        md: '40%',
        xl: '35%'
    },
    height: {
        xs: '100%'
    }
}

export const textAreaHeading = {
    lineHeight: {
        xs: '33px',
        md: '40px',
        xl: '55px'
    },
    fontSize: {
        xs: '24px',
        md: '27px',
        lg: '35px',
        xl: '39px'
    },
    color: '#111',
    fontStyle: 'normal',
    fontFamily: 'Lexend Deca',
    fontWeight: '700',
    letterSpacing: '-1.48px'
}

export const countryLabel = {
    fontSize: '16px',
    fontFamily: 'Lexend Deca',
    fontStyle: 'normal',
    color: '#111',
    fontWeight: '400',
    lineHeight: 'normal'
}

export const preferenceContainer = {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
}

export const preferenceText = {
    color: '#111',
    fontFamily: 'Lexend Deca',
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 'normal'
}

export const selectCountryContainer = {
    width: "55%",
    borderBottom: '1px solid #111'
}

export const gotItBtn = {
    borderRadius: '8px',
    backgroundColor: '#f6f6f6',
    border: '1px solid #a9a9a9',
    width: '120px',
    height: '40px',
    fontFamily: 'Lexend Deca',
    fontWeight: '400',
    fontSize: '15px',
    color: 'rgba(0, 0, 0, 0.50)',
    textTransform: 'math-auto',
    '&:hover': {
        color: '#111', // Change color on hover
        backgroundColor: '#e9e9e9', // Change background color on hover
        border: '1px solid #111'
    }
}

export const selectCountryInnerTextfield = {
    color: '#111',
    fontFamily: 'Lexend Deca',
    fontSize: '15px',
    fontWeight: '400',
    letterSpacing: '0.8px',
    textTransform: 'capitalize'
}

export const selectCountryTextfieldStyle = {
    "& .MuiOutlinedInput-notchedOutline": { border: "none" }
}

export const selectCountryDropdownStyles = {
    width: '20em',
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    right: 45,
    position: 'relative'
}