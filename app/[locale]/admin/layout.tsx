import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { ADMIN_TABS } from '@/app/_lib/shared/utils/consts';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/config/nextAuthOptions';
import { UnauthorizedRedirect } from '@/app/_lib/shared/components/unauthorized-redirect/UnauthorizedRedirect';

export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user.role && session.user.role !== 'admin') {
    return <UnauthorizedRedirect role={session.user.role} />;
  } else {
    return (
      <GenericDashboardLayout tabs={ADMIN_TABS} portal={'admin'}>
        {children}
      </GenericDashboardLayout>
    );
  }
}
