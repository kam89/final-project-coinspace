import React, { useEffect, useState, useRef } from 'react';
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
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { getCoinsWithGlobalAveragePrice } from 'redux/coins/thunk';
import { getCoins } from 'redux/coins/selector';
import { Twitter } from '@mui/icons-material';

import { coins, currencies, ranks, ranksColor } from './data';
import { CoinCard } from 'components/molecules/CoinCard';
import { formatAmount } from 'function';
import { PriceChanges } from 'components/molecules/PriceChanges';
import { CurrenciesChipGroup } from 'components/molecules/CurrenciesChipGroup';

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

  const handleOpenWebsite = (url) => {
    console.log(url);
  };

  const displayExchangeName = (value) => {
    const domain = new URL(value);
    return domain.hostname;
  };

  const availableSupplyPercentage = Math.floor(
    (selectedCoin?.availableSupply / selectedCoin?.totalSupply) * 100
  );

  return (
    <Container sx={{ marginTop: 1, marginBottom: 6 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 10 }}>
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
      {selectedCoin && (
        <Paper sx={{ padding: 5 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: bigScreen ? 'row' : 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 2,
            }}>
            <Box
              component="img"
              src={selectedCoin.icon}
              sx={{ width: 80, height: 80 }}
            />
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                marginLeft: 1,
              }}>
              <Typography variant="h6">{selectedCoin.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedCoin.symbol}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: 1,
                alignItems: 'center',
              }}>
              <Typography variant="body1">
                {formatAmount(selectedCurrency, selectedCoin.price)}
              </Typography>
              <Stack
                direction={bigScreen ? 'row' : 'column'}
                spacing={1}
                alignItems="center">
                <PriceChanges value={selectedCoin.priceChange1h} type="1h" />
                <PriceChanges value={selectedCoin.priceChange1d} type="1d" />
                <PriceChanges value={selectedCoin.priceChange1w} type="1w" />
              </Stack>
            </Box>
            <Avatar
              sx={{
                backgroundColor: ranksColor[selectedCoin.rank],
                alignSelf: 'flex-start',
              }}>
              {ranks[selectedCoin.rank]}
            </Avatar>
          </Box>
          <Divider variant="middle" />

          <Grid
            container
            columns={{ xs: 1, sm: 2, md: 3, lg: 3 }}
            rowSpacing={1}
            columnSpacing={1}
            direction={'row'}
            sx={{ marginTop: 1 }}>
            <Grid item xs={1}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="caption">Volume</Typography>
                  <Typography variant="body2">{selectedCoin.volume}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={1}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="caption">
                    Market Capitalization
                  </Typography>
                  <Typography variant="body2">
                    {formatAmount(selectedCurrency, selectedCoin.marketCap)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={1}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ marginTop: 1 }}>
                    <Box
                      sx={{
                        flexDirection: bigScreen ? 'row' : 'column',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Typography variant="caption">Available</Typography>
                      <Typography variant="caption">
                        {selectedCoin.availableSupply}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="buffer"
                      value={availableSupplyPercentage}
                      valueBuffer={100}
                    />
                    <Box
                      sx={{
                        flexDirection: bigScreen ? 'row' : 'column',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Typography variant="caption">Total</Typography>
                      <Typography variant="caption">
                        {selectedCoin.totalSupply}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography variant="caption">
                    Websites & Explorers
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ flexWrap: 'wrap', gap: 0.5, marginTop: 1 }}>
                    <Chip
                      color="info"
                      variant="filled"
                      label={'Website'}
                      onClick={() => handleOpenWebsite(selectedCoin.websiteUrl)}
                    />
                    <Chip
                      color="info"
                      variant="filled"
                      label={'Twitter'}
                      icon={<Twitter fontSize="small" />}
                      onClick={() => handleOpenWebsite(selectedCoin.twitterUrl)}
                    />
                    {selectedCoin.exp.map((exp, index) => (
                      <Chip
                        color="info"
                        variant="filled"
                        label={displayExchangeName(exp)}
                        onClick={() => handleOpenWebsite(exp)}
                        key={index}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
};
