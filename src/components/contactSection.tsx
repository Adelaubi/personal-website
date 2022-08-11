import React from 'react';
import {
  Box,
  Link,
} from '@mui/material';
import {
  mainContainerStyle,
  linksContainerStyle,
  linkStyle,
  linkTitleVariant,
} from '../styles/contactSectionStyles';
import {
  links,
} from '../assets/data/contactSectionData';

function ContactSection(): JSX.Element {
  return (
    <Box sx={mainContainerStyle}>
      <Box sx={linksContainerStyle}>
        {
          links.map((link) => (
            <Link
              href={link.src}
              variant={linkTitleVariant}
              sx={linkStyle}
            >
              {link.icon}
            </Link>
          ))
        }
      </Box>
    </Box>
  );
}

export default ContactSection;
