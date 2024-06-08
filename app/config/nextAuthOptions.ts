import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitchProvider from 'next-auth/providers/twitch';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDb from './db';
import User from '../_lib/models/User';
import { RoleEnum } from '../_lib/types/shared';
import { JWT } from 'next-auth/jwt';
import * as bcrypt from 'bcrypt';

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
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        // Add logic here to look up the user from the credentials supplied
        await connectDb();

        const user = await User.findOne({
          'contactInformation.emailAddress': credentials?.email.toLowerCase(),
        }).exec();

        if (user && user.password) {
          // Any object returned will be saved in `user` property of the JWT
          const match = await bcrypt.compare(
            credentials?.password,
            user.password
          );

          if (match) {
            return user;
          } else {
            return null;
          }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      await connectDb();
      const user = await User.findOne({
        'contactInformation.emailAddress': profile?.email,
      }).exec();

      if (!user) {
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
      const user: any = await User.findOne({
        'contactInformation.emailAddress': session.user?.email,
      });

      session.user.id = user._id;
      session.user.role = user.role;
      session.accessToken = token.accessToken;

      return session;
    },
  },
};
