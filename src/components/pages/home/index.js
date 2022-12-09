import React, { useEffect, useState } from 'react';
import { Box, Container, SvgIcon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCoins, getCoinsStatus } from 'redux/coins/selector';
import { getCoinsWithGlobalAveragePrice } from 'redux/coins/thunk';

import { currencies } from 'components/templates/home/data';
import { CurrenciesChipGroup } from 'components/molecules/CurrenciesChipGroup';
import { ReactComponent as ScopeSvg } from 'assets/scope-bro.svg';
import { CoinCards } from 'components/organisms/CoinCards';
import { STATUS } from 'api';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState(currencies.EUR);
  const [selectedCoin, setSelectedCoin] = useState();
  const coins = useSelector(getCoins);
  const coinsStatus = useSelector(getCoinsStatus);

  useEffect(() => {
    dispatch(getCoinsWithGlobalAveragePrice({ currency: selectedCurrency }));
  }, [selectedCurrency]);

  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
    return navigate(`/CoinDetail/${selectedCoin.id}`);
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
        currency={selectedCurrency}
        onClick={handleSelectCurrency}
      />
      <CoinCards
        data={coins}
        isLoading={
          coinsStatus === STATUS.LOADING || coinsStatus === STATUS.IDLE
        }
        currency={selectedCurrency}
        onClick={handleSelectCoin}
      />
    </Container>
  );
};
