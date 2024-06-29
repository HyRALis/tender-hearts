'use client';
import React, { FC, ReactNode, useEffect } from 'react';
import { UnauthorizedRedirect } from './UnauthorizedRedirect';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/config/nextAuthOptions';
import { TRole } from '@/app/_lib/types/shared';
import { getSession, useSession } from 'next-auth/react';

export const RoleValidationWrapper: FC<{
  role: TRole;
  children: ReactNode;
}> = ({ role, children }) => {
  const session = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  if (session && session.data?.user.role && session.data.user.role !== role) {
    return <UnauthorizedRedirect role={session.data.user.role} />;
  } else {
    return <>{children}</>;
  }
  // return <>{children}</>;
};
