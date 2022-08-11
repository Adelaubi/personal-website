import { createTheme, Theme } from '@mui/material/styles';
import ColorPalette from './colorPalette';

const customTheme: Theme = createTheme({
  palette: {
    primary: {
      main: ColorPalette.red,
      dark: ColorPalette.strongRed,
    },
    secondary: {
      main: ColorPalette.pink,
      light: ColorPalette.softPink,
      dark: ColorPalette.strongPink,
    },
    info: {
      main: ColorPalette.yellow,
    },
  },
});

export default customTheme;
