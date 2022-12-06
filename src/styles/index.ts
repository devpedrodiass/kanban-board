import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      black: "#000002",
      gray100: "#EEF2F5",
      gray200: "#E6E6E6",
      gray400: "#BDBDBD",
      pink: "#FF2473",
      red: "#FF0000",
      orange: "#FEA945",
      blue: "#18B0FF",
      primary: "#00569F",
      green: "#44A53B",
    },
    radii: {
      md: "20px",
    }
  }
}
);
