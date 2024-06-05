import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

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
  ],
  callbacks: {
    //Invokes on successful sign in
    async signIn({ profile }) {
      //connect to the databse

      //check if the user exists

      //if not add user to database

      //return true to allow sign in
      return false;
    },
    // Modify the session option
    async session({ session }) {
      //get user from database

      //assign user id to the session

      //return session
      return session;
    },
  },
};
