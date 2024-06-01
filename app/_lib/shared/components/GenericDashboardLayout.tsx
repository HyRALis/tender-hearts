'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TPortalType } from '../../types/shared';
import LanguageSwitcher from './ui/language-switcher/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { TListItemType } from './sidebar/primitives/SidebarListItem';
import { AppBarStyled } from '../utils/materialStyling';
import { Sidebar } from './sidebar/Sidebar';
import { FlexBox } from './ui/primitives/FlexBox';
import { useGenerateSidebarItems } from '../hooks/useGenerateSidebarItems';

export default function GenericDashboardLayout({
  children,
  sidebarItems,
  pageName,
  portal,
}: Readonly<{
  children: React.ReactNode;
  sidebarItems: TListItemType[];
  pageName: string;
  portal: TPortalType;
}>) {
  const t = useTranslations('Shared');
  const { generateSidebarMainStats, generateSidebarMenuItem } =
    useGenerateSidebarItems();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <FlexBox
      sx={{
        background: 'white',
        height: '100vh',
        paddingTop: '68px',
      }}
    >
      <CssBaseline />
      {/* <AppBarStyled position='fixed' open={open}>
        <Toolbar>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            width={'100%'}
          >
            <FlexBox
              flexDirection={'row'}
              alignItems={'center'}
            >
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <FlexBox
                flexDirection={'row'}
                alignItems={'center'}
              >
                <Typography variant='h5' noWrap>
                  {`${t('title')}`}
                </Typography>
                <Typography variant='h6' noWrap>
                  {` | ${pageName}`}
                </Typography>
              </FlexBox>
            </FlexBox>
            <LanguageSwitcher />
          </Stack>
        </Toolbar>
      </AppBarStyled> */}
      <Sidebar
        isOpen={open}
        handleDrawerClose={handleDrawerClose}
        items={sidebarItems}
        portal={portal}
        stats={(function () {
          return generateSidebarMainStats(portal);
        })()}
        mainInfoItems={(function () {
          return generateSidebarMenuItem(portal);
        })()}
      />
      <Box
        component={'main'}
        sx={{
          flexGrow: 1,
          padding: '24px',
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <Container>{children}</Container>
      </Box>
    </FlexBox>
  );
}
