import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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

function PresentationSection(): JSX.Element {
  return (
    <Box sx={{
      display: 'flex',
      height: '90vh',
      width: '100vw',
      flexDirection: 'row',
    }}
    >
      <img
        src={profilPhoto}
        alt="Profil"
        style={{
          height: '60%',
          borderRadius: 50,
          marginLeft: '5%',
          marginTop: '10%',
        }}
      />
      <Box sx={{
        marginTop: '10%',
        marginLeft: '5%',
        flexDirection: 'column',
      }}
      >
        {mainText.map((textItem) => (
          <Typography variant="h6" sx={{ fontFamily: 'Avenir', lineHeight: 2 }}>{textItem}</Typography>
        ))}
        <List>
          {
            listItems.map((listItem) => (
              <ListItem>
                <ListItemIcon>
                  {listItem.itemIcon}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontFamily: 'Avenir' }}
                  secondaryTypographyProps={{ fontFamily: 'Avenir' }}
                  primary={listItem.primaryText}
                  secondary={listItem.secondaryText ?? null}
                />
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Box>
  );
}

export default PresentationSection;
