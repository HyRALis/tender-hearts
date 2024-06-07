'use client';

import { Box, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  useSession,
} from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers/index';

export const ProviderLoginButtons: FC = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

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
            width: '60%',
          }}
          gap={'0.8rem'}
        >
          {providers.google && (
            <Button
              aria-label='Sign in with Google'
              variant='outlined'
              fullWidth
              onClick={() => signIn(providers.google.id)}
            >
              <GoogleIcon
                sx={{
                  marginRight: '1rem',
                }}
              />
              Sing with Google
            </Button>
          )}
          {providers.facebook && (
            <Button
              aria-label='Sign in with Facebook'
              variant='outlined'
              fullWidth
              onClick={() => signIn(providers.facebook.id)}
            >
              <FacebookIcon
                sx={{
                  marginRight: '1rem',
                }}
              />
              Sing with Facebook
            </Button>
          )}
          {providers.twitch && (
            <Button
              aria-label='Sign in with Twitch'
              variant='outlined'
              fullWidth
              onClick={() => signIn(providers.twitch.id)}
            >
              Sing with Twitch
            </Button>
          )}
        </Box>
      );
    } else return null;
  }, [providers]);

  return memoizedButtonsRender;
};
