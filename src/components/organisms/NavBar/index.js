import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography
} from '@mui/material';
import { Player } from "@lottiefiles/react-lottie-player";

export const NavBar = ({ appName }) => {
  return (
    <AppBar position='static'>
      <Toolbar disableGutters>
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_3bhqygev.json"
          style={{ height: 100, width: 100 }}
        />
        <Typography
          variant="h6"
          noWrap
          sx={{
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

NavBar.propTypes = {
  appName: PropTypes.string.isRequired
};