import React from 'react';
import { Box, Typography } from '@mui/material';
import { renderAmountSign, renderAmountColor } from 'function';

export const PriceCard = ({ value, type }) => {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <Typography variant='caption'>{type + ': '}</Typography>
      {renderAmountSign(value)}
      <Typography variant='subtitle2' color={renderAmountColor(value)}>{value + '%'}</Typography>
    </Box>
  );
};