import React from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';

import { selectedCoin } from './data';

import { CoinDetailCard } from 'components/organisms/CoinDetailCard';
import { HistoricalPriceChart } from 'components/organisms/HistoricalPriceChart';
import { MarketTable } from 'components/organisms/MarketTable';
import { News } from 'components/organisms/News';

export const CoinDetail = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: 2 }}>
      <Button startIcon={<ArrowBackIosNew />} onClick={() => navigate('/')}>
        Go Back
      </Button>
      <CoinDetailCard data={selectedCoin} />
      <HistoricalPriceChart id={id} />
      <MarketTable id={id} />
      <News id={id} />
    </Box>
  );
};
