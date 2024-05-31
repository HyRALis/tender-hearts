import { COLORS } from '@/app/_lib/shared/utils/consts';
import { Paper, PaperTypeMap } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

export const PaperStyled: FC<PaperTypeMap<{}, 'div'> & PropsWithChildren> = ({
  children,
  ...rest
}) => {
  return (
    <Paper
      elevation={4}
      style={{
        backgroundColor: COLORS.PRIMARY_LIGHT,
        color: COLORS.NATURAL,
        padding: '1.2rem',
        borderRadius: '0.8rem',
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
};
