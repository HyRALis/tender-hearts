import NextAuth from 'next-auth';
import authConfig from '@/app/config/auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
});