'use client';
import { Typography } from '@mui/material';
import React from 'react';
import { LoginForm } from './LoginForm';
import { ProviderLoginButtons } from './ProviderLoginButtons';
import { useTranslations } from 'next-intl';
import { RoleSwitcher } from '@/app/_lib/shared/components/ui/primitives/RoleSwitcher';
import { useRole } from '@/app/_lib/shared/hooks/useRole';

export const SignIn = () => {
  const t = useTranslations('Index');
  const { role, onRoleChange } = useRole();

  return (
    <>
      <RoleSwitcher role={role} onRoleChange={onRoleChange} />
      <LoginForm />
      <Typography
        component='h1'
        variant='h5'
        marginY={'1.5rem'}
        textTransform={'uppercase'}
      >
        {`- ${t('or')} -`}
      </Typography>
      <ProviderLoginButtons />
    </>
  );
};
