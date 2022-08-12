import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
} from '@mui/material';
import {
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
  titleVariant,
} from '../styles/experienceProjectSectionStyles';
import {
  fadeInDuration,
  experiences,
  mainTitle,
  taskTitle,
} from '../assets/data/experienceProjectSectionData';

const sectionTitle: string = 'Expériences';

function ExperienceProjectSection(): JSX.Element {
  return (
    <Fade
      in
      timeout={fadeInDuration}
    >
      <Box sx={mainContainerStyle} id={sectionTitle}>
        <Typography
          variant={titleVariant.main}
          sx={mainTitleStyle}
        >
          {mainTitle}
        </Typography>
        <Box sx={experiencesContainerStyle}>
          {
            experiences.map((experience) => (
              <Box sx={singleExperienceContainerStyle} key={experience.title}>
                <Link
                  href={experience.titleLink}
                  variant={titleVariant.section}
                  sx={experienceTitleLinkStyle}
                >
                  {experience.title}
                </Link>
                <Typography sx={experienceContentStyle}>
                  {experience.content[0]}
                  <a
                    href={experience.contentLink}
                    style={experienceContentLinkStyle}
                  >
                    {experience.content[1]}
                  </a>
                  {experience.content[2]}
                </Typography>
                <Typography
                  variant={titleVariant.section}
                  sx={experienceTaskTitleStyle}
                >
                  {taskTitle}
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
    </Fade>
  );
}

export default ExperienceProjectSection;
