import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Stack,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { formatAmount } from 'function';
import { getMarket } from 'redux/coins/selector';
import { getCurrency, getCurrencyByName } from 'redux/settings/selector';
import { getMarkets } from 'redux/coins/thunk';

export const MarketTable = ({ id }) => {
  const dispatch = useDispatch();
  const currency = useSelector(getCurrency);
  const currencyDetail = useSelector(getCurrencyByName(currency));
  const market = useSelector(getMarket);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getMarkets({ id }));
  }, []);

  if (market?.length === 0) return null;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <Box>
      <Typography variant="h6">Markets</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Exchange</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Pair</TableCell>
              <TableCell>Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {market.map((item, index) => {
              if (index > page * rowsPerPage - 1) return null;
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.exchange}</TableCell>
                  <TableCell>
                    {formatAmount(
                      currencyDetail,
                      item.price * currencyDetail.rate
                    )}
                  </TableCell>
                  <TableCell>{item.pair}</TableCell>
                  <TableCell>{item.volume}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        alignItems={'flex-end'}
        alignContent={'center'}
        sx={{ marginTop: 2 }}>
        <TablePagination
          count={market.length / rowsPerPage}
          page={page}
          shape="rounded"
          variant="outlined"
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>
    </Box>
  );
};
