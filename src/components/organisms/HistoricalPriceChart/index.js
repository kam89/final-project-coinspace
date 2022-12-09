import React from 'react';
import { Box, useTheme } from '@mui/material';
import {
  Area,
  AreaChart,
  Dot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { formatAmount } from 'function';
import { CustomTooltipRecharts } from 'components/molecules/CustomTooltipRecharts';

export const HistoricalPriceChart = ({ currency, min, max, data }) => {
  const theme = useTheme();

  const formatXAxisTick = (value) => {
    const date = new Date(value * 1000);
    const newDateFormatted = date.toISOString().split('T');
    return newDateFormatted[0];
  };

  const formatYAxisTick = (value) => {
    return formatAmount(currency, value);
  };

  const renderDot = (data) => {
    if (data.value[1] === min || data.value[1] === max) {
      let newData = data;
      newData.r = 10;
      return <Dot {...newData} />;
    }
  };

  const renderLabel = (data) => {
    let newData = { ...data };
    newData.y = newData.y - 12;
    if (data.value === min)
      return (
        <text {...newData} fill="#fff">
          Low: {data.value}
        </text>
      );

    if (data.value === max)
      return (
        <text {...newData} fill="#fff">
          High: {data.value}
        </text>
      );
  };

  return (
    <Box sx={{ height: 500, width: theme.breakpoints.values.md }}>
      <ResponsiveContainer width={'90%'} height={'90%'}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, left: 80, bottom: 0 }}>
          <XAxis
            dataKey="date"
            type="number"
            domain={['dataMin', 'dataMax']}
            interval="preserveStartEnd"
            tickCount={10}
            tickLine={false}
            tickMargin={10}
            tickFormatter={formatXAxisTick}
          />
          <YAxis
            type="number"
            domain={['auto', 'auto']}
            interval="preserveStartEnd"
            minTickGap={10}
            tickLine={false}
            tickMargin={10}
            tickFormatter={formatYAxisTick}
          />
          <Tooltip content={CustomTooltipRecharts} cursor={false} />
          <Area
            type={'natural'}
            dataKey="price"
            stroke={theme.palette.primary.main}
            fill={theme.palette.primary.light}
            fillOpacity={0.5}
            activeDot={{ r: 8 }}
            dot={renderDot}
            label={renderLabel}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
