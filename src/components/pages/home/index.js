import React, { useEffect } from 'react';
import { Box, Container, SvgIcon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCoins, getCoinsStatus } from 'redux/coins/selector';
import { getCoinsWithGlobalAveragePrice } from 'redux/coins/thunk';
import { STATUS } from 'api';

import { CurrenciesChipGroup } from 'components/molecules/CurrenciesChipGroup';
import { CoinCards } from 'components/organisms/CoinCards';
import { ReactComponent as ScopeSvg } from 'assets/scope-bro.svg';

import { getCurrency, getCurrencyByName } from 'redux/settings/selector';
import { updateCurrency } from 'redux/settings/reducer';
import { updateSelectedCoin } from 'redux/coins/reducer';
import { getFiats } from 'redux/settings/thunk';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currency = useSelector(getCurrency);
  const currencyDetail = useSelector(getCurrencyByName(currency));
  const coins = useSelector(getCoins);
  const coinsStatus = useSelector(getCoinsStatus);

  useEffect(() => {
    dispatch(getFiats({}));
  }, []);

  useEffect(() => {
    dispatch(getCoinsWithGlobalAveragePrice({ currency }));
  }, [currency]);

  const handleSelectCoin = (coin) => {
    dispatch(updateSelectedCoin(coin));
    return navigate(`/CoinDetail/${coin.id}`);
  };

  const handleSelectCurrency = (value) => {
    if (currency === value) return;
    dispatch(updateCurrency(value));
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
        currency={currencyDetail}
        onClick={handleSelectCoin}
      />
    </Container>
  );
};
