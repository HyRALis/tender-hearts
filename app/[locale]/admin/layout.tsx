import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { ADMIN_TABS } from '@/app/_lib/shared/utils/consts';
import { RoleValidationWrapper } from '@/app/_lib/shared/components/role-validation/RoleValidationWrapper';

export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleValidationWrapper role={'admin'}>
      <GenericDashboardLayout tabs={ADMIN_TABS} portal={'admin'}>
        {children}
      </GenericDashboardLayout>
    </RoleValidationWrapper>
  );
}
