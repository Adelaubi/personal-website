import { createTheme, Theme } from '@mui/material/styles';

const ColorPalette: Record<string, string> = {
  strongRed: '#5C0909',
  red: '#A62929',
  yellow: '#F0D678',
  strongPink: '#F06060',
  pink: '#B56363',
  softPink: '#F28585',
};

export const theme: Theme = createTheme({
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

export default ColorPalette;
