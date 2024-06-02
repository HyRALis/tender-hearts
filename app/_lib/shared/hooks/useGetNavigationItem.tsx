import React, { useMemo } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { TListItemType, TPortalType } from '../../types/shared';

export const useGetNavigationItem = ({ portal }: { portal: TPortalType }) => {
  const params = useParams<{ locale: string }>();
  const t = useTranslations('Shared');

  const getListItemData = (type: TListItemType) => {
    switch (type) {
      case 'Dashboard':
        return {
          text: t('dashboard'),
          href: `/${params.locale}/${portal}/dashboard`,
          icon: <HomeIcon aria-label='Dashboard' />,
          value: '/dashboard',
        };
      case 'Manage Requests':
        return {
          text: t('manage_requests'),
          href: `/${params.locale}/${portal}/manage-users`,
          icon: <AccountCircleIcon aria-label='Manage Requests' />,
          value: '/manage-users',
        };
      case 'Reports':
        return {
          text: t('reports'),
          href: `/${params.locale}/${portal}/reports`,
          icon: <AccountCircleIcon aria-label='Reports' />,
          value: '/reports',
        };
      case 'Browse Requests':
        return {
          text: t('browse_requests'),
          href: `/${params.locale}/${portal}/browse-requests`,
          icon: <AccountCircleIcon aria-label='Browse Requests' />,
          value: '/browse-requests',
        };
      case 'Donation History':
        return {
          text: t('donation_history'),
          href: `/${params.locale}/${portal}/donation-history`,
          icon: <AccountCircleIcon aria-label='Donation History' />,
          value: '/donation-history',
        };
      case 'Submit Request':
        return {
          text: t('submit_request'),
          href: `/${params.locale}/${portal}/submit-request`,
          icon: <AccountCircleIcon aria-label='Submit Request' />,
          value: '/submit-request',
        };
      case 'Track Requests':
        return {
          text: t('track_requests'),
          href: `/${params.locale}/${portal}/track-requests`,
          icon: <AccountCircleIcon aria-label='Track Requests' />,
          value: '/track-requests',
        };
      case 'Profile':
        return {
          text: t('profile'),
          href: `/${params.locale}/${portal}/profile`,
          icon: <AccountCircleIcon aria-label='Profile' />,
          value: '/profile',
        };
      case 'Logout':
        return {
          text: t('logout'),
          href: `/${params.locale}/${portal}/logout`,
          icon: <ExitToAppIcon aria-label='Logout' />,
          value: '/logout',
        };
      default:
        return null;
    }
  };

  return { getListItemData };
};
