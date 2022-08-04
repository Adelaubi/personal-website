import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ButtonAppBar(): JSX.Element {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ height: '10vh' }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Augustin de Laubier
          </Typography>
          <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Présentation</Button>
          <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Projets</Button>
          <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Compétences</Button>
          <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Liens et Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
