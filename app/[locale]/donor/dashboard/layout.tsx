'use client';
import GenericDashboardLayout from '@/app/_lib/shared/components/GenericDashboardLayout';
import { TListItemType } from '@/app/_lib/types/shared';
import { useTranslations } from 'next-intl';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RequesterDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations('Donor');
  const sidebarItems: TListItemType[] = [
    'Dashboard',
    'Browse Requests',
    'Manage Requests',
    'Donation History',
    'Profile',
    'Logout',
  ];

  return (
    <GenericDashboardLayout sidebarItems={sidebarItems} portal={'donor'}>
      {children}
    </GenericDashboardLayout>
  );
}
