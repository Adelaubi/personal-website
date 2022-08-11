import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import {
  ownerName,
  buttonLabels,
} from '../assets/data/headerData';
import {
  appBarPosition,
  appBarColor,
  toolbarStyle,
  ownerNameVariant,
  ownerNameStyle,
  buttonColor,
  buttonStyle,
} from '../styles/headerStyles';

function Header(): JSX.Element {
  return (
    <AppBar
      position={appBarPosition}
      color={appBarColor}
    >
      <Toolbar sx={toolbarStyle}>
        <Typography
          variant={ownerNameVariant}
          sx={ownerNameStyle}
        >
          {ownerName}
        </Typography>
        {buttonLabels.map((buttonLabel) => (
          <Button
            color={buttonColor}
            sx={buttonStyle}
          >
            {buttonLabel}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
