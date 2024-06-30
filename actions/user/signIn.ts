'use server';
import { findUserByEmail } from '@/app/api/_utils/findUser';
import connectDb from '@/app/config/db';
import * as bcrypt from 'bcryptjs';

export const signInWithCredentials = async (
  email: string,
  password: string
) => {
  await connectDb();

  const user = await findUserByEmail(email);

  if (user && user.password) {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return user;
    } else {
      return null;
    }
  }

  return null;
};
