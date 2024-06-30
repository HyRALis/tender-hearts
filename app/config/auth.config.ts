import { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitchProvider from 'next-auth/providers/twitch';
import CredentialsProvider from 'next-auth/providers/credentials';

import { JWT } from 'next-auth/jwt';
import connectDb from './db';
import { findUserByEmail, findUserById } from '../api/_utils/findUser';
import User from '../_lib/models/User';
import { RoleEnum } from '../_lib/types/shared';
import { signInWithCredentials } from '@/actions/user/signIn';

export default {
  pages: {
    signIn: '/en/login',
  },
  providers: [
    GoogleProvider({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    TwitchProvider({
      authorization: {
        params: {
          scope: 'openid user:read:email',
          prompt: 'consent',
          response_type: 'code',
        },
      },
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Sign in with',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'example@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        return await signInWithCredentials(
          credentials.email as string,
          credentials.password as string
        );
      },
    }),
  ],
  callbacks: {
    async signIn({ profile, user, account }) {
      await connectDb();

      let existingUser;

      if (profile && profile.email) {
        existingUser = await findUserByEmail(profile.email);
      } else {
        existingUser = await findUserByEmail(
          user.contactInformation.emailAddress
        );
      }

      if (!existingUser && account?.provider !== 'credentials') {
        const username = profile?.name?.slice(0, 25);
        const newUser = new User({
          fullName: username,
          contactInformation: {
            emailAddress: profile?.email,
          },
          profileImage: profile?.image,
          role: RoleEnum.Donor,
        });

        await newUser.save();
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      await connectDb();
      let existingUser = null;

      if (session.user && session.user.email) {
        existingUser = await findUserByEmail(session.user.email);
      } else {
        existingUser = await findUserById(token.sub as string);
      }

      session.user.id = existingUser._id;
      session.user.role = existingUser.role;
      session.user.name = existingUser.fullName;
      session.accessToken = token.accessToken;

      console.log({ session });

      return session;
    },
  },
} satisfies NextAuthConfig;
