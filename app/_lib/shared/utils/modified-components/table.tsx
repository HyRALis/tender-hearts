'use client';

import {
  styled,
  TableCell,
  tableCellClasses,
  TableSortLabel,
} from '@mui/material';
import { COLORS } from '../consts';

export const StyledTableHeadCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLORS.PRIMARY_LIGHT,
    color: COLORS.NATURAL,
  },
}));

export const StyledTableHeadTableSortLabel = styled(TableSortLabel)(() => ({
  [`&.Mui-active`]: {
    backgroundColor: COLORS.PRIMARY_LIGHT,
    color: COLORS.NATURAL,
    fontWeight: 'bold',
  },
  ['&.Mui-active .MuiTableSortLabel-icon']: {
    color: COLORS.ACCENT,
  },
}));
