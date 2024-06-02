import { TDonationTableRowData, TOrder } from '@/app/_lib/types/shared';
import React, { FC } from 'react';
import { useGenerateTableHeads } from '../../hooks/useGenerateTableHeads';
import { Box, Checkbox, TableHead, TableRow } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { COLORS } from '../../utils/consts';
import {
  StyledTableHeadCell,
  StyledTableHeadTableSortLabel,
} from '../../utils/modified-components/table';

export interface DonationHistoryTableHeadProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TDonationTableRowData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: TOrder;
  orderBy: string;
  rowCount: number;
}

export const DonationHistoryTableHead: FC<DonationHistoryTableHeadProps> = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}) => {
  const headCells = useGenerateTableHeads();

  const createSortHandler =
    (property: keyof TDonationTableRowData) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: COLORS.PRIMARY_LIGHT,
        }}
      >
        <StyledTableHeadCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all donations',
            }}
          />
        </StyledTableHeadCell>
        {headCells.map((headCell) => (
          <StyledTableHeadCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <StyledTableHeadTableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </StyledTableHeadTableSortLabel>
          </StyledTableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );
};