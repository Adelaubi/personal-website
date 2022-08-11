export const mainBoxStyle: Record<string, string> = {
  display: 'flex',
  height: '90vh',
  paddingLeft: '2vw',
  paddingRight: '2vw',
  width: '96vw',
  flexDirection: 'row',
};

export const photoBoxStyle: Record<string, Record<string, string>|string> = {
  display: { xs: 'none', lg: 'block' },
  width: '60vh',
  marginLeft: '5%',
  marginTop: '8%',
};

export const photoStyle: Record<string, string|number> = {
  height: '60vh',
  borderRadius: 50,
};

export const descriptionBoxStyle: Record<string, string> = {
  marginTop: '8%',
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
