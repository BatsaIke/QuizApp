import React, { useState } from "react";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import { fifthSessionStyles } from "./EventBlogStyles";
import springColorImage from "../../../assets/images/industry-page/blog1.jpeg";
import weddingDressImage from "../../../assets/images/industry-page/blog2.jpeg";
import perfectWeddingImage from "../../../assets/images/industry-page/blog3.jpeg";
import arrowLeft from "../../../assets/images/industry-page/svg/Vectorleft.png";
import arrowRight from "../../../assets/images/industry-page/svg/VectorRight.png";
import { handleNext, handlePrev } from "../../utils/carouselNav"; 

interface Item {
  img: string;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    img: springColorImage,
    title: "The Prettiest Spring Wedding Colour Ideas",
    description: "Spring is one of the most popular seasons for weddings and with the arrival of the new year comes a whole new colour palette to consider for your big day",
  },
  {
    img: weddingDressImage,
    title: "The Most Beautiful Wedding Dresses to Wear",
    description: "Spring is one of the most popular seasons for weddings and with the arrival of the new year comes a whole new colour palette to consider for your big day.",
  },
  {
    img: perfectWeddingImage,
    title: "Crafting The Perfect Wedding for You",
    description: "Spring is one of the most popular seasons for weddings and with the arrival of the new year comes a whole new colour palette to consider for your big day",
  },
  {
    img: perfectWeddingImage,
    title: "Crafting The Perfect Wedding for You",
    description: "Spring is one of the most popular seasons for weddings and with the arrival of the new year comes a whole new colour palette to consider for your big day",
  },
];

const FifthSession: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box sx={fifthSessionStyles.mainContainer}>
      <Box sx={fifthSessionStyles.divider} />

      <Typography variant="h4" sx={fifthSessionStyles.sessionTitle}>
        RECOMMENDED PRIME PICKS FOR YOUR LUXURY WEDDING
      </Typography>
      <Typography variant="h5" sx={fifthSessionStyles.subtitle}>
        Savor the Journey of Wedding Planning
      </Typography>
      <Box sx={fifthSessionStyles.mainBox}>
        <IconButton
          onClick={() => handlePrev(setCurrentIndex)}
          disabled={currentIndex === 0}
        >
          <img src={arrowLeft} alt="Previous" />
        </IconButton>
        <Grid container sx={fifthSessionStyles.container}>
          {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography sx={fifthSessionStyles.timeStamp}>
                16h • Wedding Couples
              </Typography>
              <Box
                sx={fifthSessionStyles.card}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={fifthSessionStyles.cardImage}
                />
                <Box sx={fifthSessionStyles.cardContent}>
                  <Typography
                    variant="h6"
                    sx={{
                      ...fifthSessionStyles.cardTitle,
                      color: hoveredIndex === index ? "#111" : "#C09653",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={fifthSessionStyles.cardDescription}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <IconButton
          onClick={() => handleNext(setCurrentIndex, items.length - 3)}
          disabled={currentIndex >= items.length - 3}
        >
          <img src={arrowRight} alt="Next" />
        </IconButton>
      </Box>
      <Button variant="contained" sx={fifthSessionStyles.getIdeas}>
        get ideas
      </Button>
    </Box>
  );
};

export default FifthSession;
