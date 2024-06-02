import { Box, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
  VerticalInfoGroup,
  VerticalInfoGroupProps,
} from '../../../ui/primitives/VerticalInfoGroup';
import { COLORS } from '@/app/_lib/shared/utils/consts';
import { FlexBox } from '../../../ui/primitives/FlexBox';

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
      <Box
        display={'flex'}
        alignItems={'center'}
        marginBottom={'1.5rem'}
        color={COLORS.ACCENT}
      >
        <Typography
          component={'p'}
          fontSize={'1rem'}
          paddingRight={'0.5rem'}
          color={COLORS.NATURAL}
        >
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
        <FlexBox gap={'1rem'}>
          {stats.map((stat, index) => (
            <VerticalInfoGroup
              key={`${stat.title}_${stat.value}_${index}`}
              {...stat}
            />
          ))}
        </FlexBox>
      </Paper>
    </Paper>
  );
};
