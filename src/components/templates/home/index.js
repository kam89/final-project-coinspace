import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinsWithGlobalAveragePrice } from 'redux/coins/thunk';
import { getCoins } from 'redux/coins/selector';



export const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector(getCoins);

  useEffect(() => {
    if (coins?.length > 0) return;
    dispatch(getCoinsWithGlobalAveragePrice());
  }, []);

  return (
    <Container>
      {coins.map((item, index) => {
        return (
          <Typography>{item?.name}</Typography>
        );
      })}
    </Container>
  );
};