export const blockStyleFn = (contentBlock) => {
    const textAlign = contentBlock.getData().get("textAlignment");
    console.log(
      `Block type: ${contentBlock.getType()}, Alignment: ${textAlign}`
    );
    switch (textAlign) {
      case "left":
        console.log("Applying align-left");
        return "align-left";
      case "center":
        console.log("Applying align-center");
        return "align-center";
      case "right":
        console.log("Applying align-right");
        return "align-right";
      default:
        console.log("No alignment data");
        return "";
    }
  };