import { TitleType } from '../types/generalTypes';

export const mainBoxStyle: Record<string, string> = {
  height: '100vh',
  paddingLeft: '2vw',
  paddingRight: '2vw',
  width: '96vw',
};

export const mainContentStyle: Record<string, string> = {
  display: 'flex',
  flexDirection: 'row',
};

export const mainTitleContainer: Record<string, string> = {
  marginTop: '7vh',
  marginLeft: '5vw',
};

export const mainTitleStyle: Record<string, string> = {
  fontFamily: 'Avenir',
  fontWeight: 'bold',
};

export const photoBoxStyle: Record<string, Record<string, string>|string> = {
  display: { xs: 'none', lg: 'block' },
  width: '60vh',
  marginLeft: '5%',
  marginTop: '5%',
};

export const photoStyle: Record<string, string|number> = {
  height: '60vh',
  borderRadius: 50,
};

export const descriptionBoxStyle: Record<string, string> = {
  marginTop: '5%',
  marginLeft: '5%',
  flexDirection: 'column',
};

export const mainTextStyle: Record<string, string|number> = {
  fontFamily: 'Avenir',
  lineHeight: 2,
};

export const listItemTextStyle: Record<string, string> = {
  fontFamily: 'Avenir',
};

export const mainTitleVariant: TitleType = 'h2';
export const mainTextVariant: TitleType = 'h6';
