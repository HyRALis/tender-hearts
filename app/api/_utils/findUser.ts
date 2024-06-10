import User from '@/app/_lib/models/User';

export const findUserByEmail = async (email: string) =>
  await User.findOne({ 'contactInformation.emailAddress': email }).exec();

export const findUserById = async (id: string) =>
  await User.findById(id).exec();
