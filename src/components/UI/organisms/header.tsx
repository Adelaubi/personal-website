import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header(): JSX.Element {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ height: '10vh' }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Avenir' }}>
          Augustin de Laubier
        </Typography>
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' }, fontFamily: 'Avenir' }}>Présentation</Button>
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' }, fontFamily: 'Avenir' }}>Compétences</Button>
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' }, fontFamily: 'Avenir' }}>Expériences et Projets</Button>
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' }, fontFamily: 'Avenir' }}>Liens et Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
