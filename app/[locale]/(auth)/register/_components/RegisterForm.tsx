'use client';

import { registerUser } from '@/app/_lib/services/registerUser';
import { RoleSwitcher } from '@/app/_lib/shared/components/ui/primitives/RoleSwitcher';
import { useRole } from '@/app/_lib/shared/hooks/useRole';
import { feRegisterFormSchemaShape } from '@/app/_lib/yup-schemas/register';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link as MuiLink,
  TextField,
} from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import * as yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface IRegisterFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  allowExtraEmails?: boolean;
}

export const RegisterForm = () => {
  const t = useTranslations('Index');
  const router = useRouter();
  const locale = useLocale();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInputs>({
    resolver: yupResolver(yup.object().shape(feRegisterFormSchemaShape)),
  });
  const { role, onRoleChange } = useRole();

  const onSubmit: SubmitHandler<IRegisterFormInputs> = async ({
    email,
    password,
    firstName,
    lastName,
  }) => {
    try {
      await registerUser({
        email,
        password,
        firstName,
        lastName,
        role,
      });

      router.push(`/${locale}/login?newUser=true`);
    } catch (error) {
      throw new Error(`Error happened when signing in : ${error}`);
    }
  };

  return (
    <Box
      component='form'
      noValidate
      sx={{ mt: 3 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RoleSwitcher role={role} onRoleChange={onRoleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('firstName')}
            autoComplete='given-name'
            name='firstName'
            required
            fullWidth
            id='firstName'
            label={t('first_name')}
            error={!!errors.firstName}
            helperText={!!errors.firstName && t(errors.firstName?.message)}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('lastName')}
            required
            fullWidth
            id='lastName'
            label={t('last_name')}
            name='lastName'
            autoComplete='family-name'
            error={!!errors.lastName}
            helperText={!!errors.lastName && t(errors.lastName?.message)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('email')}
            required
            fullWidth
            id='email'
            label={t('email_address')}
            name='email'
            autoComplete='email'
            error={!!errors.email}
            helperText={!!errors.email && t(errors.email?.message)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('password')}
            required
            fullWidth
            name='password'
            label={t('password')}
            type='password'
            id='password'
            error={!!errors.password}
            helperText={!!errors.password && t(errors.password?.message)}
            autoComplete='new-password'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('confirmPassword')}
            required
            fullWidth
            name='confirmPassword'
            label={t('confirm_password')}
            type='password'
            id='confirmPassword'
            error={!!errors.confirmPassword}
            helperText={
              !!errors.confirmPassword && t(errors.confirmPassword?.message)
            }
            autoComplete='new-password'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                {...register('allowExtraEmails')}
                value='allowExtraEmails'
                color='primary'
              />
            }
            label='I want to receive inspiration, marketing promotions and updates via email.'
          />
        </Grid>
      </Grid>
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        {t('register')}
      </Button>
      <Grid container justifyContent='flex-end'>
        <Grid item>
          <Link href={`/${locale}/login`}>
            <MuiLink href='#' variant='body2'>
              {t('already_have_an_account_sign_in')}
            </MuiLink>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
