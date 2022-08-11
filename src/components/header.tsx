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
          <a href={`#${buttonLabel}`} style={{ textDecoration: 'none' }}>
            <Button
              sx={buttonStyle}
            >
              {buttonLabel}
            </Button>
          </a>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
