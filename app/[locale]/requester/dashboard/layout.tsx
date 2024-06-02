import GenericDashboardLayout from '@/app/_lib/shared/components/GenericDashboardLayout';
import { TListItemType } from '@/app/_lib/types/shared';
import { useTranslations } from 'next-intl';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function DonorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations('Requester');

  const sidebarItems: TListItemType[] = [
    'Dashboard',
    'Submit Request',
    'Track Requests',
    'Profile',
    'Logout',
  ];

  return (
    <GenericDashboardLayout sidebarItems={sidebarItems} portal={'requester'}>
      {children}
    </GenericDashboardLayout>
  );
}
