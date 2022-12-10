import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { getCurrency, getCurrencyByName } from 'redux/settings/selector';
import { formatAmount } from 'function';

export const CustomTooltipRecharts = ({ active, payload, label }) => {
  const theme = useTheme();
  const currency = useSelector(getCurrency);
  const currencyDetail = useSelector(getCurrencyByName(currency));

  if (active && payload && payload.length) {
    const date = new Date(label * 1000);
    const newDateFormatted = date.toISOString().split('T');
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          padding: 2,
        }}>
        <Typography variant="body2">
          {newDateFormatted[0] + ' ' + newDateFormatted[1].substring(0, 5)}
        </Typography>
        <Typography variant="caption">
          {formatAmount(currencyDetail, payload[0].payload.price)}
        </Typography>
      </Box>
    );
  }
  return null;
};
