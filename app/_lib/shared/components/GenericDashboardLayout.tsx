import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { TListItemType, TPortalType } from '../../types/shared';
import { Sidebar } from './sidebar/Sidebar';
import { FlexBox } from './ui/primitives/FlexBox';
import { useGenerateSidebarItems } from '../hooks/useGenerateSidebarItems';
import { Topbar } from './topbar/Topbar';

export default function GenericDashboardLayout({
  children,
  sidebarItems,
  portal,
}: Readonly<{
  children: React.ReactNode;
  sidebarItems: TListItemType[];
  portal: TPortalType;
}>) {
  const { generateSidebarMainStats, generateSidebarMenuItem } =
    useGenerateSidebarItems();

  return (
    <FlexBox
      sx={{
        background: 'white',
        height: '100vh',
        paddingTop: '68px',
      }}
    >
      <CssBaseline />
      <Topbar tabs={sidebarItems} portal={portal} />
      <Sidebar
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
        <Box width={'calc(100% - 440px)'} height={'100%'} marginRight={'440px'}>
          <Container>{children}</Container>
        </Box>
      </Box>
    </FlexBox>
  );
}
