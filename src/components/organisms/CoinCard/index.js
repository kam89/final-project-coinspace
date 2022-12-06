import React from 'react';
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Player } from "@lottiefiles/react-lottie-player";

import { lottieRanks, ranks, ranksColor } from 'components/templates/home/data';
import { formatAmount } from 'function';

export const CoinCard = ({ item, index, currency, onClick }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <Box sx={{ width: 'auto', alignItems: 'center', justifyContent: 'center', display: 'flex', top: 15, position: 'relative', zIndex: 1 }}>
        <Box
          component='img'
          src={item.icon}
          sx={{ width: 40, zIndex: 2, position: 'absolute', bottom: 0, }}
        />
      </Box>
      <Card sx={{ minWidth: 240 }} key={index}>
        <CardActionArea onClick={() => onClick(item)}>
          <CardMedia component='picture'>
            <Player
              autoplay
              loop
              src={lottieRanks[item.rank]}
              style={{ height: 'auto', width: 250 }}
            />
          </CardMedia>
          <CardContent>
            <Box sx={{ flexDirection: 'row', display: 'infline-flex', alignItems: 'center', justifyContent: 'spce-between' }}>
              <Box sx={{ flexDirection: 'row', display: 'inline-flex', alignItems: 'center' }}>
                <Typography variant='h5' component='div'>{item.name}</Typography>
                <Typography variant='body1' color='text.secondary' sx={{ marginLeft: 1 }}>({item.symbol})</Typography>
              </Box>
              <Avatar sx={{ backgroundColor: ranksColor[item.rank], position: 'relative', right: -10, top: -30 }}>{ranks[item.rank]}</Avatar>
            </Box>
            <Box sx={{ flexDirection: 'column' }}>
              <Typography variant='caption'>Market Cap.</Typography>
              <Typography variant='body2' color='text.secondary'>{formatAmount(currency, item.marketCap)}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};