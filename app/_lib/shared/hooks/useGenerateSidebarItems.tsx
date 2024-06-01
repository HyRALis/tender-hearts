import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import RequestPageSharpIcon from '@mui/icons-material/RequestPageSharp';
import { RoleEnum, TPortalType, TRole } from '../../types/shared';
import { SidebarMainInfoProps } from '../components/sidebar/primitives/SidebarMainInfo';
import { VerticalInfoGroupProps } from '../components/ui/primitives/VerticalInfoGroup';
import CreditScoreSharpIcon from '@mui/icons-material/CreditScoreSharp';

interface TSidebarDefaultInfoItems {
  [key: string]: {
    title: string;
    icon: React.JSX.Element;
  }[];
}
interface TSidebarMainTitles {
  [key: string]: string[];
}

export const useGenerateSidebarItems = () => {
  const t = useTranslations('Shared');

  const statsTitles: TSidebarMainTitles = {
    [RoleEnum.Admin]: [
      t('total_request'),
      t('total_donations'),
      t('success_cases'),
    ],
    [RoleEnum.Donor]: [
      t('total_donations'),
      t('donation_average'),
      t('number_donations'),
    ],
    [RoleEnum.Requester]: [
      t('total_requests'),
      t('approved_requests'),
      t('rejected_requests'),
    ],
  };

  const sidebarInfoItems: TSidebarDefaultInfoItems = {
    [RoleEnum.Admin]: [
      {
        title: t('total_requests'),
        icon: <RequestPageSharpIcon />,
      },
      {
        title: t('approved_requests'),
        icon: <RequestPageSharpIcon />,
      },
      {
        title: t('total_donations'),
        icon: <AttachMoneyIcon />,
      },
    ],
    [RoleEnum.Donor]: [
      {
        title: t('requests_donated'),
        icon: <AttachMoneyIcon />,
      },
      {
        title: t('requests_viewed'),
        icon: <RequestPageSharpIcon />,
      },
      {
        title: t('donated'),
        icon: <CreditScoreSharpIcon />,
      },
    ],
    [RoleEnum.Requester]: [
      {
        title: t('requests'),
        icon: <RequestPageSharpIcon />,
      },
      {
        title: t('donations_per_view'),
        icon: <VisibilitySharpIcon />,
      },
      {
        title: `${t('collected')} (%)`,
        icon: <FlagSharpIcon />,
      },
    ],
  };

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateSidebarMenuItem = (
    role: TPortalType
  ): SidebarMainInfoProps[] => {
    if (!(role === 'admin' || role === 'donor' || role === 'requester')) {
      return [];
    }

    const defaultValues = sidebarInfoItems[role];

    const mainInfoCards: SidebarMainInfoProps[] = defaultValues.map(
      ({ title, icon }) => ({
        icon,
        infoGroups: [
          {
            title,
            value: getRandomInt(0, 10000).toString(),
            alignment: 'left',
          },
        ],
      })
    );

    return mainInfoCards;
  };

  const generateSidebarMainStats = (
    role: TPortalType
  ): VerticalInfoGroupProps[] => {
    if (!(role === 'admin' || role === 'donor' || role === 'requester')) {
      return [];
    }

    const defaultValues = statsTitles[role];

    const verticalGroups: VerticalInfoGroupProps[] = defaultValues.map(
      (title) => ({
        title,
        value: getRandomInt(0, 10000).toString(),
      })
    );

    return verticalGroups;
  };
  return { generateSidebarMainStats, generateSidebarMenuItem };
};
