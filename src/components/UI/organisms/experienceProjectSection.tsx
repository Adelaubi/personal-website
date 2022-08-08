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
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import GitHubIcon from '@mui/icons-material/GitHub';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';

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
        marginTop: '5vh',
      }}
      >
        <Box sx={{
          flexDirection: 'column',
          width: '50vw',
        }}
        >
          <Link
            href="https://coddity.com"
            variant="h4"
            sx={{
              fontFamily: 'Avenir',
              color: 'white',
              marginLeft: '6vh',
            }}
          >
            Stage Artisan Web - Coddity
          </Link>
          <Typography sx={{
            fontFamily: 'Avenir',
            color: 'white',
            marginLeft: '6vh',
            marginTop: '2vh',
          }}
          >
            {/* eslint-disable-next-line max-len */}
            Réalisation d&apos;une période de stage de 6 mois en tant que développeur full-stack. J&apos;ai pu travailler sur la plateforme Danil qui permet le monitoring de chatbots au travers de KPIs. Ce travail s&apos;est effectué aussi bien sur le côté Frontend(React Typescript) que Backend(AWS/Python). J&apos;ai également pu implémenter avec un autre développeur la totalité
            {' '}
            <a
              href="https://danil.io"
              style={{
                color: 'gray',
              }}
            >
              site commercial
            </a>
            {' '}
            de Danil avec Svelte Typescript.
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
            <ListItem>
              <ListItemIcon>
                <WebIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontFamily: 'Avenir', color: 'white' }}
                secondaryTypographyProps={{ fontFamily: 'Avenir', color: 'gray' }}
                primary="Danil - Frontend"
                secondary="Réalisation de features et de fixes, tests E2E et unitaires"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorageIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontFamily: 'Avenir', color: 'white' }}
                secondaryTypographyProps={{ fontFamily: 'Avenir', color: 'gray' }}
                primary="Danil - Backend"
                secondary="Réalisation de features et de fixes, tests unitaires"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShoppingCartCheckoutIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontFamily: 'Avenir', color: 'white' }}
                secondaryTypographyProps={{ fontFamily: 'Avenir', color: 'gray' }}
                primary="Danil - Site Commercial"
                secondary="Réalisation de l'architecture et des fonctionnalités, gestion du projet (Git, ...)"
              />
            </ListItem>
          </List>
        </Box>
        <Box sx={{
          flexDirection: 'column',
          width: '50vw',
          marginLeft: '6vh',
        }}
        >
          <Link
            href="https://derives.utc.fr"
            variant="h4"
            sx={{
              fontFamily: 'Avenir',
              color: 'white',
              marginLeft: '6vh',
              marginRight: '2vh',
            }}
          >
            Projet Universitaire - Dérives
          </Link>
          <Typography sx={{
            fontFamily: 'Avenir',
            color: 'white',
            marginLeft: '6vh',
            marginRight: '2vh',
            marginTop: '2vh',
          }}
          >
            {/* eslint-disable-next-line max-len */}
            Réalisation et publication sur Google Play et Apple Store d&apos;une application mobile, dans le cadre d&apos;un enseignement universitaire. Celle-ci consiste en la génération de poèmes en fonction de l&apos;envirronnement de l&apos;utilisateur. Ce projet a été réalisé avec une équipe d&apos;enseignant.e.s et d&apos;étudiant.e.s aussi bien dans sa conception que son implémentation. L&apos;ensemble du code est disponible
            {' '}
            <a
              href="https://github.com/anto2oo/Derives"
              style={{
                color: 'gray',
              }}
            >
              ci-contre
            </a>
            {' '}
            , celui-ci a été réalisé avec React Native Expo, en Javascript.
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
            <ListItem>
              <ListItemIcon>
                <GitHubIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontFamily: 'Avenir', color: 'white' }}
                secondaryTypographyProps={{ fontFamily: 'Avenir', color: 'gray' }}
                primary="Gestion du projet"
                secondary="Maintien du Github, Méthode Agile SCRUM avec Trello "
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PsychologyIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontFamily: 'Avenir', color: 'white' }}
                secondaryTypographyProps={{ fontFamily: 'Avenir', color: 'gray' }}
                primary="Conception de l'application"
                secondary="Expérience utilisateur, Ajout de fonctionnalités"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CodeIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontFamily: 'Avenir', color: 'white' }}
                secondaryTypographyProps={{ fontFamily: 'Avenir', color: 'gray' }}
                primary="Implémentation de l'application"
                secondary="Réalisation des fonctionnalités et des fixes"
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default ExperienceProjectSection;
