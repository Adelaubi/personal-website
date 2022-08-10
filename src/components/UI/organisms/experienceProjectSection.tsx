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
    icon: <Web sx={{ color: 'white' }} />,
  }, {
    primary: 'Danil - Backend',
    secondary: 'Réalisation de features et de fixes, tests unitaires',
    icon: <Storage sx={{ color: 'white' }} />,
  }, {
    primary: 'Danil - Site commercial',
    secondary: 'Réalisation de l\'architecture et des fonctionnalités, gestion du projet (Git, ...)',
    icon: <ShoppingCartCheckout sx={{ color: 'white' }} />,
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
    icon: <GitHub sx={{ color: 'white' }} />,
  }, {
    primary: 'Conception de l\'application',
    secondary: 'Expérience utilisateur, Ajout de fonctionnalités',
    icon: <Psychology sx={{ color: 'white' }} />,
  }, {
    primary: 'Implémentation de l\'application',
    secondary: 'Réalisation des fonctionnalités et des fixes',
    icon: <Code sx={{ color: 'white' }} />,
  }],
}];

function ExperienceProjectSection(): JSX.Element {
  return (
    <Box sx={{
      height: '85vh',
      width: '100vw',
      backgroundColor: 'black',
      paddingTop: '5vh',
    }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Avenir',
          color: 'white',
          marginLeft: '5vh',
        }}
      >
        Expériences et Projets
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '3vh',
      }}
      >
        {
          experiences.map((experience) => (
            <Box sx={{
              flexDirection: 'column',
              width: '50vw',
            }}
            >
              <Link
                href={experience.titleLink}
                variant="h4"
                sx={{
                  fontFamily: 'Avenir',
                  color: 'white',
                  marginLeft: '6vh',
                }}
              >
                {experience.title}
              </Link>
              <Typography sx={{
                fontFamily: 'Avenir',
                color: 'white',
                marginLeft: '6vh',
                marginTop: '2vh',
              }}
              >
                {/* eslint-disable-next-line max-len */}
                {experience.content[0]}
                {' '}
                <a
                  href={experience.contentLink}
                  style={{
                    color: 'gray',
                  }}
                >
                  {experience.content[1]}
                </a>
                {experience.content[2]}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Avenir',
                  color: 'white',
                  marginLeft: '6vh',
                  marginTop: '2vh',
                }}
              >
                Tâches réalisées :
              </Typography>
              <List sx={{
                marginLeft: '7vh',
              }}
              >
                {experience.tasks.map((task) => (
                  <ListItem>
                    <ListItemIcon>
                      {task.icon}
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ fontFamily: 'Avenir', color: 'white' }}
                      secondaryTypographyProps={{ fontFamily: 'Avenir', color: 'gray' }}
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
