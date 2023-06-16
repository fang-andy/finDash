// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
import '@material-ui/core/styles';

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
