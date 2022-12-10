import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';

import { formatAmount } from 'function';
import { selectedCoin } from './data';
import { famousCurrencies } from '../home/data';

import { CoinDetailCard } from 'components/organisms/CoinDetailCard';
import { HistoricalPriceChart } from 'components/organisms/HistoricalPriceChart';

export const CoinDetail = ({}) => {
  const currency = famousCurrencies.USD;
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: 2 }}>
      <Button startIcon={<ArrowBackIosNew />} onClick={() => navigate('/')}>
        Go Back
      </Button>
      <CoinDetailCard data={selectedCoin} />
      <HistoricalPriceChart id={id} />
      <Box>
        <Typography variant="h6">News</Typography>
      </Box>
    </Box>
  );
};
