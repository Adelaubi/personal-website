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
import {
  Calculate,
  Percent,
  Hub,
  Code,
} from '@mui/icons-material';
// @ts-ignore
import profilPhoto from '../../../assets/photo/profil.jpg';
import { ListItemType } from '../../../types/presentationSectionTypes';
import {
  mainBoxStyle,
  photoBoxStyle,
  photoStyle,
  descriptionBoxStyle,
  mainTextStyle,
  listItemTextStyle,
} from '../../../styles/presentationSectionStyles';

const mainText: Array<string> = [
  'Augustin de Laubier - 22 ans',
  'Université de Technologie de Compiègne - 5ème Année',
  'Génie Informatique - Système et Réseau',
  'Cours Suivis :',
];

const listItems: Array<ListItemType> = [
  {
    primaryText: 'Mathématiques',
    secondaryText: 'Analyse numérique, Algèbre linéaire',
    itemIcon: <Calculate />,
  }, {
    primaryText: 'Statistiques et Probabilités',
    itemIcon: <Percent />,
  }, {
    primaryText: 'Systèmes et Réseaux',
    secondaryText: 'Structure d\'un réseau, Sécurité Informatique, Algorithmes Répartis, Systèmes d\'exploitation',
    itemIcon: <Hub />,
  }, {
    primaryText: 'Programmation',
    secondaryText: 'Programmation Orientée Objet, Développement Web',
    itemIcon: <Code />,
  },
];

const photoAlternative = 'Photo de profil';
const fadeInDuration = 2000;

function PresentationSection(): JSX.Element {
  return (
    <Fade
      in
      timeout={fadeInDuration}
    >
      <Box sx={mainBoxStyle}>
        <Box sx={photoBoxStyle}>
          <img
            src={profilPhoto}
            alt={photoAlternative}
            style={photoStyle}
          />
        </Box>
        <Box sx={descriptionBoxStyle}>
          {mainText.map((textItem) => (
            <Typography
              variant="h6"
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
    </Fade>
  );
}

export default PresentationSection;
