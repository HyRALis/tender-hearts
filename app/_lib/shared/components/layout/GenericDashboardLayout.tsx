import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { TListItemType, TPortalType } from '@/app/_lib/types/shared';
import { useGenerateSidebarItems } from '../../hooks/useGenerateSidebarItems';
import { FlexBox } from '../ui/primitives/FlexBox';
import { Topbar } from './topbar/Topbar';
import { Sidebar } from './sidebar/Sidebar';
import { COLORS } from '../../utils/consts';

export default function GenericDashboardLayout({
  children,
  tabs,
  portal,
}: Readonly<{
  children: React.ReactNode;
  tabs: TListItemType[];
  portal: TPortalType;
}>) {
  const { generateSidebarMainStats, generateSidebarMenuItem } =
    useGenerateSidebarItems();

  return (
    <FlexBox
      sx={{
        background: `${COLORS.ACCENT}05`,
        height: '100vh',
        paddingTop: '68px',
      }}
    >
      <CssBaseline />
      <Topbar tabs={tabs} portal={portal} />
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
