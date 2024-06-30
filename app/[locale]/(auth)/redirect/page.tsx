'use client';

import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

const RedirectPage = () => {
  const { data: sessionData } = useSession();

  useEffect(() => {
    console.log({ sessionData });

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
