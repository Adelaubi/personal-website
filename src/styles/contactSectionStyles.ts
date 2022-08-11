import ColorPalette from './colorPalette';
import { TitleType } from '../types/generalTypes';

export const mainContainerStyle: Record<string, string> = {
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: '10vh',
  backgroundColor: ColorPalette.yellow,
  justifyContent: 'center',
};

export const linksContainerStyle: Record<string, string> = {
  marginTop: '4vh',
  marginLeft: '10vw',
};

export const linkStyle: Record<string, string> = {
  marginRight: '5vw',
};

export const linkTitleVariant: TitleType = 'h6';
