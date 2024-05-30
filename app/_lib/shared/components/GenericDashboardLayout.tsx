'use client';

import '../globals.css';
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
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { TListItemType } from './sidebar/primitives/SidebarListItem';
import { AppBarStyled } from '../utils/materialStyling';
import { Sidebar } from './sidebar/Sidebar';

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
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        display: 'flex',
        background: 'white',
        height: '100vh',
        paddingTop: '68px',
      }}
    >
      <CssBaseline />
      <AppBarStyled position='fixed' open={open}>
        <Toolbar>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            width={'100%'}
          >
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <Typography variant='h5' noWrap>
                  {`${t('title')}`}
                </Typography>
                <Typography variant='h6' noWrap>
                  {` | ${pageName}`}
                </Typography>
              </Box>
            </Box>
            <LanguageSwitcher />
          </Stack>
        </Toolbar>
      </AppBarStyled>
      <Sidebar
        isOpen={open}
        handleDrawerClose={handleDrawerClose}
        items={sidebarItems}
        portal={portal}
      />
      <main
        style={{
          flexGrow: 1,
          padding: '24px',
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <Container>{children}</Container>
      </main>
    </div>
  );
}
