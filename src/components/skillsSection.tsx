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
  mainTitle,
} from '../assets/data/skillsSectionData';
import ColorPalette from '../styles/colorPalette';

const sectionTitle: string = 'Skills';

function skillsSection(): JSX.Element {
  return (
    <Fade
      in
      timeout={fadeInDuration}
    >
      <Box sx={sectionContainerStyle} id={sectionTitle}>
        <Box sx={mainContainerStyle}>
          <Typography
            variant={titleVariant.main}
            sx={mainTitleStyle}
          >
            {mainTitle}
          </Typography>
          {
            skills.map((skillSection) => (
              <Box key={skillSection.title}>
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
                    <Box key={skill.name}>
                      <Typography
                        variant={titleVariant.skill}
                        sx={[skillTitleStyle,
                          {
                            color: skill.color === 'primary'
                              ? ColorPalette.red
                              : ColorPalette.pink,
                          }]}
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
                key={languageSkillsSection[0].value}
              >
                {languageSkillsSection.map((languageSkill) => (
                  <Box key={languageSkill.name}>
                    <Typography
                      variant={titleVariant.skill}
                      sx={[
                        skillTitleStyle,
                        {
                          color:
                            languageSkill.color === 'primary'
                              ? ColorPalette.red
                              : ColorPalette.pink,
                        }]}
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
