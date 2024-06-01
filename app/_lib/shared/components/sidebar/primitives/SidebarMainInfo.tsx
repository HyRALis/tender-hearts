import { Box, Paper } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { COLORS } from '../../../utils/consts';
import {
  VerticalInfoGroup,
  VerticalInfoGroupProps,
} from '../../ui/primitives/VerticalInfoGroup';

export interface SidebarMainInfoProps extends VerticalInfoGroupProps {
  icon: ReactNode;
}

export const SidebarMainInfo: FC<SidebarMainInfoProps> = ({
  icon,
  ...rest
}) => {
  return (
    <Paper
      elevation={4}
      sx={{
        backgroundColor: COLORS.PRIMARY_LIGHT,
        color: COLORS.NATURAL,
        padding: '1.2rem',
        borderRadius: '0.8rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Paper
          elevation={4}
          sx={{
            backgroundColor: COLORS.PRIMARY_LIGHT,
            color: COLORS.NATURAL,
            padding: '1.2rem',
            borderRadius: '0.8rem',
          }}
        >
          {icon}
        </Paper>
        <VerticalInfoGroup {...rest} />
      </Box>
    </Paper>
  );
};
