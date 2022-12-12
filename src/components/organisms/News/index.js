import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getNewsById,
  getNewsStatus,
  getOverallNews,
} from 'redux/coins/selector';
import { getNewsWithDate } from 'redux/coins/thunk';
import { Replay } from '@mui/icons-material';

import { STATUS } from 'api';

export const News = ({ id }) => {
  const dispatch = useDispatch();
  const news = useSelector(getNewsById(id));
  const overallNews = useSelector(getOverallNews);
  const status = useSelector(getNewsStatus);

  const date = new Date();
  const today = date.getTime();
  const oneMonthfromToday = date.setMonth(date.getMonth() - 1);

  useEffect(() => {
    dispatch(getNewsWithDate({ fromDate: today, toDate: oneMonthfromToday }));
  }, []);

  const handleOnRetry = () => {
    dispatch(getNewsWithDate({ fromDate: today, toDate: oneMonthfromToday }));
  };

  const handleOnNewsClick = (item) => {
    window.open(item.shareURL, '_blank', 'noopener,noreferrer');
  };

  if (status !== STATUS.SUCCESS)
    return (
      <Box>
        <Typography variant="h5">News</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 5,
            margin: 5,
          }}>
          <Button
            variant="outlined"
            startIcon={<Replay />}
            onClick={handleOnRetry}>
            Retry
          </Button>
        </Box>
      </Box>
    );

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h5">News</Typography>
      <Grid container spacing={2} columns={2}>
        <Grid item xs={1}>
          <List sx={{ width: '100%' }}>
            {news.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton onClick={() => handleOnNewsClick(item)}>
                  <ListItemText
                    primary={item.title}
                    secondary={
                      <Box
                        sx={{
                          display: 'inline-flex',
                          justifyContent: 'space-around',
                        }}>
                        <Typography
                          sx={{ marginRight: 2 }}
                          component="span"
                          variant="caption"
                          color="text.secondary">
                          {new Date(item.feedDate).toLocaleString()}
                        </Typography>
                        {item.coins.map((item, index) => (
                          <Typography
                            key={index}
                            sx={{ marginRight: 1 }}
                            component="span"
                            variant="body2"
                            color="secondary.main">
                            #{item.coinNameKeyWords}
                          </Typography>
                        ))}
                      </Box>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={1}>
          <List sx={{ width: '100%' }}>
            {overallNews.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton onClick={() => handleOnNewsClick(item)}>
                  <ListItemText
                    primary={item.title}
                    secondary={
                      <Box
                        sx={{
                          display: 'inline-flex',
                          justifyContent: 'space-around',
                        }}>
                        <Typography
                          sx={{ marginRight: 2 }}
                          component="span"
                          variant="caption"
                          color="text.secondary">
                          {new Date(item.feedDate).toLocaleString()}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
