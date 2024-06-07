'use client';

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { signIn } from 'next-auth/react';
import React, { useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as bcrypt from 'bcryptjs';
import { useTranslations } from 'next-intl';
import WarningIcon from '@mui/icons-material/Warning';
import { red } from '@mui/material/colors';
import { useSearchParams } from 'next/navigation';

interface IFormInputs {
  email: string;
  password: string;
}

enum WatchedValuesEnum {
  email,
  password,
}

export const LoginForm = () => {
  const t = useTranslations('Index');
  const searchParams = useSearchParams();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('error_invalid_email'))
      .required(t('error_required_email')),
    password: yup.string().required(t('error_required_password')),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const watchedValues = watch(['email', 'password']);

  const onSubmit: SubmitHandler<IFormInputs> = async ({ email, password }) => {
    try {
      const salt = await bcrypt.genSalt(11);
      const hash = await bcrypt.hash(password, salt);

      await signIn('credentials', {
        email,
        password: hash,
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
      {hasCredentialsError && (
        <Box
          display={'flex'}
          alignItems={'center'}
          color={red[700]}
          gap={'1.5rem'}
          bgcolor={red[100]}
          border={`1px solid ${red[500]}`}
          borderRadius={'4px'}
          padding={'1.2rem 1rem'}
        >
          <WarningIcon fontSize='large' />
          <Typography variant='body2' component={'p'}>
            {t('error_wrong_credentials')}
          </Typography>
        </Box>
      )}

      <TextField
        {...register('email')}
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        error={!!errors.email || !!hasCredentialsError}
        helperText={errors.email?.message}
        autoFocus
      />
      <TextField
        {...register('password')}
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        error={!!errors.password || !!hasCredentialsError}
        helperText={errors.password?.message}
        autoComplete='current-password'
      />
      <FormControlLabel
        control={<Checkbox value='remember' color='primary' />}
        label='Remember me'
      />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href='#' variant='body2'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href='#' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
