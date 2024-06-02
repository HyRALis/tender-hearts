import { Box, Paper } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import {
  VerticalInfoGroup,
  VerticalInfoGroupProps,
} from '../../../ui/primitives/VerticalInfoGroup';
import { COLORS } from '@/app/_lib/shared/utils/consts';

export interface SidebarMainInfoProps {
  icon: ReactNode;
  infoGroups: VerticalInfoGroupProps[];
}

export const SidebarMainInfo: FC<SidebarMainInfoProps> = ({
  icon,
  infoGroups,
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
            backgroundColor: COLORS.ACCENT,
            color: COLORS.NATURAL,
            padding: '1.2rem',
            borderRadius: '0.8rem',
            marginRight: '1rem',
          }}
        >
          {icon}
        </Paper>
        {infoGroups.map((info) => (
          <VerticalInfoGroup key={`${info.title}_${info.value}`} {...info} />
        ))}
      </Box>
    </Paper>
  );
};
