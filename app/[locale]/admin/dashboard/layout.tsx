import GenericDashboardLayout from '@/app/Shared/GenericDashboardLayout';
import { TListItemType } from '@/app/Shared/components/Sidebar/primitives/SidebarListItem';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarItems: TListItemType[] = [
    'Dashboard',
    'Manage Users',
    'Manage Requests',
    'Reports',
    'Logout',
  ];

  return (
    <GenericDashboardLayout
      sidebarItems={sidebarItems}
      pageName='Admin'
      portal={'admin'}
    >
      {children}
    </GenericDashboardLayout>
  );
}
