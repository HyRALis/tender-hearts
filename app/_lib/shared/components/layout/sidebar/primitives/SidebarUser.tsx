'use client';

import React from 'react';
import { FlexBox } from '../../../ui/primitives/FlexBox';
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { SidebarAvatar } from './SidebarAvatar';
import { COLORS } from '@/app/_lib/shared/utils/consts';
import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const SidebarUser = () => {
  const t = useTranslations('Shared');
  const { data: sessionData } = useSession();

  console.log({ sessionData });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut();
    handleClose();
  };

  return (
    <>
      <FlexBox
        component={'button'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        sx={{
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        <FlexBox
          alignItems={'flex-end'}
          flexDirection={'column'}
          marginRight={'1rem'}
        >
          <Typography component={'p'} textAlign={'end'} fontSize={'0.8rem'}>
            {sessionData?.user?.name || sessionData?.user?.email}
          </Typography>
          {sessionData?.user?.role && (
            <Typography
              component={'p'}
              textAlign={'end'}
              fontSize={'0.65rem'}
              color={COLORS.NATURAL_TWO}
            >
              {t(sessionData.user.role)}
            </Typography>
          )}
        </FlexBox>
        <SidebarAvatar
          imageSrc={
            sessionData?.user?.image ? sessionData?.user?.image : undefined
          }
          username={
            sessionData?.user?.name || sessionData?.user?.email || 'User avatar'
          }
        />
      </FlexBox>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <ExitToAppIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>{t('logout')}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
