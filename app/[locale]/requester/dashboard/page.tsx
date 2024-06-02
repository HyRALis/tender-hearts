import React from 'react';
import { Typography } from '@mui/material';
import DonationHistoryTable from '@/app/_lib/shared/components/donation-history/DonationHistoryTable';

const Dashboard = () => {
  return (
    <>
      <Typography variant='h4' component='h1' gutterBottom color={'black'}>
        Requester Dashboard
      </Typography>
      <DonationHistoryTable />
    </>
  );
};

export default Dashboard;
