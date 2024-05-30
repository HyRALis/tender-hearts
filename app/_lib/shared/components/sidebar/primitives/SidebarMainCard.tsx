import { Box, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';
import { COLORS } from '../../../utils/consts';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { grey } from '@mui/material/colors';

export interface SidebarMainCardProps {
  title: string;
  subtitle: string;
  stats: SubcardElementProps[];
}
export const SidebarMainCard: FC<SidebarMainCardProps> = ({
  title,
  subtitle,
  stats,
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
        style={{
          backgroundColor: COLORS.PRIMARY,
          color: COLORS.NATURAL,
          padding: '1.2rem',
          borderRadius: '0.8rem',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {stats.map((stat, index) => (
          <SubcardElement
            key={`${stat.title}_${stat.value}_${index}`}
            {...stat}
          />
        ))}
      </Paper>
    </Paper>
  );
};

interface SubcardElementProps {
  title: string;
  value: string | number;
}

const SubcardElement: FC<SubcardElementProps> = ({ title, value }) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'center'}
      flexShrink={1}
      whiteSpace={'pre-wrap'}
    >
      <Typography
        component={'p'}
        fontSize={'0.75rem'}
        fontWeight={'bold'}
        color={grey['400']}
        textTransform={'capitalize'}
        textAlign={'center'}
      >
        {title}
      </Typography>
      <Typography
        component={'p'}
        fontSize={'1.2rem'}
        fontWeight={'bold'}
        color={COLORS.ACCENT}
        textAlign={'center'}
      >
        {value}
      </Typography>
    </Box>
  );
};
