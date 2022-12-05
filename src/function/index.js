import PropTypes from 'prop-types';
import { green, grey, red } from '@mui/material/colors';

export const formatAmount = (currency, value) => {
  return Intl.NumberFormat('en-us', { style: 'currency', currency: currency }).format(value);
};

formatAmount.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export const renderAmountColor = (value) => {
  if (value === 0) return grey[500];
  if (value > 0) return green[500];
  if (value < 0) return red[500];
};

renderAmountColor.propTypes = {
  value: PropTypes.number.isRequired
};

export const renderAmountSign = (value) => {
  if (value === 0) return;
  if (value > 0) return '+';
  if (value < 0) return '-';
};

renderAmountSign.propTypes = {
  value: PropTypes.number.isRequired
};