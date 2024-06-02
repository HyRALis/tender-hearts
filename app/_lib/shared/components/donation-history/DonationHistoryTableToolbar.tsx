import { Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { alpha } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

export interface DonationHistoryTableToolbarProps {
  numSelected: number;
}

export const DonationHistoryTableToolbar: FC<
  DonationHistoryTableToolbarProps
> = ({ numSelected }) => {
  const t = useTranslations('Shared');

  return (
    <Toolbar
      sx={{
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
    </Toolbar>
  );
};
