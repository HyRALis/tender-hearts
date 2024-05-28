import { TAdminListItem } from '@/app/types/admin';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React, { FC, useMemo } from 'react';
import { TDonorListItem } from '@/app/types/donor';
import { TRequesterListItem } from '@/app/types/requester';
import Link from 'next/link';
import { TPortalType } from '@/app/types/shared';

export type TListItemType =
  | TAdminListItem
  | TDonorListItem
  | TRequesterListItem;

export interface ListItemProps {
  type: TListItemType;
  portal: TPortalType;
}

export const SidebarListItem: FC<ListItemProps> = ({ type, portal }) => {
  const getIconByType = (type: TListItemType) => {
    switch (type) {
      case 'Dashboard':
        return <HomeIcon aria-label='Dashboard' />;
      case 'Manage Users':
        return <AccountCircleIcon aria-label='Manage Users' />;
      case 'Manage Requests':
        return <AccountCircleIcon aria-label='Manage Requests' />;
      case 'Reports':
        return <AccountCircleIcon aria-label='Reports' />;
      case 'Browse Requests':
        return <AccountCircleIcon aria-label='Browse Requests' />;
      case 'Donation History':
        return <AccountCircleIcon aria-label='Donation History' />;
      case 'Submit Request':
        return <AccountCircleIcon aria-label='Submit Request' />;
      case 'Track Requests':
        return <AccountCircleIcon aria-label='Track Requests' />;
      case 'Profile':
        return <AccountCircleIcon aria-label='Profile' />;
      case 'Logout':
        return <ExitToAppIcon aria-label='Logout' />;
      default:
        return null;
    }
  };

  const getLinkByType = (type: TListItemType) => {
    switch (type) {
      case 'Dashboard':
        return `/${portal}/dashboard`;
      case 'Manage Users':
        return `/${portal}/manage-users`;
      case 'Manage Requests':
        return `/${portal}/manage-requests`;
      case 'Reports':
        return `/${portal}/reports`;
      case 'Browse Requests':
        return `/${portal}/browse-requests`;
      case 'Donation History':
        return `/${portal}/donation-history`;
      case 'Submit Request':
        return `/${portal}/submit-request`;
      case 'Track Requests':
        return `/${portal}/track-requests`;
      case 'Profile':
        return `/${portal}/profile`;
      case 'Logout':
        return `/${portal}/logout`;
      default:
        return '';
    }
  };

  const memoizedIcon = useMemo(() => getIconByType(type), [type]);

  const memoizedLink = useMemo(() => getLinkByType(type), [type]);

  return (
    <Link href={memoizedLink}>
      <ListItem style={{ cursor: 'pointer' }}>
        <ListItemIcon>{memoizedIcon}</ListItemIcon>
        <ListItemText primary={type} />
      </ListItem>
    </Link>
  );
};
