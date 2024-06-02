'use client';

import { usePathname } from 'next/navigation';
import React, { FC, useMemo, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Link from 'next/link';
import { useGetNavigationItem } from '../../../../hooks/useGetNavigationItem';
import { TListItemType, TPortalType } from '@/app/_lib/types/shared';

export interface NavigationTabsProps {
  tabs: TListItemType[];
  portal: TPortalType;
}

export const NavigationTabs: FC<NavigationTabsProps> = ({ tabs, portal }) => {
  const pathName = usePathname();
  const { getListItemData } = useGetNavigationItem({ portal });

  const memoizedValue = useMemo(() => {
    const splitPathName = pathName.split('/');

    return `/${splitPathName[splitPathName.length - 1]}`;
  }, [pathName]);

  return (
    <Tabs value={memoizedValue} aria-label='Navigation items' role='navigation'>
      {tabs.map((tab, index) => {
        const listItem = getListItemData(tab);
        return (
          <Tab
            key={`navigation_tab_${tab}_${index}`}
            LinkComponent={Link}
            href={listItem?.href ? listItem?.href : '/'}
            label={listItem?.text}
            value={listItem?.value}
          />
        );
      })}
    </Tabs>
  );
};
