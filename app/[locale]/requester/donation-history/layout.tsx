import React from 'react';
import GenericDashboardLayout from '@/app/_lib/shared/components/GenericDashboardLayout';
import { requesterTabs } from '@/app/_lib/shared/utils/consts';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function DonationHistoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GenericDashboardLayout tabs={requesterTabs} portal={'requester'}>
      {children}
    </GenericDashboardLayout>
  );
}
