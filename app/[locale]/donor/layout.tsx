import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { DONOR_TABS } from '@/app/_lib/shared/utils/consts';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RequesterDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GenericDashboardLayout tabs={DONOR_TABS} portal={'donor'}>
      {children}
    </GenericDashboardLayout>
  );
}
