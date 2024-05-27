import { TAdminListItem } from '@/app/types/admin';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React, { FC, useMemo } from 'react';
import { TDonorListItem } from '@/app/types/donor';
import { TRequesterListItem } from '@/app/types/requester';

export type TListItemType = TAdminListItem | TDonorListItem | TRequesterListItem;

export interface ListItemProps {
    type: TListItemType;
}

export const SidebarListItem: FC<ListItemProps> = ({ type }) => {
    const memoizedIcon = useMemo(() => {
        switch (type) {
            case 'Dashboard':
                return <HomeIcon />;
            case 'Manage Users':
            case 'Manage Requests':
            case 'Reports':
            case 'Browse Requests':
            case 'Manage Requests':
            case 'Donation History':
            case 'Submit Request':
            case 'Track Requests':
            case 'Profile':
                return <AccountCircleIcon />;
            case 'Logout':
                return <ExitToAppIcon />;
            default:
                break;
        }
    }, [type]);

    return (
        <ListItem style={{ cursor: 'pointer' }}>
            <ListItemIcon>{memoizedIcon}</ListItemIcon>
            <ListItemText primary={type} />
        </ListItem>
    );
};
