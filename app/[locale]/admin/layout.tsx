import GenericDashboardLayout from '@/app/_lib/shared/components/GenericDashboardLayout';
import { adminTabs } from '@/app/_lib/shared/utils/consts';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GenericDashboardLayout tabs={adminTabs} portal={'admin'}>
      {children}
    </GenericDashboardLayout>
  );
}
