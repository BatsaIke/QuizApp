import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { venueSession1Styles } from './VenueSessionOneStyles';
import vector from '../../../../assets/images/wedding-venue/Vector.png';
import vector2 from '../../../../assets/images/wedding-venue/Vector2.png';
import vector3 from '../../../../assets/images/wedding-venue/Vector3.png';
import vector4 from '../../../../assets/images/wedding-venue/Vector4.png';

interface VenueSession1Props {
  isLoggedIn?: boolean;
}

const VenueSessionOne: React.FC<VenueSession1Props> = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div>You are logged in.</div>; // Modify this as needed for logged-in state
  }

  return (
    <Box sx={venueSession1Styles.container}>
      <Box sx={venueSession1Styles.contentContainer}>
        <Typography sx={venueSession1Styles.headerText}>
          Start Your Wedding Journey with Us!
          <br />
          Join today and unlock the full potential of our wedding platform
        </Typography>
        <Typography sx={venueSession1Styles.subText}>
          Whether you're seeking inspiration, organization tools, or expert advice, we've got everything you need to make your dream wedding a reality. Don't miss out on creating the celebration of a lifetime!
        </Typography>
        <Box sx={venueSession1Styles.buttonContainer}>
          <Button sx={venueSession1Styles.button}>Sign Up</Button>
          <Button sx={venueSession1Styles.button}>Sign In</Button>
        </Box>
        <Box sx={venueSession1Styles.cardContainer}>
          <Box sx={venueSession1Styles.card}>
            <Box sx={venueSession1Styles.cardIconContainer}>
              <Box sx={{ ...venueSession1Styles.cardIcon, background: '#B6B6F6' }}>
                <img src={vector} alt="Explore" />
              </Box>
            </Box>
            <Typography sx={venueSession1Styles.cardText}>
              Explore vendor profiles with reviews and ratings effortlessly.
            </Typography>
          </Box>
          <Box sx={venueSession1Styles.card}>
            <Box sx={venueSession1Styles.cardIconContainer}>
              <Box sx={{ ...venueSession1Styles.cardIcon, background: '#B5EAD7' }}>
                <img src={vector2} alt="Connect" />
              </Box>
            </Box>
            <Typography sx={venueSession1Styles.cardText}>
              Connect with vendors instantly and save your favorites with just one tap.
            </Typography>
          </Box>
          <Box sx={venueSession1Styles.card}>
            <Box sx={venueSession1Styles.cardIconContainer}>
              <Box sx={{ ...venueSession1Styles.cardIcon, background: '#92BCE8' }}>
                <img src={vector3} alt="Personalized" />
              </Box>
            </Box>
            <Typography sx={venueSession1Styles.cardText}>
              Get personalized vendor recommendations based on your preferences.
            </Typography>
          </Box>
          <Box sx={venueSession1Styles.card}>
            <Box sx={venueSession1Styles.cardIconContainer}>
              <Box sx={{ ...venueSession1Styles.cardIcon, background: '#FFCC99' }}>
                <img src={vector4} alt="Exclusive Features" />
              </Box>
            </Box>
            <Typography sx={venueSession1Styles.cardText}>
              Gain access to exclusive features tailored to your own wedding planning needs.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VenueSessionOne;
