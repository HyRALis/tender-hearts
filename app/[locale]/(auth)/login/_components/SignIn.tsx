'use client';
import { Divider, Typography } from '@mui/material';
import React from 'react';
import { LoginForm } from './LoginForm';
import { ProviderLoginButtons } from './ProviderLoginButtons';
import { useTranslations } from 'next-intl';
import { RoleSwitcher } from '@/app/_lib/shared/components/ui/primitives/RoleSwitcher';
import { useRole } from '@/app/_lib/shared/hooks/useRole';
import { grey } from '@mui/material/colors';

export const SignIn = () => {
  const t = useTranslations('Index');
  const { role, onRoleChange } = useRole();

  return (
    <>
      <RoleSwitcher role={role} onRoleChange={onRoleChange} />
      <LoginForm />
      <Divider
        sx={{
          width: '100%',
          marginY: '1.5rem',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: grey[500],
        }}
      >
        {t('or')}
      </Divider>
      <ProviderLoginButtons />
    </>
  );
};
