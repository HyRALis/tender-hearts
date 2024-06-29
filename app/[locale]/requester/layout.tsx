import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { UnauthorizedRedirect } from '@/app/_lib/shared/components/unauthorized-redirect/UnauthorizedRedirect';
import { REQUESTER_TABS } from '@/app/_lib/shared/utils/consts';
import { nextAuthOptions } from '@/app/config/nextAuthOptions';
import { getServerSession } from 'next-auth';

export default async function DonorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user.role && session.user.role !== 'requester') {
    return <UnauthorizedRedirect role={session.user.role} />;
  } else {
    return (
      <GenericDashboardLayout tabs={REQUESTER_TABS} portal={'requester'}>
        {children}
      </GenericDashboardLayout>
    );
  }
}
