import React, { useEffect, useState, useRef } from 'react';
import { Box, Container, SvgIcon, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCoins, getCoinsStatus } from 'redux/coins/selector';
import { getCoinsWithGlobalAveragePrice } from 'redux/coins/thunk';

import { currencies } from 'components/templates/home/data';
import { CurrenciesChipGroup } from 'components/molecules/CurrenciesChipGroup';
import { ReactComponent as ScopeSvg } from 'assets/scope-bro.svg';
import { CoinDetailCard } from 'components/organisms/CoinDetailCard';
import { CoinCards } from 'components/organisms/CoinCards';
import { STATUS } from 'api';

export const Home = () => {
  const dispatch = useDispatch();
  const CoinDetailCardRef = useRef();
  // const [isLoading, setIsLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies.EUR);
  const [selectedCoin, setSelectedCoin] = useState();
  const coins = useSelector(getCoins);
  const coinsStatus = useSelector(getCoinsStatus);

  useEffect(() => {
    dispatch(getCoinsWithGlobalAveragePrice({ currency: selectedCurrency }));
  }, [selectedCurrency]);

  const handleSelectCoin = (coin) => {
    if (selectedCoin?.id === coin.id) return;
    setSelectedCoin(coin);
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 400) return;
    setTimeout(
      () =>
        CoinDetailCardRef.current.scrollIntoView(false, { behavior: 'smooth' }),
      [100]
    );
    // setIsLoading(true);
    // setTimeout(() => setIsLoading(false), [1000]);
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
      <CoinDetailCard data={selectedCoin} currency={selectedCurrency} />

      <div ref={CoinDetailCardRef} />
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};
