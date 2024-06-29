import React, { FC, ReactNode } from 'react';
import { UnauthorizedRedirect } from './UnauthorizedRedirect';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/config/nextAuthOptions';
import { TRole } from '@/app/_lib/types/shared';

export const RoleValidationWrapper: FC<{
  role: TRole;
  children: ReactNode;
}> = async ({ role, children }) => {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user.role && session.user.role !== role) {
    return <UnauthorizedRedirect role={session.user.role} />;
  } else {
    return <>{children}</>;
  }
};
