import { DrawerHeader, DrawerStyled } from '@/app/Shared/materialStyling';
import React, { FC } from 'react';
import { Divider, IconButton, List } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { SidebarListItem, TListItemType } from './primitives/SidebarListItem';

export interface SidebarProps {
    isOpen: boolean;
    handleDrawerClose: () => void;
    items: TListItemType[];
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, handleDrawerClose, items }) => {
    return (
        <DrawerStyled variant="permanent" open={isOpen}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {items.map((item) => (
                    <SidebarListItem key={`Sidebar_${item}`} type={item} />
                ))}
            </List>
        </DrawerStyled>
    );
};
