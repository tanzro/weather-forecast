import { createStitches } from "@stitches/react";

const stitches = createStitches({
  media: {
    bp1: "(min-width: 320px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1200px)",
  },
  theme: {
    colors: {
      primary: "#696969",
      secondary: "#BBBBBB",
      tertiary: "#030303",
    },
    space: {
      xxs: "0.422rem",
      xs: "0.563rem",
      sm: "0.75rem",
      rg: "1rem",
      md: "1.33rem",
      lg: "1.77rem",
      xl: "2.369rem",
      xxl: "3.157rem",
    },
    fontSizes: {
      xxs: "0.422rem",
      xs: "0.563rem",
      sm: "0.75rem",
      rg: "1rem",
      md: "1.33rem",
      lg: "1.77rem",
      xl: "2.369rem",
      xxl: "3.157rem",
    },
    fonts: {
      poppins: "Poppins",
    },
  },
});

const injectGlobalStyles = stitches.globalCss({
  "*": { boxSizing: "border-box", fontFamily: "$poppins" },
  "*:after": {
    boxSizing: "border-box",
    fontFamily: "$poppins",
  },
  "*:before": {
    boxSizing: "border-box",
    fontFamily: "$poppins",
  },
  body: { margin: 0, padding: 0 },
  h1: { margin: 0 },
  p: { margin: 0 },
});

injectGlobalStyles();

export default stitches;
