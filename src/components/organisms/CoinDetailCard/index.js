import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Avatar,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Twitter } from '@mui/icons-material';

import { PriceChanges } from 'components/molecules/PriceChanges';
import { ranksColor, ranks } from 'components/templates/home/data';
import { formatAmount } from 'function';

import { getCurrency, getCurrencyByName } from 'redux/settings/selector';

export const CoinDetailCard = ({ data = {} }) => {
  const theme = useTheme();
  const currency = useSelector(getCurrency);
  const currencyDetail = useSelector(getCurrencyByName(currency));
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  if (Object.keys(data).length === 0) return null;

  const {
    id,
    icon,
    name,
    symbol,
    price,
    priceChange1h,
    priceChange1d,
    priceChange1w,
    rank,
    volume,
    marketCap,
    availableSupply,
    totalSupply,
    websiteUrl,
    twitterUrl,
    exp,
  } = data;

  const getDisplayNameFromURL = (value) => {
    const domain = new URL(value);
    return domain.hostname;
  };

  const handleOpenWebsite = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const availableSupplyPercentage = Math.floor(
    (availableSupply / totalSupply) * 100
  );

  return (
    <Box sx={{ padding: 5 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: bigScreen ? 'row' : 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 2,
        }}>
        <Box component="img" src={icon} sx={{ width: 80, height: 80 }} />
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            marginLeft: 1,
          }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {symbol}
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
            {formatAmount(currencyDetail, price)}
          </Typography>
          <Stack
            direction={bigScreen ? 'row' : 'column'}
            spacing={1}
            alignItems="center">
            <PriceChanges value={priceChange1h} type="1h" />
            <PriceChanges value={priceChange1d} type="1d" />
            <PriceChanges value={priceChange1w} type="1w" />
          </Stack>
        </Box>
        <Avatar
          sx={{
            backgroundColor: ranksColor[rank],
            alignSelf: 'flex-start',
          }}>
          {ranks[rank]}
        </Avatar>
      </Box>

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
              <Typography variant="body2">{volume}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="caption">Market Capitalization</Typography>
              <Typography variant="body2">
                {formatAmount(currencyDetail, marketCap)}
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
                  <Typography variant="caption">{availableSupply}</Typography>
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
                  <Typography variant="caption">{totalSupply}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption">Websites & Explorers</Typography>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ flexWrap: 'wrap', gap: 0.5, marginTop: 1 }}>
            <Chip
              color="info"
              variant="filled"
              label={'Website'}
              onClick={() => handleOpenWebsite(websiteUrl)}
            />
            <Chip
              color="info"
              variant="filled"
              label={'Twitter'}
              icon={<Twitter fontSize="small" />}
              onClick={() => handleOpenWebsite(twitterUrl)}
            />
            {exp?.map((url, index) => (
              <Chip
                color="info"
                variant="filled"
                label={getDisplayNameFromURL(url)}
                onClick={() => handleOpenWebsite(url)}
                key={index}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
