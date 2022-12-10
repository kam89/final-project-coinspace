import React, { useEffect, useState } from 'react';
import { Box, Chip, Stack, useTheme } from '@mui/material';
import {
  Area,
  AreaChart,
  Dot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import { formatAmount } from 'function';
import { CustomTooltipRecharts } from 'components/molecules/CustomTooltipRecharts';
import { getCurrency, getCurrencyByName } from 'redux/settings/selector';

import { periods } from 'components/templates/CoinDetail/data';
import { grey } from '@mui/material/colors';
import { getHistoricalGlobalAveragePriceChart } from 'redux/coins/thunk';
import { getHistoryStatus } from 'redux/coins/selector';
import { STATUS } from 'api';

export const HistoricalPriceChart = ({ id }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const currency = useSelector(getCurrency);
  const currencyDetail = useSelector(getCurrencyByName(currency));
  const status = useSelector(getHistoryStatus);

  const [data, setData] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [period, setPeriod] = useState(periods['1m']);

  useEffect(() => {
    getSeriesforCharts();
  }, [period]);

  const getSeriesforCharts = async () => {
    const response = await dispatch(
      getHistoricalGlobalAveragePriceChart({ id, period })
    );
    const { meta, payload } = response;
    if (meta?.requestStatus !== 'fulfilled') return;
    let data = [];
    let min, max;
    const history = payload?.chart;
    history.forEach((item, index) => {
      const { rate } = currencyDetail;
      const newItem = {
        date: item[0],
        price: item[1] * rate,
        btc: item[2],
        eth: item[4],
      };
      data.push(newItem);
      if (index === 0) {
        min = item[1];
        max = item[1];
      }
      if (item[1] < min) min = item[1];
      if (item[1] > max) max = item[1];
    });
    setMin(min);
    setMax(max);
    setData(data);
  };

  const handlePeriodChange = (value) => {
    if (value === period) return;
    setPeriod(value);
  };

  const formatXAxisTick = (value) => {
    const date = new Date(value * 1000);
    const newDateFormatted = date.toISOString().split('T');
    if (period === periods['1d']) return newDateFormatted[1].substring(0, 8);
    return newDateFormatted[0];
  };

  const formatYAxisTick = (value) => {
    return formatAmount(currencyDetail, value);
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
          Low: {formatAmount(currencyDetail, data.value)}
        </text>
      );

    if (data.value === max)
      return (
        <text {...newData} fill="#fff">
          High: {formatAmount(currencyDetail, data.value)}
        </text>
      );
  };

  if (status !== STATUS.SUCCESS) return null;

  return (
    <Box
      sx={{
        height: 500,
        width: theme.breakpoints.values.md,
        marginBottom: 5,
      }}>
      <ResponsiveContainer width={'90%'} height={'90%'}>
        <AreaChart
          key={period + Math.random()}
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
            isAnimationActive={true}
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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'inline-flex',
            marginTop: 1,
            alignItems: 'center',
            backgroundColor: grey['800'],
            padding: 1,
            borderRadius: 2,
          }}>
          <Stack direction={'row'} spacing={1}>
            {Object.values(periods).map((item, index) => (
              <Chip
                variant="filled"
                color={item === period ? 'primary' : 'secondary'}
                key={index}
                label={item.toUpperCase()}
                onClick={() => handlePeriodChange(item)}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
