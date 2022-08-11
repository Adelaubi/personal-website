import React from 'react';
import {
  Box,
  Link,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  AttachEmail,
} from '@mui/icons-material';
import ColorPalette from '../styles/colorPalette';

function ContactSection(): JSX.Element {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '10vh',
      backgroundColor: ColorPalette.yellow,
      justifyContent: 'center',
    }}
    >
      <Box sx={{ marginTop: '4vh', marginLeft: '10vw' }}>
        <Link
          href="https://github.com/Adelaubi"
          variant="h6"
          sx={{
            marginRight: '5vw',
          }}
        >
          <GitHub color="primary" />
        </Link>
        <Link
          href="https://fr.linkedin.com/in/augustin-de-laubier-6835a4209"
          variant="h6"
          sx={{
            marginRight: '5vw',
          }}
        >
          <LinkedIn color="primary" />
        </Link>
        <Link
          href="mailto:delaubier.augustin@gmail.com"
          variant="h6"
          sx={{
            marginRight: '5vw',
          }}
        >
          <AttachEmail color="primary" />
        </Link>
      </Box>
    </Box>
  );
}

export default ContactSection;
