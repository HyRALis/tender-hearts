import mongoose, { Document, Schema } from 'mongoose';
import { TRole } from '../types/shared';

// TypeScript interface for User
export interface IUser extends Document {
  userId: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  contactInformation: {
    phoneNumber: string;
    emailAddress: string;
  };
  homeAddress: {
    streetAddress: string;
    city: string;
    postalCode: string;
  };
  role: TRole;
}

// Mongoose schema for User
const UserSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true },
    password: { type: String, required: false },
    dateOfBirth: { type: String, required: false },
    gender: { type: String, required: false },
    profileImage: { type: String, required: false },
    contactInformation: {
      emailAddress: { type: String, required: true },
      phoneNumber: { type: String, required: false },
    },
    homeAddress: {
      streetAddress: { type: String, required: false },
      city: { type: String, required: false },
      postalCode: { type: String, required: false },
    },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

// Exporting the User model
export default mongoose.models.User ||
  mongoose.model<IUser>('User', UserSchema);
