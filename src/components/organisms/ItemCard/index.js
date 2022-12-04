import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';


export const ItemCard = ({ title, value, color = 'text.secondary' }) => {
  return (
    <Grid item>
      <Card sx={{ display: 'inline-flex', flex: 1, flexDirection: 'column' }}>
        <CardContent>
          <Typography variant='caption'>{title}</Typography>
          <Typography variant='body2' color={color} >{value}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};