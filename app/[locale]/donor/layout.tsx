import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { donorTabs } from '@/app/_lib/shared/utils/consts';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RequesterDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GenericDashboardLayout tabs={donorTabs} portal={'donor'}>
      {children}
    </GenericDashboardLayout>
  );
}
