import React, { useEffect, useState } from 'react';
import { Stack, Chip, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { famousCurrencies } from 'components/templates/home/data';
import { getAllCurrencies } from 'redux/settings/selector';

export const CurrenciesChipGroup = ({ currency, onClick }) => {
  const allCurrencies = useSelector(getAllCurrencies);
  const [currencyStack, setCurrencyStack] = useState([]);

  useEffect(() => {
    if (allCurrencies.length === 0) return;
    getCurrencyDetail();
  }, [allCurrencies]);

  const getCurrencyDetail = () => {
    const newStack = allCurrencies.filter(
      (item) => item.name === famousCurrencies[item.name]
    );
    setCurrencyStack(newStack);
  };

  return (
    <Stack alignItems={'flex-end'}>
      <Stack direction="row" spacing={1}>
        {currencyStack?.map((item, index) => (
          <Chip
            variant="filled"
            color={item?.name === currency ? 'primary' : 'secondary'}
            key={index}
            label={item?.name}
            avatar={<Avatar alt={item?.name} src={item?.imageUrl} />}
            onClick={() => onClick(item?.name)}
          />
        ))}
      </Stack>
    </Stack>
  );
};
