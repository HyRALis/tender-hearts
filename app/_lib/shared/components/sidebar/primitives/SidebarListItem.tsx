import { TAdminListItem } from '@/app/_lib/types/admin';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React, { FC, useMemo } from 'react';
import { TDonorListItem } from '@/app/_lib/types/donor';
import { TRequesterListItem } from '@/app/_lib/types/requester';
import Link from 'next/link';
import { TPortalType } from '@/app/_lib/types/shared';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { COLORS } from '../../../utils/consts';

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
  const t = useTranslations('Shared');

  const getListItemData = (type: TListItemType) => {
    switch (type) {
      case 'Dashboard':
        return {
          text: t('dashboard'),
          href: `/${params.locale}/${portal}/dashboard`,
          icon: <HomeIcon aria-label='Dashboard' />,
        };
      case 'Manage Users':
        return {
          text: t('manage_users'),
          href: `/${params.locale}/${portal}/dashboard`,
          icon: <AccountCircleIcon aria-label='Manage Users' />,
        };
      case 'Manage Requests':
        return {
          text: t('manage_requests'),
          href: `/${params.locale}/${portal}/manage-users`,
          icon: <AccountCircleIcon aria-label='Manage Requests' />,
        };
      case 'Reports':
        return {
          text: t('reports'),
          href: `/${params.locale}/${portal}/reports`,
          icon: <AccountCircleIcon aria-label='Reports' />,
        };
      case 'Browse Requests':
        return {
          text: t('browse_requests'),
          href: `/${params.locale}/${portal}/browse-requests`,
          icon: <AccountCircleIcon aria-label='Browse Requests' />,
        };
      case 'Donation History':
        return {
          text: t('donation_history'),
          href: `/${params.locale}/${portal}/donation-history`,
          icon: <AccountCircleIcon aria-label='Donation History' />,
        };
      case 'Submit Request':
        return {
          text: t('submit_request'),
          href: `/${params.locale}/${portal}/submit-request`,
          icon: <AccountCircleIcon aria-label='Submit Request' />,
        };
      case 'Track Requests':
        return {
          text: t('track_requests'),
          href: `/${params.locale}/${portal}/track-requests`,
          icon: <AccountCircleIcon aria-label='Track Requests' />,
        };
      case 'Profile':
        return {
          text: t('profile'),
          href: `/${params.locale}/${portal}/profile`,
          icon: <AccountCircleIcon aria-label='Profile' />,
        };
      case 'Logout':
        return {
          text: t('logout'),
          href: `/${params.locale}/${portal}/logout`,
          icon: <ExitToAppIcon aria-label='Logout' />,
        };
      default:
        return null;
    }
  };

  const memoizedListItemData = useMemo(() => getListItemData(type), [type]);

  return (
    <Link href={memoizedListItemData?.href ? memoizedListItemData.href : '/'}>
      <ListItem style={{ cursor: 'pointer', color: COLORS.NATURAL }}>
        <ListItemIcon style={{ color: COLORS.NATURAL }}>
          {memoizedListItemData?.icon}
        </ListItemIcon>
        <ListItemText primary={memoizedListItemData?.text} />
      </ListItem>
    </Link>
  );
};
