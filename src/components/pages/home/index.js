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
import { getCurrency } from 'redux/settings/selector';
import { updateSettingsObject } from 'redux/settings/reducer';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currency = useSelector(getCurrency);

  const coins = useSelector(getCoins);
  const coinsStatus = useSelector(getCoinsStatus);

  useEffect(() => {
    dispatch(getCoinsWithGlobalAveragePrice({ currency }));
  }, [currency]);

  const handleSelectCoin = (coin) => {
    return navigate(`/CoinDetail/${coin.id}`);
  };

  const handleSelectCurrency = (value) => {
    if (currency === value) return;
    dispatch(updateSettingsObject({ currency: value }));
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

      <Typography variant="h4">The 5 Elites</Typography>
      <CurrenciesChipGroup currency={currency} onClick={handleSelectCurrency} />
      <CoinCards
        data={coins}
        isLoading={
          coinsStatus === STATUS.LOADING || coinsStatus === STATUS.IDLE
        }
        currency={currency}
        onClick={handleSelectCoin}
      />
    </Container>
  );
};
