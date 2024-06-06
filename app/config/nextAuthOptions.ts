import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitchProvider from 'next-auth/providers/twitch';
import connectDb from './db';
import User from '../_lib/models/User';
import { RoleEnum } from '../_lib/types/shared';
import { JWT } from 'next-auth/jwt';

export const nextAuthOptions: AuthOptions = {
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
  ],
  callbacks: {
    //Invokes on successful sign in
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

        console.log({ newUser });

        await newUser.save();
      }

      return true;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      const user: any = User.findOne({
        contactInformation: { email: session.user?.email },
      });
      session.user.id = user._id;
      session.accessToken = token.accessToken;

      return session;
    },
  },
};
