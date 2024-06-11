import { COLORS } from '@/app/_lib/shared/utils/consts';
import { DrawerHeader } from '@/app/_lib/shared/utils/modified-components/drawer';
import { TRole } from '@/app/_lib/types/shared';
import { FC } from 'react';
import { FlexBox } from '../../../ui/primitives/FlexBox';
import { IconButton, Typography } from '@mui/material';
import LanguageSwitcherMenuVariant from '../../../ui/language-switcher/LanguageSwitcherMenuVariant';
import { SidebarAvatar } from './SidebarAvatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { SidebarUser } from './SidebarUser';

export const SidebarHeader: FC = () => {
  return (
    <DrawerHeader
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        color: COLORS.NATURAL,
        padding: '1rem',
      }}
    >
      <FlexBox alignItems={'center'}>
        <IconButton
          sx={{
            color: COLORS.NATURAL,
            padding: '2px',
          }}
        >
          <NotificationsIcon />
        </IconButton>
        <LanguageSwitcherMenuVariant />
      </FlexBox>
      <SidebarUser />
    </DrawerHeader>
  );
};
