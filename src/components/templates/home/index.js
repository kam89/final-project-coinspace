import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Link,
  Paper,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { getCoinsWithGlobalAveragePrice } from 'redux/coins/thunk';
import { getCoins } from 'redux/coins/selector';

import { coins, currencies } from './data';
import { CoinCard } from 'components/molecules/CoinCard';
import { CurrenciesChipGroup } from 'components/molecules/CurrenciesChipGroup';
import { ReactComponent as ScopeSvg } from 'assets/scope-bro.svg';
import { CoinDetailCard } from 'components/organisms/CoinDetailCard';

export const Home = () => {
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies.EUR);
  const [selectedCoin, setSelectedCoin] = useState();

  useEffect(() => {
    // to call api for first time
  }, [selectedCurrency, selectedCoin]);

  const handleSelectCoin = (coin) => {
    if (selectedCoin?.id === coin.id) return;
    setSelectedCoin(coin);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), [1000]);
  };

  const handleSelectCurrency = (value) => {
    if (selectedCurrency === value) return;
    setSelectedCurrency(value);
  };

  return (
    <Container sx={{ marginTop: 1, marginBottom: 6 }}>
      <Box
        sx={{
          height: 300,
          textAlign: 'center',
          marginBottom: 10,
        }}>
        <Box>
          <SvgIcon
            component={ScopeSvg}
            inheritViewBox
            sx={{ width: 'auto', height: 250 }}
          />
        </Box>
        <Typography variant="h3">Hello Beginner!</Typography>
        <Typography variant="body1">
          Welcome. You can start your journey from here!
        </Typography>
      </Box>

      <Typography variant="h4">Top 5 Coins</Typography>
      <CurrenciesChipGroup
        selected={selectedCurrency}
        onClick={handleSelectCurrency}
      />
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
            currency={selectedCurrency}
            onClick={handleSelectCoin}
          />
        ))}
      </Stack>

      <CoinDetailCard data={selectedCoin} currency={selectedCurrency} />
    </Container>
  );
};
