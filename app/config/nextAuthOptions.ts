import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitchProvider from 'next-auth/providers/twitch';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDb from './db';
import User from '../_lib/models/User';
import { RoleEnum } from '../_lib/types/shared';
import { JWT } from 'next-auth/jwt';
import * as bcrypt from 'bcryptjs';
import { findUserByEmail, findUserById } from '../api/_utils/findUser';

export const nextAuthOptions: AuthOptions = {
  pages: {
    signIn: '/en/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
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

        await connectDb();

        const user = await findUserByEmail(credentials?.email.toLowerCase());

        if (user && user.password) {
          const match = await bcrypt.compare(
            credentials?.password,
            user.password
          );

          if (match) {
            return user;
          } else {
            return null;
          }
        }

        return null;
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
    async session({ session, token }: { session: any; token: JWT }) {
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

      return session;
    },
  },
};
