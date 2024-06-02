import { TablePagination, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { alpha } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

export interface DonationHistoryTableToolbarProps {
  numSelected: number;
  paginationProps: {
    count: number;
    rowsPerPage: number;
    page: number;
    setPage: (value: React.SetStateAction<number>) => void;
    setRowsPerPage: (value: React.SetStateAction<number>) => void;
  };
}

export const DonationHistoryTableToolbar: FC<
  DonationHistoryTableToolbarProps
> = ({
  numSelected,
  paginationProps: { setPage, setRowsPerPage, ...paginationProps },
}) => {
  const t = useTranslations('Shared');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          {t('donations')}
        </Typography>
      )}

      <TablePagination
        sx={{ flex: '1 1 100%' }}
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        {...paginationProps}
      />
    </Toolbar>
  );
};
