import {
  TitleType,
} from '../types/generalTypes';

export const mainContainerStyle: Record<string, string | Record<string, string>> = {
  height: { xs: 'auto', lg: '85vh' },
  paddingLeft: '5vw',
  paddingRight: '5vw',
  paddingTop: '15vh',
  width: '90vw',
};

export const mainTitleStyle: Record<string, string> = {
  fontFamily: 'Avenir',
  fontWeight: 'bold',
};

export const experiencesContainerStyle: Record<string, string | Record<string, string>> = {
  display: 'flex',
  flexDirection: { xs: 'column', lg: 'row' },
  marginTop: '3vh',
};

export const singleExperienceContainerStyle: Record<string, string | Record<string, string>> = {
  flexDirection: 'column',
  width: { xs: 'auto', lg: '47vw' },
  paddingLeft: '3vw',
};

export const experienceTitleLinkStyle: Record<string, string | Record<string, string>> = {
  fontFamily: 'Avenir',
};

export const experienceContentStyle: Record<string, string | Record<string, string>> = {
  fontFamily: 'Avenir',
  marginTop: '2vh',
};

export const experienceContentLinkStyle: Record<string, string> = {
  color: 'gray',
};

export const experienceTaskTitleStyle: Record<string, string | Record<string, string>> = {
  fontFamily: 'Avenir',
  marginTop: '2vh',
};

export const experienceTaskListStyle: Record<string, string | Record<string, string>> = {
  marginLeft: '1vh',
};

export const experienceTaskPrimaryStyle: Record<string, string> = {
  fontFamily: 'Avenir',
};

export const experienceTaskSecondaryStyle: Record<string, string> = {
  fontFamily: 'Avenir',
  color: 'gray',
};

export const titleVariant: Record<string, TitleType> = {
  main: 'h2',
  section: 'h4',
  taskTitle: 'h6',
};
