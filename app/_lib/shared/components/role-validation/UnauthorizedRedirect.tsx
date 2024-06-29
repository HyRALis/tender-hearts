'use client';

import { TRole } from '@/app/_lib/types/shared';
import { Box, Typography } from '@mui/material';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, FC } from 'react';

export const UnauthorizedRedirect: FC<{ role: TRole }> = ({ role }) => {
  const [count, setCount] = useState(5);
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 0) {
      router.push(`/${locale}/${role}/dashboard`);
    }
  }, [count, role]);

  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      color={'black'}
    >
      <Typography variant={'h6'} component={'h1'}>
        {`You are not authorized to view this page! Redirecting in ${count} seconds...`}
      </Typography>
    </Box>
  );
};
