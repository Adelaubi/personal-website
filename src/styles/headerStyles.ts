import {
  ColorType,
  TitleType,
  PositionType,
} from '../types/generalTypes';

export const appBarPosition: PositionType = 'sticky';
export const appBarColor: ColorType = 'primary';

export const toolbarStyle: Record<string, string> = {
  height: '10vh',
};

export const ownerNameVariant: TitleType = 'h5';
export const ownerNameStyle: Record<string, string|number> = {
  flexGrow: 1,
  fontFamily: 'Avenir',
};

export const buttonStyle: Record<string, string | Record<string, string>> = {
  color: 'white',
  textDecoration: 'none',
  display: {
    xs: 'none',
    sm: 'block',
  },
  fontFamily: 'Avenir',
};
