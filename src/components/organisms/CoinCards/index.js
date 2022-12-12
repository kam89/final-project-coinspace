import React from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { CoinCard } from 'components/molecules/CoinCard';

export const CoinCards = ({ data, isLoading, currency, onClick }) => {
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const coins = data.length > 0 ? data : [1, 2, 3, 4, 5];
  return (
    <Stack
      direction="row"
      spacing={2}
      marginTop={2}
      marginBottom={2}
      maxWidth={bigScreen ? 'xl' : 'md'}
      overflow={'auto'}
      padding={2}>
      {coins.map((item, index) => (
        <CoinCard
          item={item}
          index={index}
          key={index}
          currency={currency}
          isLoading={isLoading}
          onClick={onClick}
        />
      ))}
    </Stack>
  );
};
