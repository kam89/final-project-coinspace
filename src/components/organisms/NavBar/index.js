import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';

export const NavBar = ({ appName, description }) => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_3bhqygev.json"
          style={{ height: 100, width: 100 }}
        />
        <Box>
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
            }}>
            {appName}
          </Typography>
          <Typography>{description}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  appName: PropTypes.string.isRequired,
};
