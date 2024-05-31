import React, { FC } from 'react';
import { DrawerHeader } from '../../../utils/materialStyling';
import { Box, IconButton, Typography } from '@mui/material';
import { SidebarAvatar } from './SidebarAvatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageSwitcherMenuVariant from '../../ui/language-switcher/LanguageSwitcherMenuVariant';
import { TRole } from '@/app/_lib/types/shared';
import { COLORS } from '../../../utils/consts';
import { grey } from '@mui/material/colors';

export interface SidebarHeaderProps {
  username: string;
  role: TRole;
}
export const SidebarHeader: FC<SidebarHeaderProps> = ({ username, role }) => {
  return (
    <DrawerHeader
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        color: COLORS.NATURAL,
        padding: '1rem',
      }}
    >
      <Box display={'flex'} alignItems={'center'}>
        <IconButton
          style={{
            color: COLORS.NATURAL,
            padding: '2px',
          }}
        >
          <NotificationsIcon />
        </IconButton>
        <LanguageSwitcherMenuVariant />
      </Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
        <Box
          display={'flex'}
          alignItems={'flex-end'}
          flexDirection={'column'}
          marginRight={'1rem'}
        >
          <Typography component={'p'} textAlign={'end'} fontSize={'0.8rem'}>
            {username}
          </Typography>
          <Typography
            component={'p'}
            textAlign={'end'}
            fontSize={'0.65rem'}
            color={grey[500]}
          >
            {role}
          </Typography>
        </Box>
        <SidebarAvatar username={username} />
      </Box>
    </DrawerHeader>
  );
};
