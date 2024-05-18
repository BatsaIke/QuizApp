import { Box, Typography, Grid, Button } from "@mui/material";
import { fourthSessionStyles } from "./FourthSessionStyles";

// Import images
import image1 from "../../../../assets/images/industry-page/fourth1.jpeg";
import image2 from "../../../../assets/images/industry-page/fourth2.jpeg";
import image3 from "../../../../assets/images/industry-page/fourth3.jpeg";
import image4 from "../../../../assets/images/industry-page/fourth4.jpeg";
import image5 from "../../../../assets/images/industry-page/fourth5.png";
import image6 from "../../../../assets/images/industry-page/fourth6.jpeg";
import image7 from "../../../../assets/images/industry-page/fourth7.jpeg";
import image8 from "../../../../assets/images/industry-page/fourth8.jpeg";

const FourthSession = () => {
  // Array of categories and corresponding images
  const categories = [
    { title: "Bridal Wear", img: image1, description: "Bridal gowns & more" },
    { title: "Groom Wear", img: image2, description: "Groom's style & more" },
    { title: "Invitations", img: image3, description: "Gifts, Invites, Joy" },
    { title: "Floral & Decor", img: image4, description: "Artistry & Style" },
    { title: "Transport", img: image5, description: "Travel in style" },
    { title: "Catering", img: image6, description: "Catering Services" },
    { title: "Venues", img: image7, description: "Premier wedding venues" },
    { title: "Honeymoon", img: image8, description: "Romantic bliss & beyond" },
  ];

  return (
    <Box sx={fourthSessionStyles.mainContainer}>
      <Box sx={fourthSessionStyles.divider} />

      <Typography variant="h4" sx={fourthSessionStyles.title}>
        Savor the Journey of Wedding Planning
      </Typography>
      <Typography variant="subtitle1" sx={fourthSessionStyles.subtitle}>
        Start organizing your wedding with Wosom at no expense
      </Typography>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={fourthSessionStyles.gridContainer}
      >
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={fourthSessionStyles.card}>
              <img
                src={category.img}
                alt={category.title}
                style={{ width: "100%", height: "100%" }}
              />
              <Box sx={fourthSessionStyles.cardContent}>
                <Typography variant="h6" sx={fourthSessionStyles.cardTitle}>
                  {category.title}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: "1.5px",
                      backgroundColor: "#C09653",
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={fourthSessionStyles.cardDescription}
                  >
                    {category.description}
                  </Typography>
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: "1.5px",
                      backgroundColor: "#C09653",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" sx={fourthSessionStyles.viewMoreButton}>
        View More
      </Button>
    </Box>
  );
};

export default FourthSession;
