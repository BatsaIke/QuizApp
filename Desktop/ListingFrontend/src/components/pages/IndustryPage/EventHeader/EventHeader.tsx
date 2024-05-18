import React from 'react';
import { Box, Typography } from '@mui/material';
import { eventHeaderStyles } from './EventsHeaderStyles'; // Adjust path as necessary
import headerLogoUrl from '../../../../assets/images/header/wosom-menu-icon-header.png'; // Sample logo path

const EventHeader: React.FC = () => {
    // For demonstration, using the same image for all five
    const icons = Array(5).fill(headerLogoUrl); // Mock icons array with same image

    return (
        <Box sx={eventHeaderStyles.container}>
            <Box sx={eventHeaderStyles.contentContainer}>
                <Typography sx={eventHeaderStyles.eventLabel}>Events</Typography>
            </Box>
            <Box sx={eventHeaderStyles.rightIcons}>
                {icons.map((icon, index) => (
                    <img key={index} src={icon} alt={`Header Icon ${index + 1}`} />
                ))}
            </Box>
        </Box>
    );
};

export default EventHeader;
