import { SxProps, Theme } from "@mui/material/styles";

export const fourthSessionStyles: Record<string, SxProps<Theme>> = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "0px 0",
    gap: { xs: 1, sm: 2, md: 2 }, // Adjust gap based on screen size for better spacing
  },
  title: {
    fontSize: { xs: 20, sm: 23, md: 25 }, // Adjust font size responsively
    fontFamily: "Lexend Deca",
    fontWeight: "600",
    textAlign: "center",
    color: "#111111",
    textTransform: "uppercase",
    padding: { xs: 1, sm: 2 }, // Padding adjustment for smaller screens
  },
  subtitle: {
    fontSize: { xs: 13, sm: 14, md: 15 }, // Adjust subtitle size responsively
    fontFamily: "Lexend Deca",
    fontWeight: "400",
    textAlign: "center",
    color: "#111111",
    marginBottom: { xs: 1, sm: 1.5, md: 2 },
  },
  gridContainer: {
    width: "100%",
    maxWidth: { xs: "100%", sm: "90%", md: "1280px" }, // Adjust maximum width for container fluidity
    margin: "auto",
    padding: { xs: "0 10px", sm: "0 15px", md: "0 20px" }, // Responsive padding
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: { xs: 230, sm: 250, md: 270 }, // Responsive card width
    height: { xs: 320, sm: 340, md: 360 }, // Responsive card height
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    "&:hover img": {
      transform: "scale(1.1)",
      transition: "transform 800ms ease-out",
    },
    "& img": {
      width: "100%",
      height: "auto",
      transition: "transform 800ms ease-out",
    },
    "&:hover:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      zIndex: 1,
      transition: "background-color 800ms ease-out",
    },
  },
  cardContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 20px)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "8px",
    zIndex: 2,
  },
  cardTitle: {
    fontSize: { xs: 16, sm: 17, md: 18 }, // Responsive title font size
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#000",
    marginBottom: "5px",
  },
  cardDescription: {
    fontSize: { xs: 15, sm: 16, md: 17 }, // Responsive description font size
    fontFamily: "Butterscotch",
    fontWeight: "400",
    textAlign: "center",
    color: "#C09653",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&::before, &::after": {
      content: '""',
      flexGrow: 1,
      height: "2px",
      backgroundColor: "#C09653",
      margin: "0 10px",
    },
  },
  divider: {
    width: { xs: "50%", sm: "53%", md: "60%" }, // Responsive width of the divider
    borderBottom: "2px solid #111111",
    marginBottom: "20px",
    marginTop: "20px",
    position: "relative",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "-4px",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#111111",
    },
    "&::before": {
      left: "0",
    },
    "&::after": {
      right: "0",
    },
  },
  viewMoreButton: {
    backgroundColor: "#C09653",
    color: "white",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    textTransform: "capitalize",
    borderRadius: 2.4,
    "&:hover": {
      backgroundColor: "#af8542",
    },
  },
};
