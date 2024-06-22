import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { ADMIN_TABS } from '@/app/_lib/shared/utils/consts';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GenericDashboardLayout tabs={ADMIN_TABS} portal={'admin'}>
      {children}
    </GenericDashboardLayout>
  );
}
