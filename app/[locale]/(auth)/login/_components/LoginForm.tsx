'use client';

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Link as MuiLink,
  Alert,
} from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import React, { FC, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocale, useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { loginSchema } from '@/app/_lib/yup-schemas/login';
import Link from 'next/link';

interface IFormInputs {
  email: string;
  password: string;
}

enum WatchedValuesEnum {
  email,
  password,
}

export const LoginForm: FC = () => {
  const t = useTranslations('Index');
  const locale = useLocale();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const watchedValues = watch(['email', 'password']);

  const onSubmit: SubmitHandler<IFormInputs> = async ({ email, password }) => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: true,
        callbackUrl: `/${locale}/redirect`,
      });
    } catch (error) {
      throw new Error(`Error happened when signing in : ${error}`);
    }
  };

  const hasCredentialsError = useMemo(() => {
    const hasError = searchParams.get('error');

    return (
      hasError &&
      hasError === 'CredentialsSignin' &&
      !watchedValues[WatchedValuesEnum.email] &&
      !watchedValues[WatchedValuesEnum.password]
    );
  }, [searchParams, watchedValues]);

  return (
    <Box
      component='form'
      noValidate
      sx={{ mt: 1 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        {...register('email')}
        margin='normal'
        required
        fullWidth
        id='email'
        label={t('email_address')}
        name='email'
        autoComplete='email'
        error={!!errors.email || !!hasCredentialsError}
        helperText={!!errors.email && t(errors.email?.message)}
        autoFocus
      />
      <TextField
        {...register('password')}
        margin='normal'
        required
        fullWidth
        name='password'
        label={t('password')}
        type='password'
        id='password'
        error={!!errors.password || !!hasCredentialsError}
        helperText={!!errors.password && t(errors.password?.message)}
        autoComplete='current-password'
      />
      {hasCredentialsError && (
        <Alert severity='error'>{t('error_wrong_credentials')}</Alert>
      )}
      <FormControlLabel
        control={<Checkbox value='remember' color='primary' />}
        label={t('remember_me')}
      />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        {t('login')}
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href={`/${locale}/forgot-password`}>
            <MuiLink component={'p'} variant='body2'>
              {t('forgot_your_password')}
            </MuiLink>
          </Link>
        </Grid>
        <Grid item>
          <Link href={`/${locale}/register`}>
            <MuiLink component={'p'} variant='body2'>
              {t('dont_have_account_sign_up')}
            </MuiLink>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
