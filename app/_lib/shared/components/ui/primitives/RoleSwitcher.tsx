'use client';

import { RoleEnum } from '@/app/_lib/types/shared';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';
import { FlexBox } from './FlexBox';

export interface RoleSwitcherProps {
  role: RoleEnum;
  onRoleChange: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newRole: RoleEnum
  ) => void;
}

export const RoleSwitcher: FC<RoleSwitcherProps> = ({ role, onRoleChange }) => {
  const t = useTranslations('Index');

  return (
    <FlexBox
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
      paddingTop={'3rem'}
      paddingLeft={'0.5rem'}
    >
      <Typography component={'p'} variant='body1'>
        {t('role')}
      </Typography>
      <ToggleButtonGroup
        color='primary'
        value={role}
        exclusive
        aria-label='Platform'
        onChange={onRoleChange}
      >
        <ToggleButton value={RoleEnum.Donor}>{t(RoleEnum.Donor)}</ToggleButton>
        <ToggleButton value={RoleEnum.Requester}>
          {t(RoleEnum.Requester)}
        </ToggleButton>
      </ToggleButtonGroup>
    </FlexBox>
  );
};
