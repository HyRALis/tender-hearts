import React, { FC } from 'react';
import { Divider, IconButton, List } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { SidebarListItem, TListItemType } from './primitives/SidebarListItem';
import { TPortalType } from '@/app/_lib/types/shared';
import { DrawerHeader, DrawerStyled } from '../../utils/materialStyling';

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
  return (
    <DrawerStyled variant='permanent' open={isOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {items.map((item) => (
          <SidebarListItem
            key={`Sidebar_${item}`}
            type={item}
            portal={portal}
          />
        ))}
      </List>
    </DrawerStyled>
  );
};
