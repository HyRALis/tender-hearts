import React, { FC, ReactNode, useEffect } from 'react';
import { UnauthorizedRedirect } from './UnauthorizedRedirect';
import { TRole } from '@/app/_lib/types/shared';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const RoleValidationWrapper: FC<{
  role: TRole;
  children: ReactNode;
}> = async ({ role, children }) => {
  const session = await auth();

  if (!session) {
    redirect('/en/login');
  }

  if (session && session.user.role && session.user.role !== role) {
    return <UnauthorizedRedirect role={session.user.role} />;
  } else {
    return <>{children}</>;
  }
};
