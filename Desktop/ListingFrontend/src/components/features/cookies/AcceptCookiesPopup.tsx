// src/components/AcceptCookiesPopup.tsx

import * as React from 'react';
import { Dialog, Box, Typography, Button } from '@mui/material';
import { acceptCookiesPopupStyles } from './AcceptCookiesPopupStyles';

const AcceptCookiesPopup: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = ( reason: any) => {
    if (reason && reason === 'backdropClick') return;
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={acceptCookiesPopupStyles.dialog}
    >
      <Box sx={acceptCookiesPopupStyles.container}>
        <Box sx={acceptCookiesPopupStyles.content}>
          <Typography sx={acceptCookiesPopupStyles.title}>Our website uses cookies</Typography>
          <Box sx={acceptCookiesPopupStyles.descriptionContainer}>
            <Typography sx={acceptCookiesPopupStyles.description}>
              Our website uses only necessary cookies for correct operation. By clicking "Accept", you consent to our use of cookies.{' '}
              <Typography
                component="a"
                target="_blank"
                href="https://wosom.info"
                sx={acceptCookiesPopupStyles.link}
              >
                Cookie Policy
              </Typography>
            </Typography>
          </Box>
          <Button
            sx={acceptCookiesPopupStyles.acceptButton}
            onClick={() => handleClose(new Event('click'))}
          >
            Accept Cookies
          </Button>
          <Button
            sx={acceptCookiesPopupStyles.declineButton}
            onClick={() => handleClose(new Event('click'))}
          >
            Decline all
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default AcceptCookiesPopup;
