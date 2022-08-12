import React from 'react';
import {
  Code,
  GitHub,
  Psychology,
  ShoppingCartCheckout,
  Storage,
  Web,
} from '@mui/icons-material';
import { experienceType } from '../../types/experienceProjectSectionTypes';

export const mainTitle = 'Projets';
export const taskTitle = 'Tâches réalisées :';

export const experiences: Array<experienceType> = [{
  title: 'Stage Artisan Web - Coddity',
  titleLink: 'https://coddity.com',
  content: [
    'Réalisation d\'une période de stage de 6 mois en tant que développeur full-stack. J\'ai pu travailler sur la plateforme Danil qui permet le monitoring de chatbots au travers de KPIs. Ce travail s\'est effectué aussi bien sur le côté Frontend (React Typescript) que Backend (AWS/Python). J\'ai également pu implémenter avec un autre développeur la totalité ',
    'site commercial',
    ' de Danil avec Svelte Typescript.',
  ],
  contentLink: 'https://danil.io',
  tasks: [{
    primary: 'Danil - Frontend',
    secondary: 'Réalisation de features et de fixes, tests E2E et unitaires',
    icon: <Web />,
  }, {
    primary: 'Danil - Backend',
    secondary: 'Réalisation de features et de fixes, tests unitaires',
    icon: <Storage />,
  }, {
    primary: 'Danil - Site commercial',
    secondary: 'Réalisation de l\'architecture et des fonctionnalités, gestion du projet (Git, ...)',
    icon: <ShoppingCartCheckout />,
  }],
}, {
  title: 'Projet Universitaire - Dérives',
  titleLink: 'https://derives.utc.fr',
  content: [
    'Réalisation et publication sur Google Play et Apple Store d\'une application mobile, dans le cadre d\'un enseignement universitaire. Celle-ci consiste en la génération de poèmes en fonction de l\'envirronnement de l\'utilisateur. Ce projet a été réalisé avec une équipe d\'enseignant.e.s et d\'étudiant.e.s aussi bien dans sa conception que son implémentation. L\'ensemble du code est disponible ',
    'ci-contre',
    ', celui-ci a été réalisé avec React Native Expo, en Javascript.',
  ],
  contentLink: 'https://github.com/anto2oo/Derives',
  tasks: [{
    primary: 'Gestion du projet',
    secondary: 'Maintien du Github, Méthode Agile SCRUM avec Trello',
    icon: <GitHub />,
  }, {
    primary: 'Conception de l\'application',
    secondary: 'Expérience utilisateur, Ajout de fonctionnalités',
    icon: <Psychology />,
  }, {
    primary: 'Implémentation de l\'application',
    secondary: 'Réalisation des fonctionnalités et des fixes',
    icon: <Code />,
  }],
}];

export const fadeInDuration = 10000;
