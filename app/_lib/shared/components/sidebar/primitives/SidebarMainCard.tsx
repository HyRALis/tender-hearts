import { Box, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';
import { COLORS } from '../../../utils/consts';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { grey } from '@mui/material/colors';
import {
  VerticalInfoGroup,
  VerticalInfoGroupProps,
} from '../../ui/primitives/VerticalInfoGroup';

export interface SidebarMainCardProps {
  title: string;
  subtitle: string;
  stats: VerticalInfoGroupProps[];
}
export const SidebarMainCard: FC<SidebarMainCardProps> = ({
  title,
  subtitle,
  stats,
}) => {
  return (
    <Paper
      elevation={4}
      sx={{
        backgroundColor: COLORS.PRIMARY_LIGHT,
        color: COLORS.NATURAL,
        padding: '1.2rem',
        borderRadius: '0.8rem',
      }}
    >
      <Typography
        component={'p'}
        fontSize={'1.5rem'}
        fontWeight={'bold'}
        paddingBottom={'0.8rem'}
      >
        {title}
      </Typography>
      <Box display={'flex'} alignItems={'center'} marginBottom={'1.5rem'}>
        <Typography component={'p'} fontSize={'1rem'} paddingRight={'0.5rem'}>
          {subtitle}
        </Typography>
        <CheckCircleRoundedIcon fontSize='small' />
      </Box>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: COLORS.PRIMARY,
          color: COLORS.NATURAL,
          padding: '1.2rem',
          borderRadius: '0.8rem',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {stats.map((stat, index) => (
          <VerticalInfoGroup
            key={`${stat.title}_${stat.value}_${index}`}
            {...stat}
          />
        ))}
      </Paper>
    </Paper>
  );
};
