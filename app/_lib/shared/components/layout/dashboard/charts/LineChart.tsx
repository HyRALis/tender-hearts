'use client';

import React, { useState } from 'react';
import { LineChart as LineChartMUI } from '@mui/x-charts/LineChart';
import { BORDER_RADIUS, COLORS, PADDING } from '@/app/_lib/shared/utils/consts';
import { Button, Paper } from '@mui/material';
import { FlexBox } from '../../../ui/primitives/FlexBox';
import { StyledMenu } from '../primitives/StyledMenu';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslations } from 'next-intl';

export const LineChart = () => {
  const t = useTranslations('Admin');
  const [selectedOption, setSelectedOption] = useState('donations');

  const options = [
    { value: 'donations', label: <>{`${t('total_donations')}`}</> },
    { value: 'donors', label: <>{`${t('total_donors')}`}</> },
    { value: 'requesters', label: <>{`${t('total_requesters')}`}</> },
    { value: 'requests', label: <>{`${t('total_requests')}`}</> },
  ];

  return (
    <Paper
      sx={{
        borderRadius: BORDER_RADIUS,
        overflow: 'none',
        height: '100%',
        width: '100%',
        padding: PADDING,
        bgcolor: 'white',
      }}
    >
      <FlexBox>
        <StyledMenu
          onChange={(string) => setSelectedOption(string)}
          options={options}
        >
          <Button variant={'outlined'} endIcon={<KeyboardArrowDownIcon />}>
            {options.find((o) => o.value === selectedOption)?.label}
          </Button>
        </StyledMenu>
      </FlexBox>
      <LineChartMUI
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
            color: COLORS.ACCENT,
          },
        ]}
        height={300}
        sx={{ width: '100%', height: '300px' }}
      />
    </Paper>
  );
};
