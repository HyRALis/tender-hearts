'use client';

import { Box, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';

export const ProviderLoginButtons: FC = () => {
  const t = useTranslations('Index');
  const locale = useLocale();
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    setAuthProviders();
  }, []);

  const memoizedButtonsRender = useMemo(() => {
    if (providers) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
          gap={'0.8rem'}
        >
          {providers.google && (
            <Button
              aria-label='Sign in with Google'
              variant='outlined'
              fullWidth
              onClick={() =>
                signIn(providers.google.id, {
                  callbackUrl: `/${locale}/redirect`,
                  redirect: true,
                })
              }
            >
              <GoogleIcon
                sx={{
                  marginRight: '1rem',
                }}
              />
              {t('sign_in_with_google')}
            </Button>
          )}
          {providers.facebook && (
            <Button
              aria-label='Sign in with Facebook'
              variant='outlined'
              fullWidth
              onClick={() =>
                signIn(providers.facebook.id, {
                  callbackUrl: `/${locale}/redirect`,
                  redirect: true,
                })
              }
            >
              <FacebookIcon
                sx={{
                  marginRight: '1rem',
                }}
              />
              {t('sign_in_with_facebook')}
            </Button>
          )}
          {providers.twitch && (
            <Button
              aria-label='Sign in with Twitch'
              variant='outlined'
              fullWidth
              onClick={() =>
                signIn(providers.twitch.id, {
                  callbackUrl: `/${locale}/redirect`,
                  redirect: true,
                })
              }
            >
              {t('sign_in_with_twitch')}
            </Button>
          )}
        </Box>
      );
    } else return null;
  }, [providers]);

  return memoizedButtonsRender;
};
