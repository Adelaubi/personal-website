import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ButtonAppBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Augustin de Laubier
          </Typography>
          <Button color="inherit">Présentation</Button>
          <Button color="inherit">Projets</Button>
          <Button color="inherit">Compétences</Button>
          <Button color="inherit">Liens et Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
