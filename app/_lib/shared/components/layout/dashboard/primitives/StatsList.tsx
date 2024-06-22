import React, { FC } from 'react';
import { FlexBox } from '../../../ui/primitives/FlexBox';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Paper, Typography } from '@mui/material';
import { BORDER_RADIUS, COLORS, PADDING } from '@/app/_lib/shared/utils/consts';
import { grey } from '@mui/material/colors';

export const StatsList = () => {
  return (
    <Paper
      sx={{
        borderRadius: BORDER_RADIUS,
        overflow: 'none',
      }}
    >
      <FlexBox flexDirection={'column'} height={'100%'}>
        <Stat title='Today donors' value='10' trending='up' />
        <Stat title='Today Received' value='$200' trending='flat' />
        <Stat title='Today Views' value='11' trending='down' />
      </FlexBox>
    </Paper>
  );
};

type TTrending = 'up' | 'down' | 'flat';

interface StatProps {
  title: string;
  value: string;
  trending: TTrending;
}

const Stat: FC<StatProps> = ({ title, value, trending }) => {
  return (
    <FlexBox
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingY={'0.8rem'}
      paddingX={PADDING}
      bgcolor={`${COLORS.ACCENT}1F`}
      flexGrow={'1'}
      sx={{
        '&:first-child': {
          borderTopLeftRadius: BORDER_RADIUS,
          borderTopRightRadius: BORDER_RADIUS,
        },
        '&:last-child': {
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
        },
        '&:nth-of-type(even)': {
          backgroundColor: 'white',
        },
        '&:nth-of-type(even) .trending': {
          backgroundColor: `${COLORS.ACCENT}1F`,
        },
      }}
      gap={'1rem'}
    >
      <FlexBox flexDirection={'column'} gap={'0.8rem'}>
        <Typography variant={'body2'} component={'p'} color={grey[600]}>
          {title}
        </Typography>
        <Typography
          variant={'h5'}
          component={'p'}
          color={'black'}
          fontWeight={'500'}
        >
          {value}
        </Typography>
      </FlexBox>
      <FlexBox justifyContent={'center'} alignItems={'center'}>
        {trending === 'up' && (
          <FlexBox
            className='trending'
            justifyContent={'center'}
            alignItems={'center'}
            width={'2rem'}
            height={'2rem'}
            bgcolor={'white'}
            borderRadius={BORDER_RADIUS}
          >
            <TrendingUpIcon color='success' />{' '}
          </FlexBox>
        )}
        {trending === 'down' && (
          <FlexBox
            className='trending'
            justifyContent={'center'}
            alignItems={'center'}
            width={'2rem'}
            height={'2rem'}
            bgcolor={'white'}
            borderRadius={BORDER_RADIUS}
          >
            {' '}
            <TrendingDownIcon color='error' />
          </FlexBox>
        )}
        {trending === 'flat' && (
          <FlexBox
            className='trending'
            justifyContent={'center'}
            alignItems={'center'}
            width={'2rem'}
            height={'2rem'}
            bgcolor={'white'}
            borderRadius={BORDER_RADIUS}
          >
            {' '}
            <TrendingFlatIcon color='warning' />
          </FlexBox>
        )}
      </FlexBox>
    </FlexBox>
  );
};
