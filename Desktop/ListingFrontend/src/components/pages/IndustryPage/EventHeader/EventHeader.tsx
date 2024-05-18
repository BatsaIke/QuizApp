import React from 'react';
import { Box, Typography } from '@mui/material';
import { eventHeaderStyles } from './EventsHeaderStyles'; // Adjust path as necessary
import callender from '../../../../assets/images/header/calendar-days-light 1.png';
import taskList from '../../../../assets/images/header/clipboard-list-check-light 1.png';
import calculator from '../../../../assets/images/header/calculator-light 1.png';
import user from '../../../../assets/images/header/Vector.png';
import settings from '../../../../assets/images/header/gear-light 1.png';

const EventHeader: React.FC = () => {
    const icons = [
        { src: callender, alt: 'Calendar' },
        { src: taskList, alt: 'Task List' },
        { src: calculator, alt: 'Calculator' },
        { src: user, alt: 'User' },
        { src: settings, alt: 'Settings' },
    ];

    return (
        <Box sx={eventHeaderStyles.container}>
            <Box sx={eventHeaderStyles.contentContainer}>
                <Typography sx={eventHeaderStyles.eventLabel}>Events</Typography>
            </Box>
            <Box sx={eventHeaderStyles.rightIcons}>
                {icons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        style={{ width: '22px', height: '25px', marginLeft: index === 0 ? '20px' : '15px' }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default EventHeader;
