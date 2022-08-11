import React from 'react';
import {
  AttachEmail,
  GitHub,
  LinkedIn,
} from '@mui/icons-material';
import { LinkType } from '../../types/contactSectionTypes';

// eslint-disable-next-line import/prefer-default-export
export const links: Array<LinkType> = [{
  src: 'https://github.com/Adelaubi',
  icon: <GitHub color="primary" />,
}, {
  src: 'https://fr.linkedin.com/in/augustin-de-laubier-6835a4209',
  icon: <LinkedIn color="primary" />,
}, {
  src: 'mailto:delaubier.augustin@gmail.com',
  icon: <AttachEmail color="primary" />,
}];
