import ColorPalette from './colorPalette';
import {
  LinearProgressVariantType,
  TitleType,
} from '../types/generalTypes';

export const sectionContainerStyle: Record<string, string | Record<string, string>> = {
  height: { xs: 'auto', lg: '80vh' },
  paddingLeft: '2vw',
  paddingRight: '2vw',
  paddingTop: '5vh',
  paddingBottom: '5vh',
  width: '96vw',
  backgroundColor: 'black',
};

export const mainTitleStyle: Record<string, string> = {
  fontFamily: 'Avenir',
  color: 'white',
  marginBottom: '3vh',
};

export const mainContainerStyle: Record<string, string> = {
  width: '85%',
  paddingLeft: '5%',
  paddingRight: '10%',
};

export const generalFrameworkSkillsContainerStyles: Record<string, string> = {
  paddingLeft: '3%',
  paddingRight: '3%',
};

export const skillTitleStyle: Record<string, string> = {
  fontFamily: 'Avenir',
  color: 'white',
  marginBottom: '1vh',
  marginTop: '2vh',
};

export const skillSectionTitleStyle: Record<string, string> = {
  fontFamily: 'Avenir',
  color: 'white',
  marginBottom: '1vh',
  marginTop: '2vh',
};

export const languageSkillsContainerStyle: Record<string, string> = {
  display: 'flex',
  flexDirection: 'row',
};

export const languageSkillsColumnStyle: Record<string, string> = {
  flexDirection: 'column',
  width: '44%',
  paddingLeft: '3%',
  paddingRight: '3%',
};

export const languageSkillLinearProgressStyle: Record<string, string> = {
  width: '100%',
};

export const detailsStyle: Record<string, string> = {
  marginTop: '4vh',
  fontFamily: 'Avenir',
  color: ColorPalette.yellow,
};

export const titleVariant: Record<string, TitleType> = {
  main: 'h2',
  section: 'h4',
  skill: 'h6',
};

export const linearProgressVariant: LinearProgressVariantType = 'buffer';
