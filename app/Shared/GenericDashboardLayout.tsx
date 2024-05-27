'use client';

import '../globals.css';
import { AppBarStyled } from '@/app/Shared/materialStyling';
import React, { useState } from 'react';
import { Container, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Sidebar } from './components/Sidebar/Sidebar';
import { TListItemType } from './components/Sidebar/primitives/SidebarListItem';

export default function GenericDashboardLayout({
    children,
    sidebarItems,
    pageName
}: Readonly<{
    children: React.ReactNode;
    sidebarItems: TListItemType[];
    pageName: string;
}>) {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div style={{ display: 'flex', background: 'white', height: '100vh', paddingTop: '68px' }}>
            <CssBaseline />
            <AppBarStyled position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {`Tender Hearts | ${pageName}`}
                    </Typography>
                </Toolbar>
            </AppBarStyled>
            <Sidebar isOpen={open} handleDrawerClose={handleDrawerClose} items={sidebarItems} />
            <main style={{ flexGrow: 1, padding: '24px', height: '100%', overflowY: 'auto' }}>
                <Container>{children}</Container>
            </main>
        </div>
    );
}
