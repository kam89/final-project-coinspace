import React from 'react';
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography
} from '@mui/material';
import { CurrencyBitcoin } from '@mui/icons-material';


export const NavBar = ({ appName }) => {

  return (
    <AppBar position='static'>
      <Toolbar disableGutters>
        <Avatar variant='circular' sx={{ marginRight: 1, marginLeft: 5, transform: 'rotate(25deg)' }}>
          <CurrencyBitcoin />
        </Avatar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            marginRight: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};