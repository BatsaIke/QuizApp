import { SxProps, Theme } from "@mui/material/styles";

export const sixthSessionStyles: Record<string, SxProps<Theme>> = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
  },
  header: {
    fontSize: 25,
    fontFamily: "Lexend Deca",
    fontWeight: "600",

    color: "#111111",
    textTransform: "uppercase",
  },
  subHeader: {
    fontSize: "15px",
    textAlign: "center",
    fontFamily: "Lexend Deca",

    color: "#111111",
  },
  background: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    gap: "20px",
    backgroundColor: "rgba(192, 150, 83, 0.20)",
    position: "relative",
    marginTop: "50px",
    marginBottom: "50px",
  },
  gridContainer: {
    width: "100%",
    maxWidth: "680px",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  image1: {
    width: "100%",
    position: "relative",
    maxHeight: "450px",
    minHeight: "450px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
    top: "-40px",
    transition: "transform 800ms ease-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  image2: {
    width: "100%",
    maxHeight: "450px",
    minHeight: "450px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
    position: "relative",
    bottom: "-40px",
    transition: "transform 800ms ease-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  textContainerLeft: {
    position: "absolute",
    left: "290px",
    top: "35%",
    transform: "translateY(-50%)",
    textAlign: "right",
    width: "220px",
  },
  textContainerRight: {
    position: "absolute",
    right: "290px",
    bottom: "5px",
    transform: "translateY(-50%)",
    textAlign: "left",
    width: "220px",
  },
  title: {
    fontSize: "35px",
    fontWeight: "400",
    color: "#111111",
    fontFamily: "Butterscotch",
    lineHeight: "52.5px",
  },
  quote: {
    fontSize: "15px",
    fontFamily: "Lexend Deca",
    fontWeight: "400",
    lineHeight: "20px",
    color: "#111111",
  },
  seeMoreButton: {
    backgroundColor: "#C09653",
    color: "white",
    padding: "10px 20px",
    borderRadius: "12px",
    "&:hover": {
      backgroundColor: "#b0854f",
    },
    marginTop: "20px",
  },
  arrowButton: {
    position: "absolute",
    top: "17%",
    "&:nth-of-type(1)": {
      left: "15%",
    },
    "&:nth-of-type(2)": {
      right: "15%",
    },
  },
  "@keyframes slideUp": {
    "0%": { transform: "translateY(100%)" },
    "100%": { transform: "translateY(0)" },
  },
  "@keyframes slideDown": {
    "0%": { transform: "translateY(-100%)" },
    "100%": { transform: "translateY(0)" },
  },
  slideUp: {
    animation: "slideUp 800ms ease-out",
  },
  slideDown: {
    animation: "slideDown 800ms ease-out",
  },
  divider: {
    width: { xs: "50%", sm: "53%", md: "50%" },
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
};
