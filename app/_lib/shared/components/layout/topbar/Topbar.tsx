'use client';

import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import {
  NavigationTabs,
  NavigationTabsProps,
} from './primitives/NavigationTabs';

interface ElevationScrollProps {
  children: ReactElement;
}

const ElevationScroll: FC<ElevationScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: typeof window !== 'undefined' ? window : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export const Topbar: FC<NavigationTabsProps> = ({ portal, tabs }) => {
  return (
    <ElevationScroll>
      <AppBar sx={{ backgroundColor: 'transparent' }}>
        <Box width={'calc(100% - 440px)'} height={'100%'} marginRight={'440px'}>
          <Container>
            <Toolbar>
              <NavigationTabs tabs={tabs} portal={portal} />
            </Toolbar>
          </Container>
        </Box>
        <Container></Container>
      </AppBar>
    </ElevationScroll>
  );
};
