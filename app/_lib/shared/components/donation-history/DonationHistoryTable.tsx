'use client';

import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { TDonationTableRowData } from '@/app/_lib/types/shared';
import { DonationsTableRows } from '../../mocks/DonationsTableRows';
import { DonationHistoryTableHead } from './DonationHistoryTableHead';
import { DonationHistoryTableToolbar } from './DonationHistoryTableToolbar';
import { useTranslations } from 'next-intl';
import { BORDER_RADIUS, COLORS } from '../../utils/consts';
import { useSearchParams } from 'next/navigation';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export interface DonationHistoryTableProps {
  tableRows?: TDonationTableRowData[];
}

export const DonationHistoryTable: FC<DonationHistoryTableProps> = ({
  tableRows,
}) => {
  const t = useTranslations('Shared');
  const searchParams = useSearchParams();

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] =
    useState<keyof TDonationTableRowData>('donorName');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState<TDonationTableRowData[]>(
    tableRows || DonationsTableRows
  );

  useEffect(() => {
    const searchParamPage = searchParams.get('donationTablePage');
    const searchParamRowsPerPage = searchParams.get('donationTableRowsPerPage');

    searchParamPage && setPage(Number(searchParamPage));
    searchParamRowsPerPage && setRowsPerPage(Number(searchParamRowsPerPage));
  }, []);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof TDonationTableRowData
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.donorName);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, borderRadius: '0.8rem' }}>
        <DonationHistoryTableToolbar
          numSelected={selected.length}
          paginationProps={{
            count: rows.length,
            rowsPerPage,
            page,
            setPage,
            setRowsPerPage,
          }}
        />
        <TableContainer
          sx={{
            '&:last-child': {
              borderBottomLeftRadius: BORDER_RADIUS,
              borderBottomRightRadius: BORDER_RADIUS,
            },
          }}
        >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size={'medium'}
          >
            <DonationHistoryTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.donorName);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.donorName)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={`${row.donorName}_${row.dateTime}`}
                    selected={isItemSelected}
                    sx={{
                      cursor: 'pointer',
                      borderBottomColor: 'transparent',
                    }}
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox
                        color='primary'
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component='th'
                      id={labelId}
                      scope='row'
                      padding='none'
                    >
                      {row.donorName}
                    </TableCell>
                    <TableCell align='right'>{row.dateTime}</TableCell>
                    <TableCell align='right'>{t(row.paymentMethod)}</TableCell>
                    <TableCell align='right'>{row.donationAmount}</TableCell>
                    <TableCell align='right'>
                      <Paper
                        sx={{
                          borderRadius: '0.8rem',
                          padding: '0.5rem',
                          backgroundColor: `${COLORS.ACCENT}33`,
                        }}
                      >
                        {row.message}
                      </Paper>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};