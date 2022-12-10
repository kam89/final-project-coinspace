import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsById, getNewsStatus } from 'redux/coins/selector';
import { getNewsWithDate } from 'redux/coins/thunk';

export const News = ({ id }) => {
  const dispatch = useDispatch();
  const news = useSelector(getNewsById(id));
  console.log(news);
  const status = useSelector(getNewsStatus);

  const date = new Date();
  const today = date.getTime();
  const oneMonthfromToday = date.setMonth(date.getMonth() - 1);

  useEffect(() => {
    dispatch(getNewsWithDate({ fromDate: today, toDate: oneMonthfromToday }));
  }, []);

  return (
    <Box>
      <Typography variant="h5">News</Typography>
      <Grid container spacing={2} columns={5}>
        {news?.map((item, index) => (
          <Grid item xs={1}>
            <Card key={index} sx={{ maxWidth: 350, height: '100%' }}>
              <CardActionArea sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  src={item.imgURL}
                  height="200"
                  width="200"
                />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
