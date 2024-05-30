import React, { FC } from 'react';
import { Box, Divider, IconButton, List } from '@mui/material';
import { SidebarListItem, TListItemType } from './primitives/SidebarListItem';
import { TPortalType } from '@/app/_lib/types/shared';
import { DrawerHeader, DrawerStyled } from '../../utils/materialStyling';
import { SidebarHeader } from './primitives/SidebarHeader';
import { SidebarMainCard } from './primitives/SidebarMainCard';
import { useTranslations } from 'next-intl';

export interface SidebarProps {
  isOpen: boolean;
  handleDrawerClose: () => void;
  items: TListItemType[];
  portal: TPortalType;
}

export const Sidebar: FC<SidebarProps> = ({
  isOpen,
  handleDrawerClose,
  items,
  portal,
}) => {
  const t = useTranslations('Shared');

  const stats = [
    {
      title: t('total_requests'),
      value: 10,
    },
    {
      title: t('approved_requests'),
      value: 8,
    },
    {
      title: t('rejected_requests'),
      value: 2,
    },
  ];

  return (
    <DrawerStyled variant='permanent' open={isOpen}>
      <SidebarHeader username='Petar Trajanoski' role='requester' />
      <Divider />
      <Box display={'flex'} flexDirection={'column'} padding={'1.5rem 1rem'}>
        <SidebarMainCard
          title='Petar Trajanoski'
          subtitle={t('requester')}
          stats={stats}
        />
        <List>
          {items.map((item) => (
            <SidebarListItem
              key={`Sidebar_${item}`}
              type={item}
              portal={portal}
            />
          ))}
        </List>
      </Box>
    </DrawerStyled>
  );
};
