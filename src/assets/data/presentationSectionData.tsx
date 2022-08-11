import {
  Calculate,
  Code,
  Hub,
  Percent,
} from '@mui/icons-material';
import React from 'react';
import {
  ListItemType,
} from '../../types/presentationSectionTypes';

export const mainText: Array<string> = [
  'Augustin de Laubier - 22 ans',
  'Université de Technologie de Compiègne - 5ème Année',
  'Génie Informatique - Système et Réseau',
  'Cours Suivis :',
];

export const listItems: Array<ListItemType> = [
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

export const alternativePhoto = 'Photo de profil';
export const fadeInDuration = 2000;
