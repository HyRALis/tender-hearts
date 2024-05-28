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
import { useParams } from 'next/navigation';

export type TListItemType =
  | TAdminListItem
  | TDonorListItem
  | TRequesterListItem;

export interface ListItemProps {
  type: TListItemType;
  portal: TPortalType;
}

export const SidebarListItem: FC<ListItemProps> = ({ type, portal }) => {
  const params = useParams<{ locale: string }>();
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
        return `/${params.locale}/${portal}/dashboard`;
      case 'Manage Users':
        return `/${params.locale}/${portal}/manage-users`;
      case 'Manage Requests':
        return `/${params.locale}/${portal}/manage-requests`;
      case 'Reports':
        return `/${params.locale}/${portal}/reports`;
      case 'Browse Requests':
        return `/${params.locale}/${portal}/browse-requests`;
      case 'Donation History':
        return `/${params.locale}/${portal}/donation-history`;
      case 'Submit Request':
        return `/${params.locale}/${portal}/submit-request`;
      case 'Track Requests':
        return `/${params.locale}/${portal}/track-requests`;
      case 'Profile':
        return `/${params.locale}/${portal}/profile`;
      case 'Logout':
        return `/${params.locale}/${portal}/logout`;
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
