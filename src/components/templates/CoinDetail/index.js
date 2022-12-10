import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';

import { formatAmount } from 'function';
import { history, periods, selectedCoin, currencyDetail } from './data';
import { famousCurrencies } from '../home/data';

import { CoinDetailCard } from 'components/organisms/CoinDetailCard';
import { HistoricalPriceChart } from 'components/organisms/HistoricalPriceChart';

export const CoinDetail = ({}) => {
  const currency = famousCurrencies.USD;
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [period, setPeriod] = useState(periods['1m']);

  useEffect(() => {
    getSeriesforCharts();
  }, [period]);

  const getSeriesforCharts = () => {
    let data = [];
    let min, max;
    history.map((item, index) => {
      const rawRate = item[2];
      const { rate } = currencyDetail;
      const newItem = {
        date: item[0],
        price: item[1] * rate,
        btc: item[2],
        eth: item[4],
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

  const handlePeriodChange = (value) => {
    if (value === period) return;
    setPeriod(value);
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <Button startIcon={<ArrowBackIosNew />} onClick={() => navigate('/')}>
        Go Back
      </Button>
      <CoinDetailCard data={selectedCoin} />
      <HistoricalPriceChart
        min={min}
        max={max}
        data={data}
        period={period}
        handlePeriodChange={handlePeriodChange}
      />
      <Box>
        <Typography variant="h6">News</Typography>
      </Box>
    </Box>
  );
};
