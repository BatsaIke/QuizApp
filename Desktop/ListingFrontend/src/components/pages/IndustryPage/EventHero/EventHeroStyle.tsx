import { SxProps, Theme } from "@mui/material";
import "../../../../App.css";
export const eventsHeroStyles: { [key: string]: SxProps<Theme> } = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflowX: "hidden", // Ensures no horizontal overflow
  },
  backdrop: {
    width: { xs: "80%", sm: 839 },
    height: { xs: 300, sm: 570 },
    position: "relative",
    background: "rgba(192, 150, 83, 0.20)",
    boxShadow: "1px 1px 9px rgba(229, 193, 193, 0.48)",
    left: { xs: "-10%", sm: "-200px" },
  },
  mainImage: {
    position: "absolute",
    right: { xs: "10%", sm: "15%", md: 520 },
    top: { xs: "10%", sm: 50 },
    width: { xs: "80%", sm: "75%", md: "42%" },
    height: "auto", // Maintains aspect ratio
    borderRadius: "4px",
  },
  secondaryBackdrop: {
    width: { xs: "90%", sm: 260 },
    height: { xs: 200, sm: 385 },
    position: "absolute",
    left: { xs: "5%", sm: 377.5 },
    top: { xs: 150, sm: 100 },
    background: "#FCF8F8",
    borderRadius: "4px",
  },
  secondaryImage: {
    width: { xs: "85%", sm: 254 },
    height: "auto", // Adjusts automatically to maintain aspect ratio
    position: "absolute",
    left: { xs: "7.5%", sm: 371 },
    top: { xs: 250, sm: 110 },
    boxShadow: "2px 1px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: { xs: "8px", sm: "10px" },
    
    padding: { xs: "0 5%", sm: "0 20px" },
    width: { xs: "100%", sm: "40%" },
    position: "absolute",
    top: { xs: "20%", sm: "26%" },
    right: { xs: "5%", sm: "-148px" }, 
  },
  welcomeText: {
    position: "absolute",
    right: { xs: "10%", sm: "22.8%" },
    top: { xs: "40%", sm: "7%" },
    fontSize: { xs: "6vw", sm: "3vw" }, // Adjust font size based on viewport width
    fontFamily: "Butterscotch",
    fontWeight: "400",
    lineHeight: { xs: "7vw", sm: "137px" },
    color: "#111111",
  },
  verticalText: {
    position: "absolute",
    left: { xs: 20, sm: 311 },
    top: { xs: 300, sm: 479 },
    transform: "rotate(-90deg)",
    transformOrigin: "left top",
    fontSize: { xs: "5vw", sm: 25 },
    fontFamily: "Butterscotch",
    fontWeight: "400",
    textTransform: "capitalize",
    lineHeight: { xs: "6vw", sm: "86.5px" },
    letterSpacing: { xs: "1px", sm: "1.88px" },
    color: "#111111",
    whiteSpace: "nowrap", // Ensures text is always in one line
  },
};
