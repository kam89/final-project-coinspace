import PropTypes from 'prop-types';
import { green, grey, red } from '@mui/material/colors';
import { TrendingDown, TrendingUp } from '@mui/icons-material';

export const formatAmount = (currency, value) => {
  return Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: currency.name,
    currencyDisplay: 'code',
  })
    .format(value)
    .replace(currency.name, currency.symbol)
    .trim();
};

formatAmount.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export const renderAmountColor = (value) => {
  if (value === 0) return grey[500];
  if (value > 0) return green[500];
  if (value < 0) return red[500];
};

renderAmountColor.propTypes = {
  value: PropTypes.number.isRequired,
};

export const renderAmountSign = (value) => {
  if (value === 0) return;
  if (value > 0) return <TrendingUp sx={{ color: renderAmountColor(value) }} />;
  if (value < 0)
    return <TrendingDown sx={{ color: renderAmountColor(value) }} />;
};

renderAmountSign.propTypes = {
  value: PropTypes.number.isRequired,
};
