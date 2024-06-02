import GenericDashboardLayout from '@/app/_lib/shared/components/GenericDashboardLayout';
import { TListItemType } from '@/app/_lib/types/shared';
import { useTranslations } from 'next-intl';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations('Admin');

  const sidebarItems: TListItemType[] = [
    'Dashboard',
    'Manage Users',
    'Manage Requests',
    'Reports',
    'Logout',
  ];

  return (
    <GenericDashboardLayout sidebarItems={sidebarItems} portal={'admin'}>
      {children}
    </GenericDashboardLayout>
  );
}
