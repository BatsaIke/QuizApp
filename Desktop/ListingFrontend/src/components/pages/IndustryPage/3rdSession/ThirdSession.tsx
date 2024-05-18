import { Box, Typography, Grid } from "@mui/material";
import { thirdComponentStyles } from "./ThirdSessionStyle";
import vector3 from "../../../../assets/images/industry-page/Vector3.png";
import vector from "../../../../assets/images/industry-page/Vector.png";
import vector1 from "../../../../assets/images/industry-page/Vector1.png";
import vector2 from "../../../../assets/images/industry-page/Vector2.png";

const ThirdSession = () => {
  const tools = [
    {
      name: "Wosom Calendar",
      description: "Navigate life's events effortlessly with Wosom Calendar",
      img: vector3,
    },
    {
      name: "Wedding Pages",
      description:
        "Vendor's products, services & customer reviews found within Wosom Pages Tool",
      img: vector,
    },
    {
      name: "Budget Planner",
      description:
        "Planning made effortless. Keep budget control with Wosom Budget Planner",
      img: vector2,
    },
    {
      name: "Set up RSVP",
      description:
        "Craft seamless event experiences with tailored RSVP management at your fingertips",
      img: vector1,
    },
  ];

  return (
    <Box sx={thirdComponentStyles.mainContainer}>
      <Box sx={thirdComponentStyles.divider}></Box>

      <Typography variant="h4" sx={thirdComponentStyles.title}>
        WoSom's Tools for Simplifying Your Wedding
      </Typography>
      <Typography variant="subtitle1" sx={thirdComponentStyles.subtitle}>
        Wosom's suite of tools simplifies your wedding planning journey
      </Typography>
      <Grid container justifyContent="center" spacing={6}>
        {" "}
        {/* Increased spacing */}
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={thirdComponentStyles.toolCard}>
              <Box
                component="img"
                src={tool.img}
                alt={tool.name}
                sx={{ width: 44, height: 50 }}
              />
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    height: "2px",
                    backgroundColor: "#C09653",
                  }}
                />
                <Typography variant="h6" sx={thirdComponentStyles.toolTitle}>
                  {tool.name}
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    height: "2px",
                    backgroundColor: "#C09653",
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={thirdComponentStyles.toolDescription}
              >
                {tool.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThirdSession;
