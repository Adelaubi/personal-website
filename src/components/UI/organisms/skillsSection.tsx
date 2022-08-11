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
import {
  languageSkillType,
  skillType,
} from '../../../types/skillsSectionTypes';

const fadeInDuration = 6000;

const skills: Array<skillType> = [{
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
}];

const languageSkills: languageSkillType = {
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
};

function skillsSection(): JSX.Element {
  return (
    <Fade
      in
      timeout={fadeInDuration}
    >
      <Box sx={sectionContainerStyle}>
        <Box sx={mainContainerStyle}>
          <Typography
            variant="h2"
            sx={mainTitleStyle}
          >
            Compétences
          </Typography>
          {
            skills.map((skillSection) => (
              <Box>
                {skillSection.title && (
                  <Typography
                    variant="h4"
                    sx={skillSectionTitleStyle}
                  >
                    {skillSection.title}
                  </Typography>
                )}
                <Box sx={generalFrameworkSkillsContainerStyles}>
                  {skillSection.content.map((skill) => (
                    <Box>
                      <Typography
                        variant="h6"
                        sx={skillTitleStyle}
                      >
                        {skill.name}
                      </Typography>
                      <LinearProgress
                        variant="buffer"
                        value={skill.value}
                        valueBuffer={0}
                        color={skill.color}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            ))
          }
          <Typography
            variant="h4"
            sx={skillSectionTitleStyle}
          >
            {languageSkills.title}
          </Typography>
          <Box
            sx={languageSkillsContainerStyle}
          >
            {languageSkills.content.map((languageSkillsSection) => (
              <Box
                sx={languageSkillsColumnStyle}
              >
                {languageSkillsSection.map((languageSkill) => (
                  <Box>
                    <Typography
                      variant="h6"
                      sx={skillTitleStyle}
                    >
                      {languageSkill.name}
                    </Typography>
                    <LinearProgress
                      variant="buffer"
                      value={languageSkill.value}
                      valueBuffer={0}
                      color={languageSkill.color}
                      sx={languageSkillLinearProgressStyle}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Typography sx={detailsStyle}>
            *Relatives à mon expérience maximale avec React Typescript
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}

export default skillsSection;
