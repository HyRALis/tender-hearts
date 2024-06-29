import GenericDashboardLayout from '@/app/_lib/shared/components/layout/GenericDashboardLayout';
import { RoleValidationWrapper } from '@/app/_lib/shared/components/role-validation/RoleValidationWrapper';
import { DONOR_TABS } from '@/app/_lib/shared/utils/consts';
export default async function RequesterDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleValidationWrapper role={'donor'}>
      <GenericDashboardLayout tabs={DONOR_TABS} portal={'donor'}>
        {children}
      </GenericDashboardLayout>
    </RoleValidationWrapper>
  );
}
