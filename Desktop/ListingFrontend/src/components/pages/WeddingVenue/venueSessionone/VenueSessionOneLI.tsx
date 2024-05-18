import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { venueSessionOneLIStyles } from './VenueSessionOneLIStyles';
import image1 from '../../../../assets/images/wedding-venue/notLoggedin.png';
import image2 from '../../../../assets/images/wedding-venue/loggedin.png';
import iconRight from '../../../../assets/images/wedding-venue/iconRight.png';
import iconLeft from '../../../../assets/images/wedding-venue/iconLeft.png';

const categories = [
  { name: 'Bridal Wear', img: image1 },
  { name: 'Beauty', img: image2 },
  { name: 'Transport', img: image1 },
  { name: 'Childcare Services', img: image2 },
  { name: 'Entertainment', img: image1 },
  { name: 'Hen & Stag Party', img: image2 },
  { name: 'Catering', img: image1 },
  { name: 'Venues', img: image2 },
  { name: 'Destination Wedding', img: image1 },
  { name: 'Invitation', img: image2 },
  { name: 'Insurance Services', img: image1 },
  { name: 'Lighting & Production', img: image2 }
];

const VenueSessionOneLI: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const visibleCategories = categories.slice(startIndex, startIndex + 7).concat(
    categories.slice(0, Math.max(0, startIndex + 7 - categories.length))
  );

  return (
    <Box sx={venueSessionOneLIStyles.container}>
      <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20px' }}>
        <Typography sx={venueSessionOneLIStyles.header}>
          Discover Wosom's Diverse Vendor Categories
        </Typography>
        <Typography sx={venueSessionOneLIStyles.subHeader}>
          Browse Through Our Range of Vendor Categories for best wedding experience
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '100px' }}>
        <Box sx={venueSessionOneLIStyles.arrow} onClick={handlePrev}>
          <img src={iconLeft} alt="Previous" style={{ width: '100%' }} />
        </Box>
        <Box sx={venueSessionOneLIStyles.categoriesContainer}>
          {visibleCategories.map((category, index) => (
            <Box key={index} sx={venueSessionOneLIStyles.category}>
              <img src={category.img} alt={category.name} style={venueSessionOneLIStyles.categoryImage as React.CSSProperties} />
              <Typography sx={venueSessionOneLIStyles.categoryText}>{category.name}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={venueSessionOneLIStyles.arrow} onClick={handleNext}>
          <img src={iconRight} alt="Next" style={{ width: '100%' }} />
        </Box>
      </Box>
      <Button sx={venueSessionOneLIStyles.moreCategoriesButton}>
        More Categories
      </Button>
    </Box>
  );
};

export default VenueSessionOneLI;
