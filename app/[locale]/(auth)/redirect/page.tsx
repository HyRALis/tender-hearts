'use client';

import { Box, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const RedirectPage = () => {
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (sessionData) {
      if (sessionData.user.role === 'donor') {
        redirect('/donor/dashboard');
      }
      if (sessionData.user.role === 'requester') {
        redirect('/requester/dashboard');
      }
      if (sessionData.user.role === 'admin') {
        redirect('/admin/dashboard');
      }
      if (sessionData.user.role === 'reviewer') {
        redirect('/reviewer/dashboard');
      }
    }
  }, [sessionData]);

  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography variant={'h1'} component={'h6'}>
        Redirecting...
      </Typography>
    </Box>
  );
};

export default RedirectPage;
