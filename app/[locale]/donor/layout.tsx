import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { UnauthorizedRedirect } from '@/app/_lib/shared/components/unauthorized-redirect/UnauthorizedRedirect';
import { DONOR_TABS } from '@/app/_lib/shared/utils/consts';
import { nextAuthOptions } from '@/app/config/nextAuthOptions';
import { getServerSession } from 'next-auth';

export default async function RequesterDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user.role && session.user.role !== 'donor') {
    return <UnauthorizedRedirect role={session.user.role} />;
  } else {
    return (
      <GenericDashboardLayout tabs={DONOR_TABS} portal={'donor'}>
        {children}
      </GenericDashboardLayout>
    );
  }
}
