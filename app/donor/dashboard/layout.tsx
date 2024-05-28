'use client';
import GenericDashboardLayout from '@/app/Shared/GenericDashboardLayout';
import { TListItemType } from '@/app/Shared/components/Sidebar/primitives/SidebarListItem';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RequesterDashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const sidebarItems: TListItemType[] = [
        'Dashboard',
        'Browse Requests',
        'Manage Requests',
        'Donation History',
        'Profile',
        'Logout'
    ];

    return (
      <GenericDashboardLayout
        sidebarItems={sidebarItems}
        pageName='Donor'
        portal={'donor'}
      >
        {children}
      </GenericDashboardLayout>
    );
}
