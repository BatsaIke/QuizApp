export const footerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',
  padding: { 
      xl: '16px 0px', 
      lg: '14px 0px', 
      md: '12px 0px', 
      sm: '10px 0px', 
      xs: '8px 0px' // Different padding for various screen sizes
  },
  boxShadow: '0px -3px 3px -4px rgba(0, 0, 0, 0.50)'
}

export const footerInternalContainer = {
  width: {
      xl: '40%', 
      lg: '45%', 
      md: '65%', 
      sm: '70%', 
      xs: '75%' // Increasing width percentage as screen size decreases
  },
  maxWidth: {
      xl: '620px',
      lg: '560px',
      md: '500px',
      sm: '400px',
      xs: '320px' // Adjusting maximum width to be more responsive
  },
  height: '24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

export const footerInternalLink = {
  color: "#3A61CA",
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  fontSize: {
      xl: '16px',
      lg: '15px',
      md: '14px',
      sm: '13px',
      xs: '12px' // Responsive font size
  },
  fontFamily: 'Lexend Deca',
  fontWeight: '600',
  fontStyle: 'normal'
}

export const footerExternalLink = {
  color: '#9A9A9A',
  padding: {
      xl: '0px',
      lg: '0px',
      md: '0px',
      sm: '2px 0px', 
      xs: '4px 0px'
  }
}
