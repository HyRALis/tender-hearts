'use client';
import GenericDashboardLayout from '@/app/Shared/GenericDashboardLayout';
import { TListItemType } from '@/app/Shared/components/Sidebar/primitives/SidebarListItem';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function DonorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarItems: TListItemType[] = [
    'Dashboard',
    'Submit Request',
    'Track Requests',
    'Profile',
    'Logout',
  ];

  return (
    <GenericDashboardLayout
      sidebarItems={sidebarItems}
      pageName='Requester'
      portal={'requester'}
    >
      {children}
    </GenericDashboardLayout>
  );
}