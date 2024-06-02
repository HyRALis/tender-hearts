import DonationHistoryTable from '@/app/_lib/shared/components/donation-history/DonationHistoryTable';
import { FlexBox } from '@/app/_lib/shared/components/ui/primitives/FlexBox';
import { Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  return (
    <FlexBox flexDirection={'column'} width={'100%'}>
      <Typography variant={'h5'} component={'h1'}>
        Welcome to admin dashboard
      </Typography>
      <DonationHistoryTable />
    </FlexBox>
  );
};

export default Dashboard;
