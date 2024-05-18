import React, { useState } from "react";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import { sixthSessionStyles } from "./SixthSessionStyles";
import sixImage1 from "../../../../assets/images/industry-page/sixImage1.jpeg";
import sixImage2 from "../../../../assets/images/industry-page/sixImage2.jpeg";
import sixImage3 from "../../../../assets/images/industry-page/fourth1.jpeg";
import sixImage4 from "../../../../assets/images/industry-page/fourth2.jpeg";
import arrowLeft from "../../../../assets/images/industry-page/svg/Vectorleft.png";
import arrowRight from "../../../../assets/images/industry-page/svg/VectorRight.png";

interface Testimonial {
  img: string;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    img: sixImage1,
    title: "Tina & Alex",
    quote: "“From the first consultation to the last dance, WOSOM made our wedding day truly magical!”",
  },
  {
    img: sixImage2,
    title: "Jason & Liz",
    quote: "“We couldn't have asked for a better partner than WOSOM. Thank you for making our special day so perfect :)”",
  },
  {
    img: sixImage3,
    title: "Sam & Chris",
    quote: "“WOSOM made our wedding unforgettable. Every detail was perfect!”",
  },
  {
    img: sixImage4,
    title: "Emma & Liam",
    quote: "“Thank you, WOSOM, for making our day so special and stress-free!”",
  },
];

const SixthSession: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 2 : 0);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 2) < testimonials.length ? prev + 2 : 0);
  };

  const getSlideDirection = (index: number) => {
    return index % 4 === 0 || index % 4 === 3 ? sixthSessionStyles.slideDown : sixthSessionStyles.slideUp;
  };

  return (
    <Box sx={sixthSessionStyles.mainContainer}>
              <Box sx={sixthSessionStyles.divider} />

      <Typography variant="h4" sx={sixthSessionStyles.header}>
        Discover the Insights from WoSom's Valued Clients
      </Typography>
      <Typography variant="h5" sx={sixthSessionStyles.subHeader}>
        Discover the insights from Wosom's valued clients!
      </Typography>

      <Box sx={sixthSessionStyles.background}>
        <IconButton onClick={handlePrev} disabled={currentIndex === 0} sx={sixthSessionStyles.arrowButton}>
          <img src={arrowLeft} alt="Previous" />
        </IconButton>
        
        <Grid container spacing={2} justifyContent="space-between" sx={sixthSessionStyles.gridContainer}>
          <Grid item xs={12} sm={6} display="flex" alignItems="center" sx={getSlideDirection(currentIndex)}>
            <Box sx={currentIndex % 4 === 0 || currentIndex % 4 === 3 ? sixthSessionStyles.textContainerLeft : sixthSessionStyles.textContainerRight}>
              <Typography variant="h6" sx={sixthSessionStyles.title}>{testimonials[currentIndex].title}</Typography>
              <Typography sx={sixthSessionStyles.quote}>{testimonials[currentIndex].quote}</Typography>
            </Box>
            <Box component="img" src={testimonials[currentIndex].img} alt={testimonials[currentIndex].title} sx={currentIndex % 4 === 0 || currentIndex % 4 === 3 ? sixthSessionStyles.image1 : sixthSessionStyles.image2} />
          </Grid>
          {currentIndex + 1 < testimonials.length && (
            <Grid item xs={12} sm={6} display="flex" alignItems="center" sx={getSlideDirection(currentIndex + 1)}>
              <Box component="img" src={testimonials[currentIndex + 1].img} alt={testimonials[currentIndex + 1].title} sx={currentIndex % 4 === 0 || currentIndex % 4 === 3 ? sixthSessionStyles.image2 : sixthSessionStyles.image1} />
              <Box sx={currentIndex % 4 === 0 || currentIndex % 4 === 3 ? sixthSessionStyles.textContainerRight : sixthSessionStyles.textContainerLeft}>
                <Typography variant="h6" sx={sixthSessionStyles.title}>{testimonials[currentIndex + 1].title}</Typography>
                <Typography sx={sixthSessionStyles.quote}>{testimonials[currentIndex + 1].quote}</Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        <IconButton onClick={handleNext} disabled={currentIndex >= testimonials.length - 2} sx={sixthSessionStyles.arrowButton}>
          <img src={arrowRight} alt="Next" />
        </IconButton>
      </Box>

      <Button sx={sixthSessionStyles.seeMoreButton}>See more</Button>
    </Box>
  );
};

export default SixthSession;
