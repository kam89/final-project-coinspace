import React, { useEffect, useState } from 'react';
import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';

import { formatAmount } from 'function';
import { history, periods, selectedCoin } from './data';
import { currencies } from '../home/data';

import { CoinDetailCard } from 'components/organisms/CoinDetailCard';
import { HistoricalPriceChart } from 'components/organisms/HistoricalPriceChart';

export const CoinDetail = ({}) => {
  const currency = currencies.USD;
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [period, setPeriod] = useState(periods['1m']);

  useEffect(() => {
    getSeriesforCharts();
  }, []);

  const getSeriesforCharts = () => {
    let data = [];
    let min, max;
    history.map((item, index) => {
      const newItem = {
        date: item[0],
        price: item[1],
      };
      data.push(newItem);
      if (index === 0) {
        min = item[1];
        max = item[1];
      }
      if (item[1] < min) min = item[1];
      if (item[1] > max) max = item[1];
    });
    setMin(min);
    setMax(max);
    setData(data);
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <Button startIcon={<ArrowBackIosNew />} onClick={() => navigate('/')}>
        Go Back
      </Button>
      <CoinDetailCard data={selectedCoin} currency={currency} />
      <HistoricalPriceChart
        currency={currency}
        min={min}
        max={max}
        data={data}
      />
    </Box>
  );
};
