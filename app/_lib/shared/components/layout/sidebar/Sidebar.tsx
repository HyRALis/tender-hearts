import React, { FC } from 'react';
import { Divider, Typography } from '@mui/material';
import { SidebarHeader } from './primitives/SidebarHeader';
import { SidebarMainCard } from './primitives/SidebarMainCard';
import { useTranslations } from 'next-intl';
import { DrawerStyled } from '../../../utils/modified-components/drawer';
import { FlexBox } from '../../ui/primitives/FlexBox';
import {
  SidebarMainInfo,
  SidebarMainInfoProps,
} from './primitives/SidebarMainInfo';
import { VerticalInfoGroupProps } from '../../ui/primitives/VerticalInfoGroup';
import { COLORS } from '../../../utils/consts';

export interface SidebarProps {
  stats: VerticalInfoGroupProps[];
  mainInfoItems: SidebarMainInfoProps[];
}

export const Sidebar: FC<SidebarProps> = ({ stats, mainInfoItems }) => {
  const t = useTranslations('Shared');

  return (
    <DrawerStyled variant='permanent' anchor='right' open={true}>
      <SidebarHeader username='Petar Trajanoski' role='requester' />
      <Divider sx={{ borderColor: COLORS.PRIMARY_LIGHT, marginX: '0.5rem' }} />
      <FlexBox flexDirection={'column'} padding={'1.5rem 1rem'} gap={'1.5rem'}>
        <SidebarMainCard
          title='Petar Trajanoski'
          subtitle={t('requester')}
          stats={stats}
        />
        <Typography variant='h6' component={'h4'} color={COLORS.NATURAL}>
          {t('general_overview')}
        </Typography>
        {mainInfoItems.map((info, index) => (
          <SidebarMainInfo
            key={`${info.infoGroups[0].title}_${index}`}
            {...info}
          />
        ))}
      </FlexBox>
    </DrawerStyled>
  );
};
