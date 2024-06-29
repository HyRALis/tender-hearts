import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { RoleValidationWrapper } from '@/app/_lib/shared/components/role-validation/RoleValidationWrapper';
import { REQUESTER_TABS } from '@/app/_lib/shared/utils/consts';

export default async function DonorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleValidationWrapper role={'requester'}>
      <GenericDashboardLayout tabs={REQUESTER_TABS} portal={'requester'}>
        {children}
      </GenericDashboardLayout>
    </RoleValidationWrapper>
  );
}
