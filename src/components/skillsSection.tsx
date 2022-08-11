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
  titleVariant,
  linearProgressVariant,
} from '../styles/skillSectionStyles';
import {
  skills,
  fadeInDuration,
  languageSkills,
  linearProgressBufferValue,
  detailsContent,
} from '../assets/data/skillsSectionData';

function skillsSection(): JSX.Element {
  return (
    <Fade
      in
      timeout={fadeInDuration}
    >
      <Box sx={sectionContainerStyle}>
        <Box sx={mainContainerStyle}>
          <Typography
            variant={titleVariant.main}
            sx={mainTitleStyle}
          >
            Compétences
          </Typography>
          {
            skills.map((skillSection) => (
              <Box>
                {skillSection.title && (
                  <Typography
                    variant={titleVariant.section}
                    sx={skillSectionTitleStyle}
                  >
                    {skillSection.title}
                  </Typography>
                )}
                <Box sx={generalFrameworkSkillsContainerStyles}>
                  {skillSection.content.map((skill) => (
                    <Box>
                      <Typography
                        variant={titleVariant.skill}
                        sx={skillTitleStyle}
                      >
                        {skill.name}
                      </Typography>
                      <LinearProgress
                        variant={linearProgressVariant}
                        value={skill.value}
                        valueBuffer={linearProgressBufferValue}
                        color={skill.color}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            ))
          }
          <Typography
            variant={titleVariant.section}
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
                      variant={titleVariant.skill}
                      sx={skillTitleStyle}
                    >
                      {languageSkill.name}
                    </Typography>
                    <LinearProgress
                      variant={linearProgressVariant}
                      value={languageSkill.value}
                      valueBuffer={linearProgressBufferValue}
                      color={languageSkill.color}
                      sx={languageSkillLinearProgressStyle}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Typography sx={detailsStyle}>
            {detailsContent}
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}

export default skillsSection;
