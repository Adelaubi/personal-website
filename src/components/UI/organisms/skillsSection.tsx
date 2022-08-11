import React from 'react';
import {
  Box,
  Typography,
  Fade,
  LinearProgress,
} from '@mui/material';
import {
  sectionContainerStyle,
  mainTitleStyle,
  mainContainerStyle,
  generalFrameworkSkillsContainerStyles,
  skillTitleStyle,
  skillSectionTitleStyle,
  languageSkillsContainerStyle,
  languageSkillsColumnStyle,
  languageSkillLinearProgressStyle,
  detailsStyle,
} from '../../../styles/skillSectionStyles';
// import { skillType } from '../../../types/skillsSectionTypes';

const fadeInDuration = 6000;

/* const skills: Array<skillType> = [{
  title: null,
  content: [{
    name: 'Développement Frontend',
    value: 100,
    color: 'primary',
  }, {
    name: 'Développement Backend',
    value: 40,
    color: 'secondary',
  }],
}, {
  title: 'Frameworks',
  content: [{
    name: 'React',
    value: 100,
    color: 'primary',
  }, {
    name: 'AWS',
    value: 40,
    color: 'secondary',
  }, {
    name: 'Express',
    value: 20,
    color: 'secondary',
  }],
}]; */

/*
{
  title: 'Langages',
  content: [[{
    name: 'TypeScript',
    value: 100,
    color: 'primary',
  }, {
    name: 'Golang',
    value: 40,
    color: 'secondary',
  }], [{
    name: 'Java',
    value: 40,
    color: 'secondary',
  }, {
    name: 'Python',
    value: 40,
    color: 'secondary',
  }]],
}
*/

function skillsSection(): JSX.Element {
  return (
    <Fade
      in
      timeout={fadeInDuration}
    >
      <Box sx={sectionContainerStyle}>
        <Typography
          variant="h2"
          sx={mainTitleStyle}
        >
          Compétences
        </Typography>
        <Box sx={mainContainerStyle}>
          <Box sx={generalFrameworkSkillsContainerStyles}>
            <Typography
              variant="h6"
              sx={skillTitleStyle}
            >
              Développement Frontend
            </Typography>
            <LinearProgress
              variant="buffer"
              value={100}
              valueBuffer={0}
            />
            <Typography
              variant="h6"
              sx={skillTitleStyle}
            >
              Développement Backend
            </Typography>
            <LinearProgress
              variant="buffer"
              value={40}
              valueBuffer={0}
              color="secondary"
            />
          </Box>
          <Typography
            variant="h4"
            sx={skillSectionTitleStyle}
          >
            Framework
          </Typography>
          <Box sx={generalFrameworkSkillsContainerStyles}>
            <Typography
              variant="h6"
              sx={skillTitleStyle}
            >
              React
            </Typography>
            <LinearProgress
              variant="buffer"
              value={100}
              valueBuffer={0}
            />
            <Typography
              variant="h6"
              sx={skillTitleStyle}
            >
              AWS
            </Typography>
            <LinearProgress
              variant="buffer"
              value={40}
              valueBuffer={0}
              color="secondary"
            />
            <Typography
              variant="h6"
              sx={skillTitleStyle}
            >
              Express / Django REST
            </Typography>
            <LinearProgress
              variant="buffer"
              value={15}
              valueBuffer={0}
              color="secondary"
            />
          </Box>
          <Typography
            variant="h4"
            sx={skillSectionTitleStyle}
          >
            Langages
          </Typography>
          <Box
            sx={languageSkillsContainerStyle}
          >
            <Box
              sx={languageSkillsColumnStyle}
            >
              <Typography
                variant="h6"
                sx={skillTitleStyle}
              >
                TypeScript
              </Typography>
              <LinearProgress
                variant="buffer"
                value={100}
                valueBuffer={0}
                sx={languageSkillLinearProgressStyle}
              />
              <Typography
                variant="h6"
                sx={skillTitleStyle}
              >
                Golang
              </Typography>
              <LinearProgress
                variant="buffer"
                value={30}
                valueBuffer={0}
                sx={languageSkillLinearProgressStyle}
                color="secondary"
              />
            </Box>
            <Box
              sx={languageSkillsColumnStyle}
            >
              <Typography
                variant="h6"
                sx={skillTitleStyle}
              >
                Java
              </Typography>
              <LinearProgress
                variant="buffer"
                value={50}
                valueBuffer={0}
                sx={languageSkillLinearProgressStyle}
                color="secondary"
              />
              <Typography
                variant="h6"
                sx={skillTitleStyle}
              >
                C++
              </Typography>
              <LinearProgress
                variant="buffer"
                value={25}
                valueBuffer={0}
                sx={languageSkillLinearProgressStyle}
                color="secondary"
              />
            </Box>
          </Box>
        </Box>
        <Typography sx={detailsStyle}>
          *Relatives à mon expérience maximale avec React Typescript
        </Typography>
      </Box>
    </Fade>
  );
}

export default skillsSection;
