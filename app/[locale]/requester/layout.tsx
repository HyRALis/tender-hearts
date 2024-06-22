import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { REQUESTER_TABS } from '@/app/_lib/shared/utils/consts';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function DonorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GenericDashboardLayout tabs={REQUESTER_TABS} portal={'requester'}>
      {children}
    </GenericDashboardLayout>
  );
}
