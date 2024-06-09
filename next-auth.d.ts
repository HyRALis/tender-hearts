/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

import NextAuth, { DefaultSession } from 'next-auth';
import { TRole } from './app/_lib/types/shared';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      role: TRole;
    } & DefaultSession['user'];
  }

  interface User {
    contactInformation: {
      emailAddress: string;
    };
  }
}