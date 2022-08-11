import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Web,
  Storage,
  ShoppingCartCheckout,
  GitHub,
  Psychology,
  Code,
} from '@mui/icons-material';
import {
  taskItemIconStyle,
  mainContainerStyle,
  mainTitleStyle,
  experiencesContainerStyle,
  singleExperienceContainerStyle,
  experienceTitleLinkStyle,
  experienceContentStyle,
  experienceContentLinkStyle,
  experienceTaskTitleStyle,
  experienceTaskListStyle,
  experienceTaskPrimaryStyle,
  experienceTaskSecondaryStyle,
} from '../../../styles/experienceProjectSectionStyles';
import { experienceType } from '../../../types/experienceProjectSectionTypes';

const experiences: Array<experienceType> = [{
  title: 'Stage Artisan Web - Coddity',
  titleLink: 'https://coddity.com',
  content: [
    'Réalisation d\'une période de stage de 6 mois en tant que développeur full-stack. J\'ai pu travailler sur la plateforme Danil qui permet le monitoring de chatbots au travers de KPIs. Ce travail s\'est effectué aussi bien sur le côté Frontend(React Typescript) que Backend(AWS/Python). J\'ai également pu implémenter avec un autre développeur la totalité ',
    'site commercial',
    ' de Danil avec Svelte Typescript.',
  ],
  contentLink: 'https://danil.io',
  tasks: [{
    primary: 'Danil - Frontend',
    secondary: 'Réalisation de features et de fixes, tests E2E et unitaires',
    icon: <Web sx={taskItemIconStyle} />,
  }, {
    primary: 'Danil - Backend',
    secondary: 'Réalisation de features et de fixes, tests unitaires',
    icon: <Storage sx={taskItemIconStyle} />,
  }, {
    primary: 'Danil - Site commercial',
    secondary: 'Réalisation de l\'architecture et des fonctionnalités, gestion du projet (Git, ...)',
    icon: <ShoppingCartCheckout sx={taskItemIconStyle} />,
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
    icon: <GitHub sx={taskItemIconStyle} />,
  }, {
    primary: 'Conception de l\'application',
    secondary: 'Expérience utilisateur, Ajout de fonctionnalités',
    icon: <Psychology sx={taskItemIconStyle} />,
  }, {
    primary: 'Implémentation de l\'application',
    secondary: 'Réalisation des fonctionnalités et des fixes',
    icon: <Code sx={taskItemIconStyle} />,
  }],
}];

function ExperienceProjectSection(): JSX.Element {
  return (
    <Box sx={mainContainerStyle}>
      <Typography
        variant="h2"
        sx={mainTitleStyle}
      >
        Expériences et Projets
      </Typography>
      <Box sx={experiencesContainerStyle}>
        {
          experiences.map((experience) => (
            <Box sx={singleExperienceContainerStyle} key={experience.title}>
              <Link
                href={experience.titleLink}
                variant="h4"
                sx={experienceTitleLinkStyle}
              >
                {experience.title}
              </Link>
              <Typography sx={experienceContentStyle}>
                {/* eslint-disable-next-line max-len */}
                {experience.content[0]}
                {' '}
                <a
                  href={experience.contentLink}
                  style={experienceContentLinkStyle}
                >
                  {experience.content[1]}
                </a>
                {experience.content[2]}
              </Typography>
              <Typography
                variant="h6"
                sx={experienceTaskTitleStyle}
              >
                Tâches réalisées :
              </Typography>
              <List sx={experienceTaskListStyle}>
                {experience.tasks.map((task) => (
                  <ListItem key={task.primary}>
                    <ListItemIcon>
                      {task.icon}
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={experienceTaskPrimaryStyle}
                      secondaryTypographyProps={experienceTaskSecondaryStyle}
                      primary={task.primary}
                      secondary={task.secondary}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))
        }
      </Box>
    </Box>
  );
}

export default ExperienceProjectSection;
