import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
} from '@mui/material';
// @ts-ignore
import profilPhoto from '../assets/photo/profil.jpg';
import {
  mainBoxStyle,
  photoBoxStyle,
  photoStyle,
  descriptionBoxStyle,
  mainTextStyle,
  listItemTextStyle,
  mainTextVariant, mainContentStyle,
} from '../styles/presentationSectionStyles';
import {
  mainText,
  listItems,
  alternativePhoto,
  fadeInDuration,
} from '../assets/data/presentationSectionData';

function PresentationSection(): JSX.Element {
  return (
    <Fade
      in
      timeout={fadeInDuration}
    >
      <Box sx={mainBoxStyle} id="Présentation">
        <Box sx={{ marginTop: '7vh', marginLeft: '5vw' }}>
          <Typography variant="h2" sx={{ fontFamily: 'Avenir', fontWeight: 'bold' }}>
            Présentation
          </Typography>
        </Box>
        <Box sx={mainContentStyle}>
          <Box sx={photoBoxStyle}>
            <img
              src={profilPhoto}
              alt={alternativePhoto}
              style={photoStyle}
            />
          </Box>
          <Box sx={descriptionBoxStyle}>
            {mainText.map((textItem) => (
              <Typography
                variant={mainTextVariant}
                sx={mainTextStyle}
                key={textItem}
              >
                {textItem}
              </Typography>
            ))}
            <List>
              {
                listItems.map((listItem) => (
                  <ListItem key={listItem.primaryText}>
                    <ListItemIcon>
                      {listItem.itemIcon}
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={listItemTextStyle}
                      secondaryTypographyProps={listItemTextStyle}
                      primary={listItem.primaryText}
                      secondary={listItem.secondaryText ?? null}
                    />
                  </ListItem>
                ))
              }
            </List>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}

export default PresentationSection;
